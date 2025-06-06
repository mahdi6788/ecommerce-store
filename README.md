# Next.js E-commerce Platform

![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, full-featured e-commerce platform built with Next.js 15, consisting of two separate applications:

1. **Admin Dashboard** - A comprehensive admin panel for store management
2. **Store** - The customer-facing storefront

## 🚀 Live Demo

**Admin Dashboard**: [View Live Application](https://e-commerce-pied-one-64.vercel.app)   
**Store**: [View Live Application](https://ecommerce-store-iota-liard.vercel.app)  

## Architecture

This project uses a multi-zone architecture with two separate Next.js applications that work together:

- **Admin Dashboard** ([Repository](https://github.com/mahdi6788/e-commerce.git))
  - Secure admin interface for managing products, orders, and customers
  - Analytics and reporting features
  - Content management system

- **Customer Store** ([Repository](https://github.com/mahdi6788/ecommerce-store.git))
  - Customer-facing storefront
  - Product browsing and search
  - Shopping cart and checkout
  - User accounts and order history

Both applications are built with Next.js 15 and share a common backend API and database.

## Features

### Admin Dashboard

- **Authentication & Authorization**
  - Secure admin login
  - Role-based access control

- **Product Management**
  - Create, update, and delete products
  - Manage categories, collections, and attributes
  - Image upload and management

- **Order Management**
  - View and process orders
  - Update order status
  - Generate invoices

- **Customer Management**
  - View customer information
  - Manage customer accounts

- **Analytics**
  - Sales reports

- **Settings**
  - Store configuration

### Customer Store

- **Product Browsing**
  - Browse products by category
  - Search functionality
  - Filter and sort options

- **Shopping Experience**
  - Add to cart

- **Checkout Process**
  - Guest checkout

- **User Accounts**
  - Registration and login
  - Profile management

## Technology Stack

- **Frontend**
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components

- **Backend**
  - Next.js API Routes
  - Server Actions
  - Prisma ORM

- **Database**
  - PostgreSQL

- **Authentication**
  - Clerk

- **Payment Processing**
  - 

- **Image Storage**
  - Cloudinary
