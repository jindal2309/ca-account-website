# Sourabh Sharma & Company — CA Firm Website

A professional, modern website for **Sourabh Sharma & Company, Chartered Accountants**, Jaipur.

Built with **Next.js 14 App Router · TypeScript · Tailwind CSS · shadcn/ui**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Services, About, Partner, Skills, Why Us, Testimonials, Contact CTA |
| `/about` | Firm story, mission, values, journey timeline, work approach |
| `/services` | All 8 services with detailed descriptions and highlights |
| `/team` | CA Sourabh Sharma partner profile — bio, education, skills, highlights |
| `/insights` | Blog listing (4 sample articles) |
| `/insights/[slug]` | Individual article pages (static generation) |
| `/contact` | Contact form, phone/WhatsApp/email, office hours, Google Map embed |

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
# Edit .env.local with your domain if needed
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building for Production

```bash
npm run build
npm run start
```

---

## Deploying to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Set the `NEXT_PUBLIC_BASE_URL` environment variable in the Vercel dashboard to your actual domain

That's it. The site will be live in ~2 minutes.

---

## Enabling Real Email on Contact Form

The contact form uses a **Next.js Server Action**. By default it logs the submission to the console and simulates success.

To send real emails, install [Resend](https://resend.com) (free tier available):

```bash
npm install resend
```

Then in `src/app/actions/contact.ts`, uncomment and complete:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "website@yourdomain.com",
  to: "info@sourabhsharma.ca",
  subject: `New Contact: ${result.data.subject}`,
  text: `Name: ${result.data.name}\nPhone: ${result.data.phone}\nEmail: ${result.data.email}\n\n${result.data.message}`,
});
```

Add `RESEND_API_KEY` to your `.env.local` and Vercel environment variables.

---

## Customising Content

All firm data (name, phone, email, address, services, skills, etc.) is in:

```
src/lib/data.ts
```

Edit this file to update any firm details. The changes will reflect across all pages automatically.

---

## Adding Google Map

In `src/lib/data.ts`, replace the `mapEmbedUrl` value with your actual Google Maps embed URL:

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your office address
3. Click **Share** → **Embed a map** → Copy the `src` URL from the iframe code
4. Paste it into `mapEmbedUrl` in `data.ts`

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer, WhatsApp button
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── team/page.tsx       # Partner profile page
│   ├── contact/page.tsx    # Contact page
│   ├── insights/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Individual blog post
│   ├── actions/
│   │   └── contact.ts      # Server action for contact form
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   ├── ContactForm.tsx     # Contact form (client component)
│   ├── SectionHeader.tsx   # Reusable section heading
│   ├── Badge.tsx           # Tag/badge component
│   └── FAQItem.tsx         # Accordion FAQ item
└── lib/
    ├── data.ts             # All firm content and configuration
    └── utils.ts            # Tailwind class merge utility
```

---

## Favicon & OG Image

Place these files in the `/public` folder:

- `favicon.ico` — browser favicon
- `favicon-16x16.png` — 16×16 favicon
- `apple-touch-icon.png` — 180×180 Apple touch icon
- `og-image.png` — 1200×630 Open Graph image for social sharing

You can generate these at [realfavicongenerator.net](https://realfavicongenerator.net).

---

## Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, Server Components, Server Actions
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — Button, Card, Input, Textarea, Label
- [Lucide React](https://lucide.dev) — Icons
- [Zod](https://zod.dev) — Form validation

---

*Built for Sourabh Sharma & Company, Chartered Accountants, Jaipur.*
