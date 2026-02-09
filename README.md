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
3. Run `curl -fsSL https://bun.sh/install | bash && \
export PATH="$HOME/.bun/bin:$PATH"` and then `bun install` to install dependencies  
4. Run `bun dev` to start the development server. The website will now be available at [http://localhost:3000/sen-conference](http://localhost:3000/sen-conference)

---

## Project Structure

```
sen-conference-website/
├── app/                        # All pages, layouts, and components (Next.js App Router)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── Landing.tsx             # Landing page/section
│   ├── tickets/                # Ticketing/payment pages
│   └── components/             # Reusable UI components
├── public/                     # Public assets
│   └── assets/                 # Image and other static assets
├── globals.css
├── next.config.ts
├── tsconfig.json
├── package.json
└── bun.lock


```