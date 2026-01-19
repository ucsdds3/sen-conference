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

1. Clone the repository with `git clone https://github.com/YOUR-USERNAME/sen-conference-website.git`  
2. Open the repository in your preferred code editor (for VSCode, use the command `code sen-conference-website`)  
3. Run `bun install` to install dependencies  
4. Run `bun dev` to start the development server. The website will now be available at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
sen-conference-website/
├── app/                  # Main Next.js app folder (App Router)
│   ├── favicon.ico       # Favicon for the site
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # App layout component
│   └── page.tsx          # Main landing page
```