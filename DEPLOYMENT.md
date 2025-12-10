# Deployment Guide - Casa de las Hamacas

## 🚀 Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Casa de las Hamacas landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/casa-de-las-hamacas.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Astro settings
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain: `casadelashamacas.com`
   - Update DNS records as instructed by Vercel
   - Update `site` in `astro.config.mjs` with your domain

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## ⚙️ Environment Variables

If you need environment variables in production:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any required variables (see `.env.example` for reference)
3. Redeploy if needed

## 📊 Vercel Analytics

Vercel Analytics is already enabled in `astro.config.mjs`. After deployment:

1. Go to Vercel Dashboard → Your Project → Analytics
2. View real-time traffic, visitor data, and performance metrics

## 🔧 Post-Deployment Checklist

- [ ] Update `astro.config.mjs` with your actual domain
- [ ] Replace placeholder images with real product photos
- [ ] Update contact information and social media links
- [ ] Test contact form functionality
- [ ] Set up form backend (Formspree, EmailJS, or custom API)
- [ ] Add Google Analytics or other tracking (if needed)
- [ ] Test SEO with tools like Google Search Console
- [ ] Create and submit sitemap
- [ ] Set up 301 redirects if migrating from old site
- [ ] Test on multiple devices and browsers

## 🎯 Performance Tips

Your site is already optimized with:
- ✅ Static generation (fast loading)
- ✅ Minimal JavaScript (Astro's island architecture)
- ✅ Optimized images (use WebP format)
- ✅ Tailwind CSS (purged unused styles)
- ✅ Vercel Edge Network (global CDN)

## 🔄 Continuous Deployment

After initial setup, any push to your main branch will automatically:
1. Trigger a new build on Vercel
2. Run tests and type checking
3. Deploy to production if successful
4. Update your live site instantly

## 🆘 Troubleshooting

**Build fails on Vercel:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

**Images not loading:**
- Ensure images are in the `public/` directory
- Use absolute paths starting with `/`

**Form not working:**
- Implement form backend (see Contact.astro)
- Consider using Formspree, EmailJS, or Vercel Functions

## 📱 Testing Your Deployed Site

After deployment, test:
- Mobile responsiveness
- Page load speed (use Google PageSpeed Insights)
- SEO (use Google Search Console)
- All links and navigation
- Contact form submission
- Social media sharing (og:image)

---

Need help? Check the [Astro docs](https://docs.astro.build) or [Vercel docs](https://vercel.com/docs)
