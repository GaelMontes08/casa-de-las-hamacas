# Casa de las Hamacas

A beautiful landing page for Casa de las Hamacas, a business selling handcrafted hammocks.

## 🚀 Tech Stack

- **Astro** - Modern web framework for fast, content-focused websites
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React** - For interactive components (via Radix UI)
- **Radix UI** - Accessible component primitives
- **Astro SEO** - SEO optimization for Astro
- **Vercel** - Deployment platform with analytics

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📦 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Products.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.mjs`:
- Primary: Warm earth tones (browns/beiges)
- Secondary: Green accents
- Neutral: Gray scale

### Content

Update the following files to customize content:
- `src/pages/index.astro` - SEO metadata
- `src/components/Hero.astro` - Hero section
- `src/components/Products.astro` - Product listings
- `src/components/About.astro` - About section
- `src/components/Contact.astro` - Contact information

## 🚢 Deployment

This project is configured for deployment on Vercel:

1. Push your code to a Git repository
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will detect Astro and configure the build automatically
4. Your site will be deployed!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 Notes

- Update `astro.config.mjs` with your actual domain name
- Replace placeholder images with actual product photos
- Update contact information in `Contact.astro` and `Footer.astro`
- Add actual social media links
- Consider adding a blog section for content marketing
- Implement actual form submission (currently shows alert)

## 📄 License

All rights reserved - Casa de las Hamacas
