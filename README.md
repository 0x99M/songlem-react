# songlem-react

A React + Vite + TypeScript web app for browsing music content (songs, albums, artists) from a GraphQL API. Tailwind CSS is used for styling and Radix UI primitives are used for accessible UI building blocks.

## Features
- Songs, Albums, and Artists listings fetched from a GraphQL endpoint
- TypeScript models for strong typing
- Tailwind CSS v4 utility-first styling
- Radix UI Tabs primitive with a small wrapper and className utilities
- Vite for fast dev, build, and preview
- ESLint with TypeScript, React Hooks, and React Refresh configs

## Tech Stack
- React 19, React DOM 19
- Vite 7, @vitejs/plugin-react-swc
- TypeScript ~5.8
- Tailwind CSS 4 with @tailwindcss/vite
- Radix UI (@radix-ui/react-tabs)
- Utilities: class-variance-authority, clsx, tailwind-merge

## Getting Started

Prerequisites:
- Node.js 18+ (recommended) and npm

Install dependencies:
- npm install

Run the development server:
- npm run dev

Build for production:
- npm run build

Preview the production build locally:
- npm run preview

Lint the codebase:
- npm run lint

## Project Structure
A non-exhaustive overview of notable files:
- vite.config.ts: Vite config with React SWC plugin, Tailwind, and @ alias to ./src
- eslint.config.js: ESLint configuration for TS, React Hooks, and Vite React Refresh
- src/types/models.ts: TypeScript interfaces for Album, Song, Artist
- src/services/api.ts: Fetch utilities that POST GraphQL queries to the backend
- src/components/*: Presentational components (AlbumList, ArtistList, SongList, LoadingIndicator)
- src/components/ui/tabs.tsx: Radix Tabs wrappers (Tabs, TabsList, TabsTrigger, TabsContent)
- src/lib/utils.ts: cn helper, merging clsx with tailwind-merge

## Configuration
The GraphQL endpoint is currently hardcoded in src/services/api.ts:
https://songlem.onrender.com/graphql/

To point the app to a different backend, update the endpoint there or refactor to read from an environment variable at build time.

Example (using Vite env variables):
1) Create a .env file at the project root:
VITE_GRAPHQL_ENDPOINT=https://your-endpoint/graphql/
2) Read it in src/services/api.ts:
const ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT ?? 'https://songlem.onrender.com/graphql/'
fetch(ENDPOINT, { ... })

## Styling
- Tailwind CSS v4 is integrated via the @tailwindcss/vite plugin.
- The cn utility combines clsx and tailwind-merge to compose Tailwind classes safely.

## Scripts (from package.json)
- dev: vite
- build: tsc -b && vite build
- preview: vite preview
- lint: eslint .