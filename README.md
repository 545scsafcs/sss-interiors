# 🏠 SSS Interiors Website & WhatsApp Chatbot Integration

A full-stack MERN-based website developed for **SSS Interiors**, featuring lead generation, WhatsApp chatbot integration, admin dashboard, and MongoDB-powered lead management.

## 🌐 Live Demo

**Website:**
https://sss-interiors.vercel.app

**Backend API:**
https://sss-interiors-backend.onrender.com

---

# 📖 Project Overview

SSS Interiors is a professional interior design company. This project was developed to provide a modern online presence, automate customer interactions, and simplify lead management.

The platform allows customers to:

* Explore interior design services
* View project portfolios
* Contact the company
* Book consultations
* Interact through WhatsApp chatbot

Administrators can securely manage all incoming leads through a dedicated dashboard.

---

# ✨ Features

## 🎨 Frontend Features

* Modern Responsive UI
* Hero Section
* About Section
* Services Section
* Portfolio Gallery
* Contact Form
* Mobile Responsive Design
* Smooth Navigation
* SEO Friendly Structure

---

## 🤖 WhatsApp Chatbot

* Twilio WhatsApp Integration
* AI-Powered Responses using Groq
* Automated Customer Interaction
* Consultation Booking
* Lead Collection
* MongoDB Lead Storage

---

## 📊 Admin Dashboard

* Secure Admin Login
* JWT Authentication
* Protected Routes
* Lead Management
* Search Leads
* Filter Leads
* View Lead Details
* Delete Leads

---

## 🗄 Database Features

* MongoDB Atlas Integration
* Lead Storage
* Admin Authentication
* Timestamp Tracking
* Scalable Document Structure

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS3
* AOS Animation Library

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## AI & Chatbot

* Twilio WhatsApp Sandbox
* Groq AI

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```bash
SSS-INTERIOR
│
├── Frontend
│   ├── src
│   ├── assets
│   ├── components
│   ├── pages
│   └── public
│
├── Backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
├── whatsapp-bot
│   ├── index.js
│   └── messages.js
│
└── README.md
```

# 🔐 Admin Access

Admin Login URL:

https://sss-interiors.vercel.app/admin/login

Admin Features:

* Lead Monitoring
* Lead Search
* Lead Filtering
* Lead Management
* Secure Authentication

---

# 🔗 API Endpoints

## Lead APIs

### Create Lead

```http
POST /api/leads
```

### Get All Leads

```http
GET /api/leads
```

### Delete Lead

```http
DELETE /api/leads/:id
```

---

## Admin APIs

### Admin Login

```http
POST /api/admin/login
```

---

# 📱 WhatsApp Bot Testing

Send the following message:

```text
join negative-chapter
```

To:

```text
+1 415 523 8886
```

After receiving the Twilio confirmation message, you can start chatting with the bot.

> Note: The first response may take 1–2 minutes due to Render backend cold start.

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/545scsafcs/sss-interiors.git
```

## Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

## Backend Setup

```bash
cd Backend

npm install

npm start
```

## WhatsApp Bot Setup

```bash
cd whatsapp-bot

npm install

node index.js
```

---

# 🔧 Environment Variables

## Backend (.env)

```env
MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

PORT=5000
```

## WhatsApp Bot (.env)

```env
TWILIO_ACCOUNT_SID=YOUR_SID

TWILIO_AUTH_TOKEN=YOUR_TOKEN

GROQ_API_KEY=YOUR_API_KEY

BACKEND_URL=YOUR_BACKEND_API
```

---

# 📈 Learning Outcomes

This project helped us gain hands-on experience in:

* Full-Stack Web Development
* React Development
* REST API Design
* MongoDB Integration
* Authentication & Security
* WhatsApp Bot Development
* Deployment Workflows
* Team Collaboration
* Real-World Debugging

---

# 👨‍💻 Team

### Team Lead

**Vineet Yadav**

Responsibilities:

* Project Architecture
* UI/UX Design
* Frontend Development
* Backend Development
* Database Integration
* Authentication System
* Deployment
* Testing & Debugging

### Team Members

**Utkarsh**

* Bot Integration Support
* Testing Assistance

**Anjali**

* Documentation Support
* Database Assistance

---

# 📄 Documentation

Project Documentation:

https://drive.google.com/file/d/1LzEZ7pPwANLSg9SrNQGsn_pkJnOklbAx/view

---

# 🎯 Future Improvements

* Lead Status Tracking
* CSV Export
* CRM Integration
* Email Notifications
* Analytics Dashboard
* Multi-Admin Support

---

# ⭐ Acknowledgements

Special thanks to NIAT and NxtWave for providing the learning environment and guidance that helped us build and deploy this project.

---

Made with ❤️ by Team SSS Interiors
