# SEN Conference Website - Maintainer Handoff Guide

This guide is written for future maintainers who may have little or no coding background.  
Use it as a practical checklist for making safe updates.

## 1) Project Overview

### What this project is
- This is the public website for the SEN conference.
- It includes landing page content, speaker pages, schedule pages, partner/sponsor pages, and a ticket purchase flow.
- The ticket flow connects to Stripe and supporting APIs.

### Tech stack (simple explanation)
- `Next.js`: the website framework (handles pages and APIs).
- `React`: used by Next.js for UI components.
- `Tailwind CSS`: styling system (utility classes like `text-center`, `px-6`, etc.).
- `Vercel`: hosting platform used to deploy this project.
- `TypeScript`: typed JavaScript to reduce mistakes.

### High-level structure
- `app/`: pages and components for the site (main place you will edit UI).
- `app/api/`: server routes for Stripe checkout, webhooks, and verification flows.
- `public/lib/`: data files used by the UI (speakers, schedule, partners).
- `docs/`: project documentation.
- `.env.local`: local environment variables (keys/secrets, never share publicly).

### Where major content lives
- Ticket pricing: `app/landing/components/pricing/PricingSection.tsx`
- Speakers data: `public/lib/speakers.json`
- Schedule data: `public/lib/schedule.json`
- Partners/sponsors data: `public/lib/partners.json`
- Social proof testimonials section: `app/landing/components/social_proof/SocialProof.tsx`

---

## 2) Running the Project Locally

### First-time setup
1. Install Node.js (LTS version recommended).
2. Open a terminal in the project folder.
3. Run:

```bash
npm install
```

4. Start local server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Common beginner mistakes
- **Wrong folder**: make sure terminal is inside this project before running commands.
- **Node not installed**: `npm` commands fail if Node.js is missing.
- **Port already in use**: if 3000 is busy, Next.js may choose another port (check terminal output).
- **Missing env variables**: ticket or API features may break if `.env.local` is missing values.

### If dependencies fail
- Try deleting `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

- If on Windows PowerShell, remove folders with:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

---

## 3) Environment Variables (Very Important)

### What `.env.local` is
- A local-only file for secret settings.
- Used for API keys, Stripe credentials, email credentials, and project URLs.
- This file should **not** be shared in chat, email, screenshots, or docs with real values.

### Public vs secret variables
- **Public variables** start with `NEXT_PUBLIC_` and are allowed in browser code.
  - Example: `NEXT_PUBLIC_BASE_URL`
  - Treat these as public configuration.
- **Secret variables** do **not** start with `NEXT_PUBLIC_`.
  - Examples: `STRIPE_SECRET_KEY`, `GMAIL_APP_PASSWORD`, `UPSTASH_REDIS_REST_TOKEN`
  - Keep private; never expose in frontend code.

### Example format
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_LINK=
DISCORD_WEBHOOK_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
GMAIL_USER=
GMAIL_APP_PASSWORD=
GOOGLE_CLIENT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
```

### Edit env vars locally
1. Open `.env.local` in your editor.
2. Update value on the right side of `=`.
3. Save the file.
4. Restart local server (`Ctrl+C`, then `npm run dev`) so changes are applied.

### Add/update env vars in Vercel (step-by-step)
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard).
2. Open the `sen-conference` project.
3. Click **Settings**.
4. Click **Environment Variables**.
5. Add or edit variable name/value.
6. Select which environments it applies to (`Production`, `Preview`, `Development`).
7. Save changes.
8. Redeploy (important):
   - Go to **Deployments** tab.
   - Open latest deployment.
   - Click **Redeploy** so new env values are picked up.

### Warnings
- Never put secret keys in JSON files under `public/`.
- Never hardcode secrets in React components.
- Never share full `.env.local` contents publicly.

---

## 4) Editing Ticket Prices

### Where prices are stored
- File: `app/landing/components/pricing/PricingSection.tsx`
- Look for the `ticketTiers` array.

### Current tiers
- `General`
- `Premium`
- `VIP`

### How to change pricing or text
- Update `price`, `id`, or `features` values in each object.

Example:
```tsx
const ticketTiers = [
  {
    id: "General",
    features: [
      "Full access to all talks, panels, and workshops",
      "Networking with attendees and speakers",
    ],
    price: 50,
    color: "bg-[#D0D0D0]",
  },
];
```

### Important safety tips
- Keep object keys the same (`id`, `features`, `price`, `color`, `featured`).
- `price` should remain a number (not text), because UI formats it as `$${price}`.
- If changing tier names, also test the full pricing section visually.
- If removing a tier, make sure layout still looks balanced on mobile + desktop.

---

## 5) Editing Partners/Sponsors

### Where sponsor data lives
- Data file: `public/lib/partners.json`
- Display page: `app/partners/page.tsx`

### Data format example
```json
{
  "name": "Sponsor Name",
  "logo": "/assets/partners/company-logo.png",
  "website": "https://example.com",
  "tier": "gold"
}
```

