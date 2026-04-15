<h1 align="center">
  🤖 agency.ai
</h1>

<p align="center">
  agency.ai is a modern, fully responsive digital agency website built using React.js and Tailwind CSS. It focuses on delivering a smooth user experience with clean UI, interactive animations, and real-world functionality like form submission and theme switching.

</p>

<p align="center">
  
<img src="https://img.shields.io/badge/React-Build_UI-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-Logic-F7DF1E?style=for-the-badge&logo=javascript"/>
<img src="https://img.shields.io/badge/Framer_Motion-Animations-F7DF1E?style=for-the-badge&logo=framer&logoColor=white&labelColor=black"/>
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>

</p>

---

## 📌 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [✨ Overview](#-overview)
- [🔥 Features](#-features)
- [🚀 Project Preview](#-project-preview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🏗️ Installation](#️-installation--setup)
- [🚀 Production](#-build-for-production)
- [🌐 Deployment](#-deployment)
- [🎯 Highlights](#-key-highlights)
- [📜 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🚀 Live Demo

👉 **Direct Link:** https://agencyai-reactjs.vercel.app/

---

## ✨ Overview

**agency.ai** transforms creative ideas into engaging digital experiences.
It includes multiple sections like **services, portfolio, team, and contact**—making it a complete agency-style frontend project.

It transforms creative ideas into engaging digital experiences with **smooth animations, clean UI, and real-world functionality**.

---

## 🔥 Features

### 🎨 UI & UX

- Fully responsive design (Mobile, Tablet, Desktop)
- Modern UI with Tailwind CSS
- Custom typography (**Manrope font**)
- Smooth scrolling navigation

### 🌙 Dark Mode

- Light/Dark theme toggle
- Detects system preference
- Theme saved in `localStorage`

### 🖱️ Custom Cursor

- Interactive cursor (dot + outline)
- Smooth trailing animation
- Cursor hides on mouse leave

### ⚡ Animations

- Built using **Framer Motion**
- Scroll-based animations
- Staggered effects

### 📩 Contact Form

- Integrated with **Web3Forms API**
- Toast notifications using **react-hot-toast**
- Form validation + reset

### 📊 Sections Included

- Hero Section
- Trusted Companies
- Services
- Our Work
- Team Members
- Contact Form
- Footer with Newsletter

### 🧠 Interactivity

- Animated service cards (hover glow)
- Mobile sidebar navigation
- Dynamic rendering with React Hooks

---

## 🚀 Project Preview

<p align="center">
  <img src="/screenshot_one.png" width="30%" />
  <img src="/screenshot_two.png" width="30%" />
  <img src="/screenshot_three.png" width="30%" />
</p>

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Framer Motion**
- **React Hot Toast**
- **Web3Forms API**
- **React Hooks (useState, useEffect, useRef)**

---

## 📂 Project Structure

```
agency.ai/
│── public/
│   ├── screenshot_one.png
│   ├── screenshot_three.png
│   └── screenshot_two.png
|
│── src/
│   ├── assets/
│   |   ├── ads_icon.svg
│   |   ├── airbnb_logo.svg
│   |   ├── arrow_icon.svg
│   |   ├── assets.js
│   |   ├── bgImage1.png
│   |   ├── bgImage2.png
│   |   ├── close_icon.svg
│   |   ├── coinbase_logo.png
│   |   ├── content_icon.svg
│   |   ├── email_icon.svg
│   |   ├── facebook_icon.svg
│   |   ├── google_logo.svg
│   |   ├── group_profile.png
│   |   ├── hero_img.png
│   |   ├── hero.png
│   |   ├── instagram_icon.svg
│   |   ├── linkedin_icon.svg
│   |   ├── logo_dark.svg
│   |   ├── logo.svg
│   |   ├── marketing_icon.svg
│   |   ├── menu_icon_dark.svg
│   |   ├── menu_icon.svg
│   |   ├── microsoft_logo.png
│   |   ├── moon_icon.svg
│   |   ├── person_icon.svg
│   |   ├── rakuten_logo.png
│   |   ├── social_icon.svg
│   |   ├── sun_icon.svg
│   |   ├── twitter_icon.svg
│   |   ├── work_dashboard_management.png
│   |   ├── work_fitness_app.png
|   |   ├── work_mobile_app.png
│   |   └── zoom_logo.png
|   |
│   ├── components/
│   |   ├── ContactUs.jsx
│   |   ├── Footer.jsx
│   |   ├── Hero.jsx
│   |   ├── Navbar.jsx
│   |   ├── OurWork.jsx
│   |   ├── ServiceCard.jsx
│   |   ├── Services.jsx
│   |   ├── Teams.jsx
│   |   ├── ThemeToggleBtn.jsx
│   |   ├── Title.jsx
│   |   └── TrustedBy.jsx
|   |
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
|
└── README.md

```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/Arnav-Sirkhal/agencyai-reactjs.git
```

2️⃣ Navigate to the project:

```bash
cd agency.ai
```

3️⃣ Install dependencies:

```bash
npm install
```

4️⃣ Run development server:

```bash
npm run dev
```

---

## 🚀 Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project can be deployed easily on:

- 🔗 Vercel
- 🔗 Netlify

---

## 🎯 Key Highlights

- Custom cursor implementation using useRef + animation loop
- Real-world API integration (Web3Forms)
- Advanced UI interactions (hover effects, animated cards)
- Clean component-based architecture
- Performance-friendly animations with viewport control

---

## 📜 License

This project is licensed under the MIT License.  
https://opensource.org/licenses/MIT

---

## 👨‍💻 Author

**Arnav Sirkhal**

GitHub: https://github.com/Arnav-Sirkhal

---

⭐ If you like this project, consider starring the repository!
