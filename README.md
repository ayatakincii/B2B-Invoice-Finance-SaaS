# B2B Invoice / Finance SaaS

A multi-tenant finance platform for freelancers and SMEs to manage clients, invoices, recurring billing, expenses, tax summaries, and payment tracking.

This project is currently in active development as part of my transition from Frontend Engineering into Full-Stack Development.

---

## 🚀 Project Overview

The goal of this SaaS is to provide a simple yet powerful financial management system for small businesses and freelancers.

Users will be able to:

- Manage clients and organizations
- Create and send invoices
- Track payments and overdue invoices
- Handle recurring billing
- Manage expenses and financial records
- View financial analytics and summaries
- Generate PDF invoices
- Receive automated email notifications

---

## 🏗️ Architecture (Planned)

The system is designed as a scalable full-stack application with a clear separation between frontend and backend.

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Query (or TanStack Query)
- Zustand (state management)

### Backend
- NestJS
- Node.js (Bun runtime planned for performance experiments)
- PostgreSQL (primary database)
- Prisma ORM
- REST API architecture

### Infrastructure
- Docker (containerized development & deployment)
- AWS (planned deployment)
  - RDS (PostgreSQL)
  - S3 (file storage for invoices)
  - SES (email notifications)
  - ECS or EC2 (backend hosting)

---

## 🔐 Core Features (Planned)

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Multi-tenant organization support

### Invoicing System
- Create, edit, and delete invoices
- Invoice status tracking (draft, sent, paid, overdue)
- Recurring invoices
- Discount and tax support
- PDF invoice generation

### Client Management
- Add and manage clients
- Assign invoices to clients
- Track client payment history

### Financial Tracking
- Expense tracking
- Revenue overview
- Tax summaries

### Notifications
- Email reminders for unpaid invoices
- Payment confirmations
- Automated recurring invoice alerts

---

## 📊 Planned Database Design

Core entities include:

- Users
- Organizations (multi-tenant structure)
- Clients
- Invoices
- Invoice Items
- Payments
- Expenses
- Notifications

---

## 🧠 Goals of This Project

This project is not just a CRUD application. The main goals are:

- Build a real-world SaaS architecture
- Practice full-stack system design
- Implement production-level backend logic
- Learn deployment and cloud infrastructure
- Improve scalability and code organization skills

---

## 🛠️ Tech Stack

- Next.js
- React
- TypeScript
- NestJS
- Node.js / Bun
- PostgreSQL
- Prisma
- Docker
- AWS (planned)

---

## 📌 Project Status

🚧 In Active Development

Current focus:
- Backend architecture setup (NestJS + PostgreSQL)
- Authentication system
- Database schema design
- Initial API structure

---

## 📈 Future Improvements

- Stripe integration for payments
- Advanced analytics dashboard
- Mobile-friendly PWA version
- AI-assisted financial insights
- Exporting reports (CSV/PDF)
- Webhooks for integrations

---

## 👨‍💻 Author

Frontend Engineer transitioning into Full-Stack Development  
Focused on building scalable SaaS products with modern technologies.

---

## ⚠️ Note

This project is actively being developed and will evolve over time as new features and architecture improvements are added.
