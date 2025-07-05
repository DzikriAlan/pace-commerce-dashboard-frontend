<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Pace Commerce Dashboard Frontend

This is a React TypeScript project using Vite with feature-based architecture.

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Architecture**: Feature-based architecture

## Project Structure
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

## Path Aliases
- `@/*` - src/*
- `@features/*` - src/features/*
- `@shared/*` - src/shared/*
- `@/lib/*` - src/lib/*

## Guidelines
1. Use feature-based architecture - organize code by features, not by technical layers
2. Place shared utilities in `@shared/`
3. Use Tailwind CSS for styling with shadcn/ui components
4. Follow TypeScript best practices
5. Use the `cn()` utility from `@/lib/utils` for conditional class names
6. Implement proper error handling and loading states
7. Use semantic HTML and accessible patterns
