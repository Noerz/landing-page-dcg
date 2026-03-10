# Landing Page Digital Company Group - Struktur Atomic Design

## 📁 Struktur Project

```
src/
├── components/
│   ├── atoms/           # Elemen dasar terkecil
│   │   ├── Button.tsx
│   │   ├── Heading.tsx
│   │   ├── Text.tsx
│   │   ├── Container.tsx
│   │   ├── Icon.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   │
│   ├── molecules/       # Kombinasi atoms
│   │   ├── ServiceCard.tsx
│   │   ├── BenefitCard.tsx
│   │   └── index.ts
│   │
│   ├── organisms/       # Kombinasi molecules dan sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Benefits.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   │
│   └── index.ts
│
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
│
└── assets/
    └── icons/           # Icon assets (jika diperlukan)
```

## 🎨 Atomic Design Hierarchy

### Atoms (Elemen Dasar)
- **Button**: Komponen tombol dengan variant primary/secondary
- **Heading**: Heading (h1-h6) dengan styling responsive
- **Text**: Paragraph dengan color dan size variants
- **Container**: Wrapper dengan max-width dan responsive padding
- **Icon**: SVG icons untuk services
- **Section**: Wrapper section dengan background colors

### Molecules (Kombinasi Atoms)
- **ServiceCard**: Card untuk menampilkan service dengan icon, title, dan description
- **BenefitCard**: Card untuk benefit dengan colored header

### Organisms (Kombinasi Molecules)
- **Hero**: Section hero dengan gradient background dan CTA button
- **About**: Section about company dengan deskripsi
- **Services**: Section dengan grid 5 service cards
- **Benefits**: Section dengan 3 benefit cards (blue, teal, green)
- **CTA**: Call-to-action section dengan contact button
- **Footer**: Footer dengan copyright

## 🚀 Fitur

✅ Responsive design (mobile, tablet, desktop)
✅ Gradient background (blue → teal → green)
✅ Service cards dengan icon SVG
✅ Benefit cards dengan color variants
✅ Tailwind CSS untuk styling
✅ Semantic HTML
✅ Atomic design pattern untuk maintainability

## 💻 Component Props

### Button
```tsx
<Button 
  variant="primary" | "secondary"
  size="sm" | "md" | "lg"
  onClick={() => {}}
>
  Text
</Button>
```

### Heading
```tsx
<Heading 
  level={1-6}
  color="white" | "dark" | "blue"
>
  Heading Text
</Heading>
```

### Icon
```tsx
<Icon 
  type="cctv" | "network" | "windows" | "server" | "devices"
  size="sm" | "md" | "lg"
/>
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Server akan berjalan di `http://localhost:3000`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Color Palette

- Blue: #2563eb (rgb(37, 99, 235))
- Teal: #14b8a6 (rgb(20, 184, 166))
- Green: #22c55e (rgb(34, 197, 94))
- Gray: #f3f4f6 (rgb(243, 244, 246))
- Dark: #1f2937 (rgb(31, 39, 55))
