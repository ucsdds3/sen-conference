# SEN Conference Website

## Overview
This repository contains the **conference website for the Student Entrepreneurship Network (SEN)** at UC San Diego.  

The site is built using **Next.js** and **TypeScript**, and uses **Bun** as the package manager. The project includes conference information, a landing page, and ticketing functionality via Stripe.

---

## Tech Stack
- Framework: Next.js  
- Language: TypeScript  
- Package Manager: Bun  
- Styling: Tailwind CSS

---

## Setup Instructions

1. Clone the repository with `git clone https://github.com/ucsdds3/sen-conference.git`
2. Open the repository in your preferred code editor (for VSCode, use the command `code sen-conference`)  
3. Make sure Bun is installed on your machine to run `bun install` to install dependencies  
4. Run `bun dev` to start the development server. The website will now be available at [http://localhost:3000](http://localhost:3000)
5. To get the environment variables needed for the APIs to run:
  - Log into the DS3 Vercel.
  - Run `bunx vercel env pull .env.local` to pull the environment variables
  - Change `NEXT_PUBLIC_BASE_URL` to `http://localhost:3000`.

---

## Project Structure

```

sen-conference-website/
├── node_modules/               # Installed dependencies
├── public/                     # Public assets
│   └── assets/                 # Images and other static assets
├── app/                        # All pages, layouts, and components (Next.js App Router)
│   ├── api/                    # API POST scripts
│   ├── tickets/                # Ticketing/payment pages
│   ├── components/             # Home page components
│   ├── globals.css             # CSS Stylesheet
│   ├── page.tsx                # Home page
│   └── layout.tsx              # Root layout

```