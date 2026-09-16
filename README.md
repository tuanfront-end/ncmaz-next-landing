# Landing page for Ncmaz

Landing page for - Ncmaz - Blog, News, Magazine Next.js & Tailwind CSS template.

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Before you deploy

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the domain
you are deploying to:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

It is read at build time and written into the canonical tag, the Open Graph and
Twitter URLs, `sitemap.xml` and `robots.txt`. On Vercel it is optional — the
project's production URL is used when the variable is not set. Anywhere else,
building without it falls back to `http://localhost:3000` and prints a warning.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
