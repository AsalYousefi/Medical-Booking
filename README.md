# Medical Booking

A modern medical appointment booking web application built with React and TypeScript.

## ✨ Features

* 🩺 Browse doctors and medical services
* 📅 Book medical appointments
* 🔍 Search and filter doctors
* 🌐 Multi-language support with i18next
* 📱 Responsive design for desktop and mobile
* ⚡ Fast and modern React-based interface

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **i18next**
* **React Router**
* **CSS / Bootstrap**
* **Vercel**

## 📁 Project Structure

```text
src/
├── components/
├── pages/
├── locales/
│   ├── fa/
│   └── en/
├── hooks/
├── utils/
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/AsalYousefi/Medical-Booking.git
cd Medical-Booking
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Internationalization

The application supports multiple languages using **i18next**.

Translation files are organized by language and application section:

```text
locales/
├── fa/
│   ├── header.json
│   ├── home.json
│   └── ...
└── en/
    ├── header.json
    ├── home.json
    └── ...
```

## 🌍 Deployment

The project is deployed using **Vercel**.

The `main` branch represents the production version, while development changes can be tested through preview deployments before being merged into production.

## 📌 Development Workflow

```text
feature branch
      ↓
   staging
      ↓
     main
      ↓
 production
```

Changes are developed and tested before being merged into the production branch.

## 📄 License

This project was created for educational and portfolio purposes.
