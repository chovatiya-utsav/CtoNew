# BusBooker - Bus Ticket Booking Platform

A production-ready frontend for a bus ticket booking platform built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **ESLint & Prettier** - Code quality and formatting

## Features

### Phase 1 (Completed)
- ✅ Project setup with Vite + React + TypeScript
- ✅ Tailwind CSS configuration with custom design tokens
- ✅ Comprehensive design system
- ✅ Reusable UI component library:
  - Button (multiple variants, sizes, loading states)
  - Input (with validation, icons, error states)
  - Card (flexible layout with header/footer)
  - Badge (status indicators)
  - Modal (accessible dialog)
  - Header (responsive navigation)
  - Footer (informational links)
  - LoadingSpinner (animated loader)
  - SkeletonLoader (content placeholders)
- ✅ Landing page with hero section, trust signals, and how-it-works
- ✅ Responsive design (mobile-first approach)
- ✅ Accessibility features (ARIA labels, keyboard navigation)

### Coming Soon
- 🔄 Phase 2: Search interface with filters
- 🔄 Phase 3: Seat selection UI
- 🔄 Phase 4: Booking flow and payment integration

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Modal.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LoadingSpinner.tsx
│   ├── SkeletonLoader.tsx
│   └── index.ts      # Barrel exports
├── pages/            # Page components
│   ├── Landing.tsx
│   └── Search.tsx
├── layouts/          # Layout components
│   └── MainLayout.tsx
├── styles/           # Global styles and design tokens
│   ├── globals.css
│   └── designTokens.ts
├── hooks/            # Custom React hooks
│   └── useSearch.ts
├── utils/            # Utility functions
│   └── helpers.ts
├── types/            # TypeScript type definitions
│   └── index.ts
├── assets/           # Static assets
│   └── icons/
├── App.tsx           # Main app component
└── main.tsx          # App entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Design System

### Colors
- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Slate (#64748b) - Neutral elements
- **Success**: Green (#10b981) - Positive actions
- **Error**: Red (#ef4444) - Error states
- **Warning**: Yellow (#f59e0b) - Warnings

### Typography
- **Font Family**: Inter (from Google Fonts)
- **Headings**: H1 (2.5rem) to H4 (1.25rem)
- **Body**: 1rem
- **Small**: 0.875rem

### Spacing
Custom spacing scale: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px)

### Components

All components support:
- Multiple variants and sizes
- Accessible attributes (ARIA labels, roles)
- Keyboard navigation
- Loading and disabled states
- Responsive design

## Accessibility

This project follows WCAG 2.1 AA guidelines:
- Semantic HTML elements
- ARIA labels and roles where needed
- Keyboard navigation support
- Focus visible indicators
- Color contrast compliance
- Screen reader friendly

## Code Quality

- **TypeScript Strict Mode**: Full type safety
- **ESLint**: Code linting with React best practices
- **Prettier**: Consistent code formatting
- **Component Documentation**: Props interfaces with clear types

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style
2. Use TypeScript strict mode
3. Ensure all components are accessible
4. Test responsive design on mobile, tablet, and desktop
5. Write meaningful commit messages

## License

MIT

## Contact

For questions or support, please contact the development team.
