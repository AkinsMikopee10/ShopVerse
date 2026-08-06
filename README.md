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

## Sprint 2 — Authentication & User Management

### Milestone 1 — Backend Authentication Foundation ✅

Completed:

- User model
- JWT utility
- Authentication middleware
- User repository
- Authentication service scaffold
- Authentication controller scaffold
- Authentication routes scaffold

Architecture established:

Routes
↓
Controllers
↓
Services
↓
Repositories
↓
MongoDB

No authentication business logic has been implemented yet.

Registration and login will be implemented in Milestone 2.

### Milestone 2 — User Registration ✅

Completed:

- Registration endpoint
- Zod request validation
- Generic validation middleware
- Duplicate email protection
- Password hashing with bcrypt
- JWT generation after registration
- Secure API responses
- RESTful error handling

Authentication Flow:

Validation
↓
Controller
↓
Service
↓
Repository
↓
MongoDB
↓
JWT

The application now supports secure user registration.

### Milestone 4 — Protected Routes & Current User ✅

Completed:

- JWT authentication middleware
- Protected route infrastructure
- `GET /api/auth/me` endpoint
- Current user service and controller
- Request authentication using Bearer tokens
- Authenticated user available via `req.user`
- Consistent 401 responses for missing, invalid, or expired tokens

Authentication Flow:

Client
↓
JWT Authentication Middleware
↓
Controller
↓
Service
↓
Repository
↓
MongoDB

### Refinement Milestone — Error Handling Infrastructure ✅

Completed:

- Added `AppError` for structured operational errors.
- Added `asyncHandler` to eliminate repetitive `try...catch` blocks.
- Added a global error-handling middleware.
- Refactored authentication services to throw `AppError`.
- Refactored authentication controllers to use `asyncHandler`.
- Centralized HTTP error responses.

Benefits:

- Cleaner controllers
- Consistent API error format
- Easier debugging
- Easier maintenance
- Scalable foundation for future modules
