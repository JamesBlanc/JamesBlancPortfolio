# James Blanc Portfolio Website

A polished musician portfolio website for James Blanc built with Vite, React, TypeScript, and Tailwind CSS.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

```text
src/
  components/
  data/
  hooks/
  pages/
  styles/
public/
  images/
```

## Included Pages

- `/` Home
- `/about` About
- `/gallery` Gallery
- `/audio` Audio
- `/vision` Vi$ion
- `/contact` Contact

## Photos

The current build uses the supplied photo set placed in [`public/images`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/public/images).

Current key image paths:

- `/images/james-hero.jpg`
- `/images/live-performance.jpg`
- `/images/studio-session.jpg`
- `/images/james-sax-portrait.jpg`
- `/images/closeup-sax.jpg`
- `/images/performance-burgundy.jpg`
- `/images/mural-sax.jpg`
- `/images/studio-performance.jpg`
- `/images/studio-chair.jpg`
- `/images/studio-monochrome.jpg`

To replace images later, keep the same filenames or update the paths in [`siteContent.ts`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/src/data/siteContent.ts).

## Form Integration

The contact form already posts to [`/api/contact`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/api/contact.ts) and sends email through Resend when environment variables are configured.

Required environment variables:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Current delivery target:

- `CONTACT_TO_EMAIL=visionaryproductionss@gmail.com`

Important note:

- `CONTACT_FROM_EMAIL` must be a sender address or domain that has been verified inside Resend. The inbox recipient can still be `visionaryproductionss@gmail.com`.

For local or Vercel testing, the form will return a setup error until those variables are present.

## Deployment Notes

This app is ready for Vercel and Netlify.

- Vercel: import the project and deploy with default Vite settings.
- Netlify: build command `npm run build`, publish directory `dist`.
- Generic static hosting: use SPA fallback routing so deep links like `/services` resolve to `index.html`.

## Customization

- Site copy and navigation: [`siteContent.ts`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/src/data/siteContent.ts)
- Branding and logo: [`LogoMark.tsx`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/src/components/LogoMark.tsx)
- Global styles and fonts: [`index.css`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/src/styles/index.css)
- Theme colors and typography: [`tailwind.config.js`](/Users/douglasplummer/Documents/Codex/2026-06-04/files-mentioned-by-the-user-161/tailwind.config.js)
