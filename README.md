# Pace Commerce Dashboard Frontend

A modern React TypeScript dashboard application built with Vite, Tailwind CSS, and shadcn/ui using feature-based architecture.

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Architecture**: Feature-based architecture

## 📁 Project Structure

```
src/
├── features/
│   ├── auth/
│   │   └── components/
│   └── product/
│       └── components/
├── shared/
│   ├── api/
│   └── components/
└── lib/
    └── utils.ts
```

## 🛠️ Path Aliases

- `@/*` - src/*
- `@features/*` - src/features/*
- `@shared/*` - src/shared/*
- `@/lib/*` - src/lib/*

## 🎯 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Architecture Guidelines

1. **Feature-based Organization**: Organize code by features, not by technical layers
2. **Shared Utilities**: Place shared utilities in `@shared/`
3. **Styling**: Use Tailwind CSS with shadcn/ui components
4. **Type Safety**: Follow TypeScript best practices
5. **Utility Function**: Use the `cn()` utility from `@/lib/utils` for conditional class names

## 🎨 Styling

This project uses Tailwind CSS with shadcn/ui for consistent, accessible, and beautiful UI components. The design system includes:

- CSS custom properties for theming
- Dark mode support
- Responsive design utilities
- Semantic color tokens

## 📝 Development Notes

- The project uses feature-based architecture for better scalability
- Path aliases are configured for cleaner imports
- ESLint and TypeScript are configured for code quality
- The build system is optimized for modern browsers
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
