## Development Tooling

ShopVerse uses a standardized development workflow to ensure consistent code quality.

### Tools

- ESLint
- Prettier
- EditorConfig
- Husky
- lint-staged

### Available Commands

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Design System

ShopVerse follows a centralized design system built around semantic design tokens.

### Typography

- **Headings:** Syne
- **Body:** Plus Jakarta Sans

### Theme

- Dark-first
- Semantic CSS variables
- 8px spacing system
- Reusable shadows and border radius
- Lucide icons
- Framer Motion for animations

## Frontend Architecture

The frontend follows a feature-first architecture designed for scalability.

### Core Libraries

- React Router
- TanStack Query
- Zustand
- Axios
- Tailwind CSS
- Framer Motion

### Structure

- `app/` – application setup and providers
- `components/` – shared UI components
- `features/` – domain-specific modules
- `services/` – API communication
- `store/` – global UI state
- `layouts/` – reusable page layouts

### UI Foundation Refinements

The component library follows a scalable architecture inspired by modern React design systems.

Enhancements include:

- Class Variance Authority (CVA) for variants
- `tailwind-merge` for conflict-free class composition
- `clsx`-based utility helpers
- Path aliases (`@/`)
- Accessible default component APIs
- Reusable layout primitives (`Stack`, `Flex`, `Section`)
