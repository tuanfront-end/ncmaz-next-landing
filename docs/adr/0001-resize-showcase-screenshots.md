# 0001 — Resize ảnh showcase xuống 828px, giữ PNG

Ngày: 2026-09-16
Trạng thái: đã áp dụng

## Bối cảnh

`src/images/home/*.png` là ảnh chụp 6 trang demo, nguồn ~1840px, tổng **8.82 MiB
— chiếm 93.9% toàn bộ thư mục ảnh**.

Khung render của chúng bị đóng băng ở **368 CSS px**: grid 3 cột nằm trong
`Container` (`max-w-7xl` = 1280px, trừ `lg:px-8`), trừ `gap-x-8` và `border-8`
của card. Ở DPR 2 thì cần tối đa **736 device px**. Nguồn 1840px tức thừa 2.5×,
vượt ngưỡng "không quá 2× kích thước render lớn nhất".

Trọng lượng wire vốn đã ổn — optimizer của Next chuyển sang WebP lúc serve. Cái
không ai đo là **trọng lượng archive**: buyer tải về đủ 8.82 MiB đó, và nó không
bị tính vào bất kỳ chỉ số Lighthouse nào, nên nó sống sót qua mọi lần audit.

## Quyết định

Resize xuống **828px** (đúng một bậc `deviceSizes` của Next, phủ được 736px cần
thiết), **giữ định dạng PNG**, nén `compressionLevel: 9` + `palette: true`.

8.82 MiB → **0.59 MiB**. Toàn thư mục `src/images`: 9.4 MB → 668 KB.

## Các phương án đã cân nhắc

**Convert sang WebP (0.27 MiB).** Nhẹ hơn 2.2× nữa, nhưng optimizer sẽ phải
encode WebP→WebP lúc serve — mất thêm một thế hệ nén trên chính tấm ảnh mà khách
nhìn để quyết định mua. Giữ PNG thì nguồn còn nguyên một lần encode duy nhất.

**PNG truecolor (2.58 MiB).** An toàn tuyệt đối về màu nhưng nặng gấp 4.4×.

**Giữ nguyên.** Đẩy 8.82 MiB sang buyer để đổi lấy chi tiết không màn hình nào
hiển thị được.

## Vì sao `palette: true` không làm hỏng ảnh

Lượng tử hoá về 256 màu là **có mất mát** và đó là rủi ro thật với ảnh chụp có
gradient. Đã kiểm bằng cách đặt bản gốc cạnh bản resize, cả hai cùng downscale
về 736 device px — đúng kích thước trang render. Ở tỉ lệ đó không phân biệt
được, kể cả trên các thumbnail ảnh thật bên trong screenshot.

Nếu sau này thêm ảnh demo có gradient lớn, kiểm lại bằng đúng cách đó trước khi
áp cùng thiết lập.

## Hệ quả

- Khó đảo ngược: ảnh gốc chỉ còn trong lịch sử git (trước commit này).
- Lấy lại bản gốc: `git show <commit>^:src/images/home/home-5.png > file.png`.
- Ảnh demo mới phải xuất ở 828px, đừng thả ảnh 1840px vào rồi quên.
