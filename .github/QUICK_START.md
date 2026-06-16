# Quick Start Guide - Professional Refactored Project

## 🚀 Getting Started in 5 Minutes

### 1. Install & Run
```bash
cd my-project
npm install
npm run dev
```
Visit `http://localhost:5173` in your browser.

### 2. Project Structure Quick Reference
```
src/
├── constants/    ← Data and configuration (hero slides, services, etc.)
├── hooks/        ← Custom React hooks (useAOS, useNavigation)
├── components/   ← React components
│   └── shared/   ← Reusable UI components (Button, Card, etc.)
└── utils/        ← Global utilities and constants
```

## 📝 Common Tasks

### Add a New Service
1. Edit `src/constants/services.js`
2. Add service object to `SERVICES` array
3. Services page updates automatically!

### Modify Hero Slides
1. Edit `src/constants/home.js`
2. Update `HERO_SLIDES` array
3. Changes reflect immediately

### Change Colors/Theme
1. Edit `src/utils/constants.js` - `COLORS` object
2. Or use Tailwind utility classes directly in components

### Create a New Button
```javascript
import { Button } from '../components/shared';

<Button onClick={handleClick}>Click Me</Button>
<Button variant="outline">Outline Button</Button>
<Button size="sm">Small Button</Button>
```

### Create a New Reusable Component
```javascript
/**
 * MyComponent description
 * @param {string} title - Component title
 */
export const MyComponent = ({ title }) => (
  <div className="...">
    <h2>{title}</h2>
  </div>
);
```

## 🔍 Quality Commands

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changing
```

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| `src/constants/home.js` | Hero slides, AOS config |
| `src/constants/services.js` | All services data |
| `src/constants/projects.js` | Portfolio projects |
| `src/constants/navigation.js` | Nav links, branding |
| `src/utils/constants.js` | Routes, colors, breakpoints |
| `src/components/shared/index.js` | Export all shared components |
| `src/hooks/useAOS.js` | Animation initialization |
| `.prettierrc.js` | Code formatting rules |
| `vite.config.js` | Build configuration |
| `eslint.config.js` | Linting rules |

## 🎨 Using Shared Components

### Button
```javascript
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
```

### Card
```javascript
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### SectionHeader
```javascript
<SectionHeader
  subtitle="Our services"
  title="Complete Solutions"
  description="Detailed description..."
/>
```

### SectionContainer
```javascript
<SectionContainer bgColor="bg-slate-900">
  {/* Your content */}
</SectionContainer>
```

### SectionGrid
```javascript
<SectionGrid 
  items={items} 
  renderItem={(item, index) => <YourComponent key={item.id} {...item} />}
/>
```

## 🔧 Environment Setup

1. Copy `.env.example` to `.env.local`
```bash
cp .env.example .env.local
```

2. Edit `.env.local` with your values
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Hoppy Roof & Aluminum
```

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Components not updating?**
- Check browser console for errors
- Verify imports are correct
- Restart dev server: `npm run dev`

**Lint errors?**
```bash
npm run lint:fix
npm run format
```

## 📖 Documentation

- **Detailed Guide**: See `.github/REFACTORING_NOTES.md`
- **Refactoring Summary**: See `.github/REFACTORING_SUMMARY.md`
- **Full README**: See `README_NEW.md`

## 💡 Pro Tips

1. **Use constants for data**: Keeps components focused on rendering
2. **Leverage shared components**: Ensures consistency across app
3. **Check console for errors**: React DevTools helps debugging
4. **Format before committing**: Run `npm run format`
5. **Run lint regularly**: `npm run lint` catches issues early

## 🚢 Deployment

```bash
# Build production version
npm run build

# Test the build locally
npm run preview

# Upload dist/ folder to your host
```

## ✨ Standards Used

- **React 19** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

**Questions?** Check `.github/REFACTORING_NOTES.md` for comprehensive documentation.
