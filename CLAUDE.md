# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo này là gì

Landing page **bán** template Ncmaz — không phải template Ncmaz. Sản phẩm thật (Next.js
blog/news/magazine template) nằm ở repo khác; đây là trang marketing một-page trỏ ra ngoài:
demo trên Vercel, trang bán trên ThemeForest, changelog trên GitBook.

Hệ quả: không có data layer, chỉ một route nội dung (`/`) cộng các file convention, và gần
như mọi nút bấm là link sang domain khác. Việc ở repo này là copy, section và thẩm mỹ — không
phải thêm tính năng tương tác như khi dựng một template đem bán.

## Lệnh

`bun` là package manager của repo: `bun.lockb` là lockfile duy nhất được track, còn
`package-lock.json` đã bị xoá ở commit `2c0de70`. README vẫn ghi `npm install` — chỗ đó đã cũ.

Repo không có test. Hai cổng kiểm tra là `bun run lint` và `bun run build` — chạy cả hai
trước khi báo xong việc.

Hai trần phiên bản dưới đây có lý do, đừng nâng qua nếu chưa gỡ được nguyên nhân:

- **TypeScript giữ ở 5.x.** `eslint-config-next` phụ thuộc `typescript-eslint@8`, gói này khai
  peer `typescript: ">=4.8.4 <6.1.0"`. Lên TypeScript 7 là mất lint.
- **ESLint giữ ở 9.x.** ESLint 10 đổi API scope manager mà `@typescript-eslint/scope-manager@8`
  chưa theo; `eslint .` nổ `scopeManager.addGlobals is not a function`.

## Kiến trúc

`src/app/page.tsx` là toàn bộ trang, ghép tuần tự: `Header` → `Hero` → `SectionShowcase` →
`SectionIncluded` → `hr` → `SectionCTA` → `Footer`. Thêm section nghĩa là chèn một component
vào đúng chỗ trong chuỗi đó.

Ba điểm ghép nối nằm chéo file, sửa một đầu phải sửa đầu kia:

- **Anchor nav** — `Header` trỏ `#demos` (→ `SectionShowcase`) và `#features` (→
  `SectionIncluded`), mỗi anchor khai báo hai lần trong `Header.tsx`: `NavLink` cho desktop và
  `MobileNavLink` trong `Popover`.
- **Link ra ngoài** — mọi URL thương mại đi qua `src/constant/index.ts` (`buyNowLink`,
  `demoLink`, `changelogLink`). Đổi link bán hay link demo chỉ sửa ở đây.
- **Font** — `layout.tsx` nạp Inter + Lexend bằng `next/font/google` thành CSS variable, rồi
  `src/styles/tailwind.css` map `--font-sans: var(--font-inter)` và
  `--font-display: var(--font-lexend)`. Nên `font-display` = Lexend, dùng cho heading.

RSC: `src/components/MobileNavigation.tsx` là **file duy nhất** mang `'use client'`, và nó
nhận link qua props chứ không import `@/constant`. Đó là chủ ý: import `@/constant` như value
từ một client component sẽ kéo cả data layer sang browser mà không có cảnh báo nào. Mọi thứ
còn lại là server component — giữ nguyên ranh giới đó khi thêm section.

Popover của Headless UI chiếm ~80 KB, tức 92,7% chunk riêng của route `/`. Nó chỉ phục vụ
mobile nav (`md:hidden`) nhưng vẫn tải ở mọi viewport. Sàn (`/_not-found`) là 476 KB
first-load JS, nên phần cắt được ở tầng app nhỏ hơn sàn nhiều — đừng kỳ vọng nhiều từ việc
tinh chỉnh bundle ở đây.

## Theme (Tailwind v4, CSS-first)

Không có `tailwind.config.js`. Toàn bộ theme nằm trong khối `@theme` của
`src/styles/tailwind.css`.

Khối đó mở đầu bằng `--text-*: initial`, tức **xoá sạch type scale gốc của Tailwind rồi định
nghĩa lại**. `text-sm` ở đây là `0.875rem/1.5rem`, `text-4xl` là `2.5rem/3.5rem` — khác bản
stock. Tra line-height theo trí nhớ Tailwind mặc định sẽ ra sai số.

Prettier chạy `prettier-plugin-tailwindcss` với `tailwindStylesheet: './src/styles/tailwind.css'`,
nên thứ tự class được sort theo đúng theme này.

## Ảnh

Ảnh nằm ở `src/images/` và được import như ES module cho static import của `next/image`; repo
không có thư mục `public/` (đã xoá ở v2).

`src/images/home/*.png` là ảnh chụp các trang demo, **xuất ở đúng 828px** — xem
`docs/adr/0001-resize-showcase-screenshots.md`. Thả ảnh 1800px vào đây là kéo `src/images` từ
668 KB trở lại 9.4 MB.

Khung render của chúng đóng băng ở **368 CSS px** (grid 3 cột trong `max-w-7xl`, trừ `gap-x-8`
và `border-8`). Chuỗi `sizes` trong `SectionShowcase` viết theo đúng con số đó và dùng
`max-width: 639/1023/1279` để khớp mép dưới của breakpoint Tailwind (`min-width: 640/1024/1280`)
— viết trùng số là hai media query cùng khớp tại điểm giao.

Không ảnh nào mang `priority`: LCP của trang là chữ `<h1>`, không phải ảnh.

## Di sản Salient

Codebase fork từ template Tailwind Plus "Salient" (license trong README trỏ về Tailwind Plus).
Nhóm component chết kế thừa từ đó đã bị xoá. Nếu gặp chuỗi lạ kiểu `TaxPal` hay copy quảng cáo
phiên bản cũ thì đó là vết còn sót của Salient, sửa chứ đừng chép theo.

Phần đang sống: nhóm `Section*` là nội dung riêng của Ncmaz, còn `Button`, `Container`,
`NavLink`, `SlimLayout`, `Logo` là primitive kế thừa từ Salient và vẫn dùng.

## Hai thứ đã biết là chưa xong

- **Hai icon social ở `Footer.tsx` là `href="#"`** — cố ý để vậy vì chưa có URL profile thật.
  Có ghi chú tại chỗ.
- **Trang 404 mang tiêu đề của trang chủ.** `not-found.tsx` không export `metadata` được;
  đường sửa sạch là convention `global-not-found.tsx`, nhưng ở Next 16.3.5 nó còn nằm sau cờ
  `experimental.globalNotFound`. Không bật cờ experimental trong bản đem bán.
