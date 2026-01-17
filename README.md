# 🚀 ProFlow AI: Intelligent SaaS Workspace

ProFlow is a professional-grade, AI-powered project management platform built for high-performing teams. It combines the speed of the MEAN stack with the intelligence of Google Gemini AI to transform project planning into a seamless experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![MEAN Stack](https://img.shields.io/badge/Stack-MEAN-green.svg)
![AI Integration](https://img.shields.io/badge/AI-Gemini_1.5_Flash-purple.svg)

## ✨ Core Features

- **🤖 AI Task Orchestrator:** Leverage Google Gemini 1.5 Flash to automatically generate technical task lists based on project context.
- **🏗️ Premium Kanban Board:** A high-performance task management interface with smooth Drag-and-Drop functionality via Angular CDK.
- **🔐 Enterprise Security:** Stateless JWT-based authentication combined with Bcrypt hashing for military-grade data protection.
- **📊 Real-time Analytics:** Interactive data visualization using Chart.js to monitor project progress and task distribution.
- **💎 Glassmorphism UI:** A sleek, high-fidelity user interface built with the latest Tailwind CSS v4 features.
- **☁️ Scalable Architecture:** Fully persistent data storage hosted on MongoDB Atlas Cloud.

## 🛠️ Tech Stack

**Frontend:**
- Angular 19 (Framework)
- Tailwind CSS v4 (Styling)
- Chart.js (Data Visualization)
- Angular CDK (Drag & Drop)

**Backend:**
- Node.js & Express (Server)
- MongoDB Atlas (Cloud Database)
- Mongoose (Object Data Modeling)

**AI & Security:**
- Google Generative AI (Gemini 1.5 Flash API)
- JSON Web Tokens (JWT) for Authentication
- Bcrypt.js for Password Encryption

## 📂 Project Structure

```text
ProFlow-SaaS/
├── backend/             # Node.js & Express API Logic
│   ├── middleware/      # Auth & Security Middlewares
│   ├── models/          # Database Schemas (User, Project, Task)
│   └── routes/          # API Endpoints (Authentication, AI, Tasks)
└── frontend/            # Angular 19 Application
    ├── src/app/
    │   ├── components/  # Reusable UI Components (Dashboard, Home, Kanban)
    │   ├── services/    # Centralized API Service Handlers
    │   └── guards/      # Route Protection Logic (AuthGuard)
🚀 Getting Started

Prerequisites
Node.js (v18.0.0 or higher)
MongoDB Atlas Account
Google AI Studio API Key
Installation & Setup
Clone the repository:
code
Bash
git clone https://github.com/anandjadhav42004/ProFlow-SaaS.git
cd ProFlow-SaaS
Configure Backend:
code
Bash
cd backend
npm install
# Create a .env file and add:
# PORT=5001
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key
# GEMINI_API_KEY=your_gemini_key
npm run dev
Configure Frontend:
code
Bash
cd ../frontend
npm install
ng serve
Launch Application:
Navigate to http://localhost:4200 in your browser.
📈 Future Roadmap

Real-time Collaboration using Socket.io.

Multi-member team workspace invites.

Dark/Light mode toggle.

File attachments for individual tasks.
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

