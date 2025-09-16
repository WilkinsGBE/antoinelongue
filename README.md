# Antoine Longue — Portfolio & Services

Stack: Next.js (App Router) • Tailwind CSS v4 • Framer Motion. Data-driven via JSON in `/content`.

## Quick Start
1. `npm i` then `npm run dev`.
2. Drop assets into `/public/portfolio/<slug>/`.
3. Update `/content/projects/*.json` hero + gallery filenames.
4. Update `/content/site.json` for email/handles.

## Booking
- Replace `/api/contact` with Resend/Sendgrid/Nodemailer.
- Or swap ContactForm with Calendly embed.

## Presets Store
- Link to Gumroad/Shopify Lite from Services (#presets), or add a dedicated `/shop` route with Stripe if needed.

## Styling
- Colors are controlled via CSS variables in `globals.css`.
- Tweak neon **--accent** and warm **--gold**.

## Build
- `npm run build && npm run start` (Vercel friendly).