### Add or remove sponsors
- Open `public/lib/partners.json`.
- Add/remove object entries in the array.
- Valid tier values used by UI:
  - `platinum`
  - `gold`
  - `silver`

### Recommended logo standards
- Preferred format: PNG or SVG.
- Target area shown in UI is approximately square (`80x80` display area).
- Upload logos with transparent backgrounds when possible.
- Keep visual style consistent (no blurry or stretched logos).

### Consistency checklist
- Logo path exists and file is committed.
- Website URL starts with `https://`.
- Tier string matches lowercase values exactly.

---

## 6) Editing the Schedule

### Where schedule data lives
- Data file: `public/lib/schedule.json`
- Page renderer: `app/schedule/page.tsx`

### Add a session
- Add one new object to the JSON array.
- Required fields:
  - `type`
  - `startTime`
  - `endTime`
  - `title`
  - `location`
  - `description`
- Optional fields:
  - `image`
  - `speakers`

### Example session object
```json
{
  "type": "Workshop",
  "image": "/assets/schedule/workshop-1.jpg",
  "startTime": "11:30am",
  "endTime": "12:30pm",
  "title": "How to Validate Startup Ideas",
  "speakers": "Jane Smith",
  "location": "Room 123",
  "description": "Hands-on validation frameworks for student founders."
}
```

### Reorder sessions
- Move objects up/down in the JSON array.
- The page reads items in array order.

### Time format expectations
- Keep times consistent, like `8:00am`, `10:15am`.
- Avoid mixing formats (`08:00 AM`, `8am`, etc.) to keep UI clean.

---

## 7) Editing Speakers

### Where speaker data lives
- Data file: `public/lib/speakers.json`
- Page renderer: `app/speakers/page.tsx`
- Card component: `app/speakers/components/SpeakerCard.tsx`

### Speaker object example
```json
{
  "name": "Jane Smith",
  "accomplishments": [
    "Co-founder & CEO of TechStartup",
    "Forbes 30 Under 30",
    "Previously at Google as Product Lead"
  ],
  "image": "/assets/speakers/jane-smith.jpg",
  "linkedin": "https://linkedin.com/in/jane-smith",
  "website": "https://janesmith.com"
}
```

### Photo guidance
- Recommended orientation: portrait.
- Recommended size ratio: about `3:4` (example: `900x1200`).
- Keep image quality sharp but web-friendly (compressed JPG/WEBP if possible).
- Make sure file path matches exactly (case-sensitive in many environments).

### Avoid broken layouts
- Keep `name` reasonably short.
- Keep accomplishments concise (3-5 bullets is ideal).
- Use full URL format for links (`https://...`).

---

## 8) Deploying to Vercel

### How deployment works
- GitHub-connected projects deploy automatically on push.
- Each pull request typically gets a **Preview deployment**.
- Merged changes to `main` deploy to **Production**.

### Manual redeploy steps
1. Open Vercel dashboard project.
2. Go to **Deployments**.
3. Select the deployment you want.
4. Click **Redeploy**.

### If something breaks
1. Open failed deployment in Vercel.
2. Check **Build Logs** for error messages.
3. Confirm required env variables exist in the correct environment.
4. Fix issue and push again, or roll back to a stable deployment.

---

## 9) Emergency Recovery Tips

### Revert bad code changes (safe approach)
- In GitHub, open the commit that caused issues.
- Use **Revert** (creates a new commit that undoes old one).
- Avoid force pushes unless absolutely necessary.

### Restore an older deployment
- In Vercel Deployments, find a previously working deployment.
- Promote/redeploy that version to recover quickly.

### Use GitHub history
- Compare commits and pull requests to identify what changed.
- Restore specific files from known good commits.

### What NOT to touch unless necessary
- `app/api/` Stripe/webhook logic.
- Env variable names and secret values.
- Anything in `.env.local` or Vercel env settings without double-checking impact.

---

## 10) Recommended Maintenance Workflow

Use this process for safer updates:

1. Create a branch  
   - Example: `feature/update-speakers-may`
2. Make small focused changes  
   - One topic per branch if possible.
3. Test locally  
   - Run `npm run dev` and click through affected pages.
4. Push branch to GitHub  
   - Open a pull request.
5. Verify preview deployment in Vercel  
   - Check the live preview URL before merge.
6. Merge into `main`  
   - Prefer squash merge for cleaner history.
7. Verify production site  
   - Quick sanity check after deployment.

---

## Quick Reference: Files You Will Edit Most

- `app/landing/components/pricing/PricingSection.tsx` (ticket tiers)
- `public/lib/partners.json` (sponsor data)
- `public/lib/schedule.json` (session data)
- `public/lib/speakers.json` (speaker data)
- `app/landing/components/social_proof/SocialProof.tsx` (testimonials section)

If unsure, make a small change first, run locally, and confirm the result before larger edits.
