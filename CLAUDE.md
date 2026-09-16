# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo này là gì

Landing page **bán** template Ncmaz — không phải template Ncmaz. Sản phẩm thật (Next.js
blog/news/magazine template) nằm ở repo khác; đây là trang marketing một-page trỏ ra ngoài:
demo trên Vercel, trang bán trên ThemeForest, changelog trên GitBook.

Hệ quả: không có data layer, không có route nào ngoài `/` và `not-found`, và gần như mọi nút
bấm là link sang domain khác. Việc ở repo này là copy, section và thẩm mỹ — không phải thêm
tính năng tương tác như khi dựng một template đem bán.

## Lệnh

`bun` là package manager của repo: `bun.lockb` là lockfile duy nhất được track, còn
`package-lock.json` đã bị xoá ở commit `2c0de70`. README vẫn ghi `npm install` — chỗ đó đã cũ.

`npm run lint` **không chạy được**: `next lint` bị gỡ khỏi Next.js 16, và `eslint.config.mjs`
cũng bị xoá ở cùng commit trên. Repo cũng không có test. Cổng kiểm tra duy nhất là
`bun run build` — chạy nó trước khi báo xong việc.

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

RSC: chỉ `Header.tsx` mang `'use client'` (vì Headless UI `Popover` của mobile nav). Toàn bộ
phần còn lại là server component — giữ nguyên ranh giới đó khi thêm section.

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

`src/images/home/*.png` là ảnh chụp các trang demo, nặng 1.1–2.6MB mỗi tấm (tổng `src/images`
khoảng 9.4MB) và đang render với `priority` cho cả sáu. Nếu động vào `SectionShowcase` thì đây
là món đáng tối ưu trước tiên.

## Di sản Salient

Codebase fork từ template Tailwind Plus "Salient" (license trong README trỏ về Tailwind Plus).
Các component sau vẫn nằm trong `src/components/` nhưng **không được import ở bất kỳ đâu**:
`CallToAction`, `Faqs`, `Fields`, `SectionBuilt`, `Testimonials` — kèm theo `background-*.jpg`
và `avatars/`. Grep trúng chúng thì biết đó là code chết, không phải chỗ cần sửa.

Phần đang sống: nhóm `Section*` (trừ `SectionBuilt`) là nội dung riêng của Ncmaz, còn `Button`,
`Container`, `NavLink`, `SlimLayout`, `Logo` là primitive kế thừa từ Salient và vẫn dùng.
