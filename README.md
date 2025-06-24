# 🎤 Artistly – Artist Booking Platform

Artistly is a sleek and modern artist booking platform that helps users discover, filter, and onboard performing artists like singers, DJs, dancers, and speakers. Ideal for event planners, organizers, or entertainment businesses.

---

## 🚀 Features

- 🎭 Artist Cards with smooth hover animation
- 🎤 Onboarding form with validation (React Hook Form + Yup)
- 🔍 Category and location-based filtering
- 📄 Submission dashboard for artist listing
- 🖼️ Clean category cards with hover image effects
- 💡 Responsive & modern UI using TailwindCSS
- ⚡ Animations powered by Framer Motion

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Validation**: React Hook Form + Yup
- **Animation**: Framer Motion
- **Icons/Emoji**: Unicode (🎤, 💰, 📍, etc.)
- **Hosting**: (Optional: Vercel / Netlify)

---

## 📦 Folder Structure
project-root/
│
├── components/
│ ├── Header.js
│ ├── ArtistCard.js
│ ├── ArtistForm.js
│ ├── CategoryCard.js
│ └── SubmissionTable.js
│
├── app/
│ ├── page.js
│ ├── artist-listing/
│ ├── onboarding/
│ └── dashboard/
│
├── public/
│ └── images/ ← image assets go here
│
├── data/
│ └── categories.json


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


