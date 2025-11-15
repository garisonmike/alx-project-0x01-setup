# ALX Project 0x01 - React Architect: Mastering Advanced Structures in Next.js

This is a comprehensive Next.js web application that demonstrates fundamental concepts of modern web development. The application features multiple pages for displaying posts and users, with interactive components for adding new content.

## Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and linting

## Project Structure

```
alx-project-0x01/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   ├── UserCard.tsx
│   │   └── UserModal.tsx
│   └── layout/          # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── interfaces/          # TypeScript interfaces
│   └── index.ts
├── pages/
│   ├── posts/           # Posts related pages
│   │   └── index.tsx
│   ├── users/          # Users related pages
│   │   └── index.tsx
│   ├── _app.tsx        # Custom App component
│   ├── _document.tsx   # Custom Document component
│   └── index.tsx       # Home page
├── public/              # Static assets
│   └── assets/
│       └── images/
├── styles/              # Global styles
│   └── global.css
└── ...                  # Config files
```

## Features

### Posts Page
- Display posts from JSONPlaceholder API
- PostCard component for individual posts
- PostModal for adding new posts
- Form submission and state management

### Users Page
- Display users from JSONPlaceholder API
- UserCard component for user information
- UserModal for adding new users
- Handle complex nested data structures

### Navigation
- Header with navigation links
- Routing between home, posts, and users pages
- Navigation without page reloads

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/alx-project-0x01-setup.git
cd alx-project-0x01-setup/alx-project-0x01
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev -- -p 3000
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Integration

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API for:
- Posts: `https://jsonplaceholder.typicode.com/posts`
- Users: `https://jsonplaceholder.typicode.com/users`

## Learning Objectives

- ✅ Set up a Next.js application with TypeScript and Tailwind CSS
- ✅ Implement dynamic page routing and navigation
- ✅ Create reusable React components with proper TypeScript typing
- ✅ Work with external APIs to fetch and display data
- ✅ Implement modal dialogs for user interaction
- ✅ Understand static site generation with getStaticProps
- ✅ Manage component state with React hooks
- ✅ Structure a project with proper directory organization
- ✅ Apply responsive design principles with Tailwind CSS

## Best Practices

- **Component Architecture**: Following atomic design principles
- **Type Safety**: TypeScript interfaces for all components
- **Styling**: Tailwind CSS utility classes
- **State Management**: React hooks for local state
- **Project Structure**: Next.js conventions

## License

This project is part of the ALX Software Engineering Program.

## Author

Created as part of ALX Project 0x01
