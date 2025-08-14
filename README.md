# ALX Listing App

A clean, scalable, and modular listing web application built with **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. This project follows best practices in modern web development, with an emphasis on reusability, type safety, and clear folder structure.

---

## 🚀 Project Overview

This project is a responsive listing application scaffolded from scratch. It is designed to be:

- Fully type-safe using **TypeScript**
- Style-consistent using **TailwindCSS**
- Lint-compliant using **ESLint**
- Easy to scale with reusable components and organized structure
- Closely aligned with design mockups (from Figma)

---

## 🧱 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Design Reference**: Figma Mockup (provided separately)

---

## 📁 Folder Structure

alx-listing-app/
├── components/ # Reusable UI components (e.g., Button, Card)
├── interfaces/ # TypeScript interfaces and types (e.g., CardProps, ButtonProps)
├── constants/ # App-wide constants
├── public/
│ └── assets/ # Static images, icons, and SVGs
├── styles/
│ └── globals.css # Global styles (Tailwind base, components, utilities)
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
└── ...


---

## 🧩 Reusable Components

### 🪪 Card Component
Used to display listings or items in a modular and visually consistent way.

### 🔘 Button Component
A flexible button component with support for variants and custom styling.

---

## 🔐 TypeScript Integration

All components and logic are strongly typed using custom interfaces located in:

`interfaces/index.ts`


Examples:
- `CardProps`
- `ButtonProps`

This ensures type safety, better tooling support, and improved maintainability.

---

## 🎨 Asset Management

Static assets such as logos, icons, and images are stored under:

`public/assets/`


This allows easy referencing and optimized static handling by Next.js.

---

## ⚙️ How to Run the Project Locally

### 📦 1. Clone the Repository

```bash
git clone https://github.com/{your-username}/alx-listing-app.git
cd alx-listing-app

npm install

npm run dev

```

The app should now be running at:
http://localhost:3000


✅ Verify Setup
Ensure the following works correctly:

    * TailwindCSS styles load properly

    * TypeScript types do not throw errors

    * ESLint runs without issues (npm run lint)

    * All assets load correctly from public/assets/

    * Components like Card and Button render properly

.

🧠 Author
Built with ❤️ by the Donald Umeh.