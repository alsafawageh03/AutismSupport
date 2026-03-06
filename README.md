# AutismSupport – Mom Connect (Frontend)

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

**AI-Powered Support Platform for Mothers of Children with Autism**

🌐 **Live Demo:** https://auticare-mom-connect.lovable.app  
🎯 **Mobile-first • RTL (Arabic) • Built with React & Tailwind CSS**

AutismSupport Mom Connect is a **supportive digital platform** designed to help mothers **track, understand, and support their autistic child's development** through daily insights, community interaction, and AI-assisted guidance.

This repository contains the **frontend application** that powers the user interface of the platform.

---

## Project Overview

AutismSupport is a web platform created to support parents of children with **Autism Spectrum Disorder (ASD)**.

The system helps parents:

- Track their child’s daily behaviour
- Access educational and supportive resources
- Connect with a moderated community of mothers
- Receive structured insights about their child’s development

The goal is to provide **practical daily support while maintaining privacy, empathy, and safety**.

---

## Core Platform Features

| Feature                  | Description                                                                               |
| :----------------------- | :---------------------------------------------------------------------------------------- |
| **Smart Assessment**     | AI-guided behavioral questionnaire to help understand the child’s needs.                  |
| **Progress Tracking**    | Visual reports and personalised recommendations based on daily entries.                   |
| **Supportive Community** | Moderated feed where mothers can share experiences safely.                                |
| **Child Profile**        | One profile per mother with essential information (nickname, age, challenges, strengths). |
| **Daily Tracking**       | Log sleep, eating, meltdowns, positive moments, etc. (one entry per day).                 |
| **Video Moments**        | Upload short calm videos with private notes.                                              |
| **Resource Library**     | Non‑medical resources (visual schedules, self‑care, activities).                          |
| **AI Chatbot**           | Safe, empathetic assistant offering guidance, encouragement, and activity ideas.          |
| **Gentle Patterns**      | AI‑generated positive insights from tracking history (no diagnosis).                      |

---

## UI Overview

The current landing page reflects the platform’s core values:

**Trust • Simplicity • Empathy**

The interface is designed to be:

- **Mobile-first**
- **RTL-friendly**
- **Simple for non-technical users**

Main UI sections include:

- **Hero** – Platform introduction and primary call-to-action
- **Features Section** – Cards highlighting core platform capabilities
- **How It Works** – A step-by-step explanation of the user journey
- **Call To Action** – Encourages registration

---

## Technology Stack

## Technology Stack

| Layer                | Technology                                       | Purpose                                                                                |
| :------------------- | :----------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Framework**        | React.js (Vite)                                  | React.js (Vite) – Fast development environment for building modern React applications. |
| **Language**         | TypeScript                                       | Type safety and better developer experience.                                           |
| **Styling**          | Tailwind CSS + DaisyUI                           | Rapid, responsive design with built‑in RTL.                                            |
| **State Management** | React Context API                                | Global state (auth, profile, theme).                                                   |
| **Routing**          | React Router                                     | Navigation between pages.                                                              |
| **HTTP Client**      | Axios                                            | Communicate with the ASP.NET Core backend.                                             |
| **Icons**            | Lucide React / React Icons                       | Clean, customisable icons.                                                             |
| **RTL Support**      | `rtl-detect` + Tailwind plugins                  | Perfect Arabic layout.                                                                 |
| **Forms**            | React Hook Form + Zod                            | Performant form handling and validation.                                               |
| **Authentication**   | JWT (stored in httpOnly cookies or localStorage) | Secure user sessions.                                                                  |

---

## Folder Structure

```bash
Autism-Front/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/
│   │   ├── community/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   ├── learning/
│   │   ├── profile/
│   │   └── ui/
│
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│
│   ├── pages/
│   │   ├── auth/
│   │   ├── child/
│   │   ├── assessment/
│   │   ├── report/
│   │   ├── dashboard/
│   │   ├── community/
│   │   ├── learning/
│   │   └── profile/
│
│   ├── services/
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm
- Backend API running

Backend repository:  
https://github.com/fou1100ouacus/AutismSupport

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/alsafawageh03/AutismSupport.git
cd AutismSupport
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Create environment variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=AutismSupport
VITE_DEFAULT_LANGUAGE=ar
```

#### 4. Start development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

### Build for Production

```bash
npm run build
npm run preview
```

---

## Security & Privacy

AutismSupport prioritizes the **privacy and safety of its users**.

- Personal data is handled securely
- Uploaded media is **private by default**
- Community content is **moderated**
- AI features provide **guidance only** and avoid diagnostic claims

---

## Disclaimer

This platform provides **support and informational resources** for parents of children with Autism Spectrum Disorder (ASD).

It **does not replace professional medical advice, diagnosis, or treatment**.

Parents should always consult qualified healthcare professionals regarding their child’s development.

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a Pull Request

---

## License

This project is licensed under the **MIT License**.
