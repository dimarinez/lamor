# Lamor

A premium matchmaking landing page built with Next.js, TypeScript, and Tailwind CSS.

## Local Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Add your Resend API key and emails to .env.local

# Add your logo to public/lamor-logo-top.png

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resend Setup

1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key
3. Add a verified domain (or use `onboarding@resend.dev` as the sender for testing)
4. Set these in `.env.local`:
   - `RESEND_API_KEY` — your API key
   - `CONTACT_TO_EMAIL` — where form submissions are sent
   - `CONTACT_FROM_EMAIL` — verified sender address

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com/new)
3. Add the three environment variables above in the Vercel dashboard
4. Deploy

## Project Structure

```
app/
  layout.tsx          — Root layout with metadata
  page.tsx            — Landing page composition
  globals.css         — Theme and global styles
  api/contact/route.ts — Resend email API route
components/
  navbar.tsx          — Sticky navigation
  hero.tsx            — Hero section
  about.tsx           — About + value cards
  how-it-works.tsx    — 3-step process
  founder-bio.tsx     — Founder story
  signup-form.tsx     — Contact form with validation
  footer.tsx          — Site footer
  section-heading.tsx — Reusable heading component
lib/
  utils.ts            — Shared utilities
```

## Customization

- **Logo**: Replace `public/lamor-logo-top.png` with your brand logo
- **Founder photo**: Add an image in `components/founder-bio.tsx`
- **Colors**: Edit the theme in `app/globals.css`
- **Copy**: All text is inline in each component for easy editing
- **Contact email**: Update `hello@lamor.com` in the footer
