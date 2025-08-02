# 22R11A67B3_FRONTEND

# 🔗 URL Shortener (Frontend Only)

A simple and lightweight **React-based URL Shortener** that works entirely on the frontend using `localStorage`. This app lets users shorten long URLs into a short custom or auto-generated path and simulates redirection without a backend.

## ✨ Features

- Shorten long URLs instantly
- Auto-generate or provide a custom short path
- Simulated redirection using localStorage
- Simple and clean UI using Tailwind CSS
- Fully client-side (no backend required)

## 🚀 Live Demo

> Coming soon... (You can deploy this on GitHub Pages, Vercel, or Netlify)


## 🛠️ Tech Stack

- React
- Tailwind CSS
- localStorage (for simulating short URL mappings)

## 🧠 How It Works

1. Enter a long URL into the form.
2. App generates a short code or accepts a custom one.
3. Stores the mapping in `localStorage`.
4. When you visit `/sho.rt/<code>`, the app simulates a redirect to the long URL.

> This is purely a **frontend simulation** of how a real URL shortener works.

## 📂 Folder Structure

url-shortener/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── ShortenForm.jsx
│ │ └── StatsTable.jsx
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── tailwind.config.js
├── package.json
└── README.md
