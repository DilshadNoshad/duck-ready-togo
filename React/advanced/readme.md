# Advanced React Starter Template

This is a React starter template with TypeScript, Vite, Tailwind CSS, and Prettier configured. It's ready to help you get started quickly with modern React development.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Linting and Formatting](#linting-and-formatting)
- [Main Package Information](#main-package-information)
- [License](#license)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.0.0)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DilshadNoshad/duck-ready-togo
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

### Building the Project

To build the project for production, use:

```bash
npm run build
```

This command will compile your TypeScript code, optimize the assets, and generate the final build in the `dist` directory.

### Previewing the Build

To preview the production build locally, run:

```bash
npm run preview
```

## Available Scripts

- `dev`: Starts the development server with Vite.
- `build`: Builds the project for production.
- `lint`: Lints the codebase using ESLint.
- `preview`: Previews the production build locally.

## Configuration

### Prettier

Prettier is configured to format your code consistently. Configuration can be found in `.prettierrc` and `prettier.config.js`.

### ESLint

ESLint is set up to enforce coding standards and identify issues. Configuration files include `.eslintrc.js` and `.eslintignore`.

### Tailwind CSS

Tailwind CSS is used for styling. Custom configurations are located in `tailwind.config.js`.

## Linting and Formatting

To ensure code quality and consistency, use the following commands:

- **Linting**: `npm run lint` - Runs ESLint on your codebase.
- **Formatting**: Prettier is set to format files on save. You can manually format all files with:

  ```bash
  npx prettier --write .
  ```

## Main Package Information

### Overview

This project uses the following main packages:

- **React**: A JavaScript library for building user interfaces. [React Documentation](https://reactjs.org/)
- **TypeScript**: A strongly typed programming language that builds on JavaScript. [TypeScript Documentation](https://www.typescriptlang.org/)
- **Vite**: A fast build tool and development server for modern web projects. [Vite Documentation](https://vitejs.dev/)
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs. [Tailwind CSS Documentation](https://tailwindcss.com/)
- **Prettier**: An opinionated code formatter. [Prettier Documentation](https://prettier.io/)
- **ESLint**: A tool for identifying and fixing problems in your JavaScript code. [ESLint Documentation](https://eslint.org/)

### Dependencies

- **axios**: Promise-based HTTP client for the browser and Node.js.
- **react-icons**: Popular icons for React.
- **react-router-dom**: Declarative routing for React.js.

### DevDependencies

- **@vitejs/plugin-react-swc**: Vite plugin for React with SWC support.
- **eslint-plugin-react-hooks**: ESLint rules for React Hooks.
- **prettier-plugin-tailwindcss**: Prettier plugin for Tailwind CSS class sorting.
