# Hoppy Roof & Aluminum - Professional Website

A modern, professional website for Hoppy Roof & Aluminum services, built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive on all devices (mobile, tablet, desktop)
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS, React Router
- **Performance Optimized**: Code splitting, lazy loading, production-ready build configuration
- **Professional Code Quality**: ESLint, Prettier, JSDoc comments, best practices
- **Animations**: Smooth AOS (Animate On Scroll) animations throughout
- **SEO Friendly**: Semantic HTML, proper heading hierarchy, meta tags
- **Accessibility**: WCAG compliance with proper ARIA labels
- **Component Architecture**: Reusable, modular components with clear separation of concerns

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hoppy-roof-aluminum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

## 🏃 Running the Project

### Development Server
```bash
npm run dev
```
Opens the application at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing

### Code Quality

**Lint Check**
```bash
npm run lint
```

**Fix Linting Issues**
```bash
npm run lint:fix
```

**Format Code**
```bash
npm run format
```

**Check Formatting**
```bash
npm run format:check
```

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── shared/             # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SectionContainer.jsx
│   │   ├── SectionGrid.jsx
│   │   └── index.js
│   ├── Navbar.jsx          # Navigation component
│   ├── Home.jsx            # Home page
│   ├── Services.jsx        # Services page
│   ├── Project.jsx         # Projects portfolio
│   ├── About.jsx           # About page
│   ├── Contact.jsx         # Contact form
│   ├── Warranty.jsx        # Warranty information
│   ├── FullScreenGallery.jsx # Image gallery
│   └── FrequentlyAskedQuestions.jsx # FAQ
├── constants/              # Application constants
│   ├── navigation.js       # Navigation configuration
│   ├── home.js            # Home page constants
│   ├── services.js        # Services data
│   └── projects.js        # Projects data
├── hooks/                  # Custom React hooks
│   ├── useAOS.js          # Animation hook
│   └── useNavigation.js    # Navigation state hook
├── utils/                  # Utility functions
│   └── constants.js       # Global constants
├── assets/                 # Images and static files
├── App.jsx                # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling:
- Utility-first CSS approach
- DaisyUI components library
- Custom color scheme (slate, amber)
- Responsive breakpoints (sm, md, lg, xl)

### Color Palette
- **Primary**: Slate (neutral)
- **Accent**: Amber (highlights and CTAs)
- **Dark**: Slate-950 (dark backgrounds)

## 🔄 Component Architecture

### Shared Components
Reusable UI components with consistent styling:
- `Button` - Multiple variants (primary, secondary, outline)
- `Card` - Card container with hover effects
- `SectionHeader` - Section title, subtitle, and description
- `SectionContainer` - Full-width section wrapper
- `SectionGrid` - Responsive grid layout

### Custom Hooks
- `useAOS()` - Initialize animations on scroll
- `useNavigation()` - Manage mobile menu state

### Page Components
- `Home` - Landing page with hero, services preview, stats
- `Services` - Complete services catalog
- `Project` - Portfolio showcase
- `About` - Company information
- `Contact` - Contact form and information
- `Warranty` - Warranty details

## 🚀 Performance Optimizations

1. **Code Splitting**: Dependencies separated into vendor chunks
2. **Image Optimization**: Lazy loading and compression
3. **CSS Purging**: Unused Tailwind styles removed in production
4. **Minification**: JavaScript and CSS minified
5. **Caching**: Long-term caching strategy for static assets
6. **Tree Shaking**: Dead code elimination in production build

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Proper heading hierarchy
- Color contrast standards
- Keyboard navigation support
- Screen reader optimizations

## 🔒 Best Practices

### Code Organization
- Separate constants from components
- Reusable component patterns
- Clear file naming (PascalCase for components)
- Centralized configuration

### Code Quality
- JSDoc comments for all components
- ESLint rules enforcement
- Prettier code formatting
- Consistent naming conventions
- DRY (Don't Repeat Yourself) principle

### Performance
- Minimal re-renders with proper component composition
- Optimized animations and transitions
- Efficient state management
- Proper resource loading

## 📦 Dependencies

### Production
- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **swiper**: Touch slider library
- **aos**: Animate on scroll library
- **tailwindcss**: Utility-first CSS framework
- **daisyui**: Component library for Tailwind

### Development
- **vite**: Build tool and dev server
- **eslint**: Code linting
- **prettier**: Code formatting
- **@types/react**: TypeScript types for React

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Hosting
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure server to route all requests to `index.html` (for SPA)

### Hosting Options
- Vercel (recommended for React/Vite)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🐛 Debugging

### Development Tools
- React Developer Tools (browser extension)
- Vite dev server with HMR (Hot Module Replacement)
- Browser DevTools for styling and performance

### Common Issues

**Port already in use**
```bash
npm run dev -- --port 3000
```

**Build errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Make your changes with descriptive commits
3. Follow the code quality standards (lint, format)
4. Push to branch: `git push origin feature/name`
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support or inquiries, contact: [contact information]

---

**Last Updated**: 2026
**Version**: 1.0.0
**Status**: Production Ready
