# Mobility Hub - Frontend

Mobility Hub is a web application frontend built with modern React. It provides an intuitive platform for exploring, buying, selling, and listing mobility-related products in a marketplace setting.

## Features

- **Home & Navigation**: Beautiful and responsive landing page.
- **Product Catalog**: Browse available mobility products.
- **Marketplace**: Dedicated space for users to discover items.
- **List an Item**: A comprehensive form for users to add their own products to the platform.
- **Product Details**: Detailed view for individual products.
- **Support & About**: Contact and informational pages.

## Tech Stack

- **React 19**: Component-based UI formulation.
- **Vite**: Next-generation frontend tooling for faster builds and hot module replacement.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
- **React Router v7**: Declarative routing for React applications.
- **Lucide React**: Beautiful and consistent icon set.

## Project Structure

```text
src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable UI components
│   ├── common/     # Navbar, Footer, etc.
│   ├── Home/       # Home page specific components
│   └── Marketplace/# Marketplace specific components
├── Pages/          # Route components (Home, Products, Marketplace, etc.)
├── App.jsx         # Main application component and routing setup
└── main.jsx        # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd MobilityHub-FE
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the local port (usually `http://localhost:5173`) specified by Vite.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check code quality.
- `npm run preview`: Locally preview the production build.

## Fonts and Design

The application utilizes Google Fonts:
- **Fredoka**: For headers and distinct typography.
- **Poppins**: For clean, readable body text.

Styling is handled globally via `index.css` alongside Tailwind CSS utility classes.
