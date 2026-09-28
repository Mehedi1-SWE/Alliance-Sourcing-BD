Alliance Sourcing BD

A full-stack web application developed for Alliance Sourcing BD,
featuring a customer-facing web application, an administrative
dashboard, and a backend application.

📌 Project Overview

Alliance Sourcing BD is a modern full-stack web platform designed to
provide a professional digital experience for customers and an organized
administrative interface for managing business operations.

The project is organized as a monorepo containing three main
applications:

🌐 Frontend --- Customer-facing web application

🛠️ Admin --- Administrative dashboard

⚙️ Backend --- Server-side application and API

🏗️ Project Structure

Alliance-Sourcing-BD/
│
├── frontend/
│   └── Alliance-Sourcing-BD/
│
├── admin/
│   └── Alliance-Sourcing-BD-Admin/
│
├── backend/
│
├── README.md
├── .gitignore
└── package.json

🌐 Frontend

The frontend is the main customer-facing web application of Alliance
Sourcing BD.

Location

/frontend/Alliance-Sourcing-BD

Technologies

Next.js

React.js

TypeScript

Tailwind CSS

JavaScript

HTML5

CSS3

Frontend Structure

frontend/Alliance-Sourcing-BD/
│
├── app/
├── components/
├── hooks/
├── lib/
├── public/
├── styles/
├── components.json
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json

🛠️ Admin Dashboard

The Admin Dashboard is a dedicated administrative application for
managing the platform.

Location

/admin/Alliance-Sourcing-BD-Admin

Technologies

Next.js

React.js

TypeScript

Tailwind CSS

JavaScript

Admin Structure

admin/Alliance-Sourcing-BD-Admin/
│
├── app/
├── components/
├── lib/
├── public/
├── components.json
├── next.config.mjs
├── package.json
└── tsconfig.json

⚙️ Backend

The backend application provides the server-side architecture and API
layer for the platform.

Location

/backend

Technologies

Node.js

Express.js

REST API

MongoDB

SQL

✨ Features

Frontend

Modern customer-facing web interface

Responsive design

Reusable React components

Next.js application architecture

TypeScript-based development

Tailwind CSS styling

Organized application structure

Responsive layouts

Admin Dashboard

Dedicated administrative interface

Responsive dashboard layout

Reusable components

Next.js architecture

TypeScript support

Tailwind CSS styling

Centralized administration workflow

Backend

Server-side application

REST API architecture

Database integration

Frontend and admin API communication

Scalable backend structure

🧰 Technology Stack

Frontend

Next.js

React.js

TypeScript

Tailwind CSS

JavaScript

HTML5

CSS3

Admin Dashboard

Next.js

React.js

TypeScript

Tailwind CSS

JavaScript

Backend

Node.js

Express.js

REST API

MongoDB

SQL

Development & DevOps

Git

GitHub

Linux

Docker

AWS

CI/CD

🚀 Getting Started

Prerequisites

Make sure you have the following installed:

Node.js

npm or pnpm

Git

Check the installed versions:

node -v
npm -v
git --version

📥 Clone the Repository

git clone https://github.com/Mehedi1-SWE/Alliance-Sourcing-BD.git

Navigate to the project:

cd Alliance-Sourcing-BD

▶️ Run Frontend

Navigate to the frontend application:

cd frontend/Alliance-Sourcing-BD

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend application will normally run at:

http://localhost:3000

▶️ Run Admin Dashboard

Open another terminal and navigate to the admin application:

cd admin/Alliance-Sourcing-BD-Admin

Install dependencies:

npm install

Start the development server:

npm run dev

▶️ Run Backend

Navigate to the backend:

cd backend

Install dependencies:

npm install

Start the backend according to the backend application's configuration.

🔐 Environment Variables

Environment variables should be stored in .env files.

Example:

DATABASE_URL=
MONGODB_URI=
JWT_SECRET=
NEXT_PUBLIC_API_URL=

Never commit sensitive credentials or environment files to GitHub.

🔒 Security

Do not commit sensitive information to the repository.

The following files should remain local:

.env
.env.local
.env.development.local
.env.production.local

Never commit:

API keys

Database credentials

Passwords

Private tokens

Secret keys

🧪 Development

Run the development server:

npm run dev

Create a production build:

npm run build

📦 Production Build

Frontend

cd frontend/Alliance-Sourcing-BD
npm run build

Admin

cd admin/Alliance-Sourcing-BD-Admin
npm run build

Backend

Build and start the backend according to its production configuration.

🔄 Git Workflow

Check the current status:

git status

Pull the latest changes:

git pull origin main

Stage changes:

git add .

Create a commit:

git commit -m "Your commit message"

Push changes:

git push origin main

📁 Monorepo Architecture

This repository follows a monorepo-style architecture.

Alliance-Sourcing-BD/
│
├── frontend/
│   └── Alliance-Sourcing-BD/
│       └── Next.js Application
│
├── admin/
│   └── Alliance-Sourcing-BD-Admin/
│       └── Next.js Admin Application
│
├── backend/
│   └── Backend API
│
├── README.md
├── .gitignore
└── package.json

Keeping the applications inside a single repository makes it easier to
manage the frontend, admin dashboard, and backend together.

🎯 Project Goals

The main goals of this project are:

Build a modern full-stack web platform

Provide a professional customer-facing experience

Develop a structured administrative dashboard

Maintain reusable and scalable components

Use TypeScript for type-safe development

Follow modern Next.js development practices

Maintain clean project architecture

Separate frontend, admin, and backend responsibilities

Use Git and GitHub for version control

Prepare the application for scalable future development

👨‍💻 Developer

Mehedi Hasan

Full-Stack Software Engineer

GitHub:
https://github.com/Mehedi1-SWE

Portfolio:
https://mehedi-hasan-portfolio.vercel.app

📄 License

This project is developed for Alliance Sourcing BD.

All rights reserved.