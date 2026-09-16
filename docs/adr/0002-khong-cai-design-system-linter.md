# 0002 — Không cài `@shadcn/lint` vào repo này

Ngày: 2026-09-16
Trạng thái: đã quyết

## Bối cảnh

Skill siết template có một bước dựng design-system linter (`@shadcn/lint`, 6 rule). Luật của
nó là **đo rồi mới quyết**, không đọc danh sách rule mà quyết.

## Số đo trên repo này

| rule                     | sẽ gắn cờ | phán quyết                                                                                                    |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------- |
| `no-raw-colors`          | 82        | **off** — palette của template _chính là_ thang màu                                                           |
| `no-arbitrary-values`    | 6         | **off** — cả 6 đều cố ý (`mask-[radial-gradient(...)]`, `aspect-14/16`, `text-4xl/[1.2]`)                     |
| `no-restyle`             | 0         | không có gì để gắn cờ                                                                                         |
| `no-inline-styles`       | 18        | **off** — cả 18 nằm trong `opengraph-image.tsx`, nơi satori bắt buộc inline style vì Tailwind không chạy ở đó |
| `no-unknown-classes`     | **0**     | xem dưới                                                                                                      |
| `require-static-classes` | **0**     | không có class nào dựng bằng nội suy chuỗi                                                                    |

Hai rule cuối là hai rule duy nhất đáng giữ theo tài liệu của skill — chúng bắt loại lỗi mắt
người không thấy: class viết sai thì không sinh CSS và layout lệch trong im lặng.

Đã kiểm thủ công một lần: trích toàn bộ 258 token giống-class trong `src/`, đối chiếu từng cái
với stylesheet đã biên dịch. **Không có token nào không sinh CSS.** (Ba class `2xl:*` thoạt
nhìn như thiếu, thực ra Tailwind ghi selector là `.\32 xl\:mt-36` — escape chữ số đầu — nên là
dương tính giả của phép kiểm, không phải lỗi của code.)

## Quyết định

Không cài.

Bốn rule là off theo đúng khuyến nghị cho template đem bán. Hai rule còn lại hôm nay bắt được
**0 lỗi**, nên cái giá phải trả — thêm một dependency, thêm một công cụ mà breaking change của
nó sẽ thành ticket hỗ trợ chống lại template khách đã mua — không đổi lấy được gì.

## Phải làm gì khi repo lớn lên

Phép kiểm thủ công ở trên là một lần, không phải rào chắn. Khi số component tăng đáng kể, chạy
lại nó (`no-unknown-classes` là rule đáng quan tâm) rồi quyết lại. Nếu lúc đó có cài, cấu hình
ở chỗ bước đóng gói cắt được, đừng để nó đi theo file zip của khách.
