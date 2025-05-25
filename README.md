# Max Ivanov's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, parallax effects, and a clean, minimalist design.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions using GSAP
- 🌙 Dark mode support
- ♿ Accessibility optimized
- 🚀 Built with Next.js 14
- 💻 TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 📊 SEO optimized

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Main portfolio page
│   └── globals.css   # Global styles
├── public/           # Static assets
├── components/       # React components
└── styles/          # Additional styles
```

## Customization

### Colors
The main accent color (#f43f5e) can be modified in the Tailwind configuration or directly in the components.

### Content
Update the content in `app/page.tsx` to reflect your personal information, projects, and experience.

### Animations
GSAP animations can be adjusted in the `useEffect` hook in `app/page.tsx`.

## Deployment

This portfolio is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy

## Performance

The portfolio is optimized for performance with:
- Image optimization
- Font optimization
- Code splitting
- Lazy loading
- Minimal dependencies

## Accessibility

The portfolio follows WCAG guidelines with:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Proper heading hierarchy

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Max Ivanov - [stagnirovat@gmail.com](mailto:stagnirovat@gmail.com)

Project Link: [https://github.com/retr013/portfolio](https://github.com/retr013/portfolio)

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
