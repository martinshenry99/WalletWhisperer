# WalletWhisperer Website - Complete Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
cd website
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Customization Guide

### Contact Information (Already Updated!)

✅ **Email**: martinshenry12e@gmail.com  
✅ **WhatsApp**: +1 (742) 385-9203  

These are already configured in:
- `src/components/sections/ContactSection.tsx`
- `src/components/Footer.tsx`

### Add Your Social Media Links

**File**: `src/components/Footer.tsx` (lines 68-87)

Update these URLs:
```tsx
<a href="https://github.com/YOUR_USERNAME" ...>  // Your GitHub
<a href="https://twitter.com/YOUR_HANDLE" ...>   // Your Twitter
<a href="https://linkedin.com/in/YOUR_PROFILE" ...> // Your LinkedIn
```

### Update Trading Data (Optional)

**File**: `src/data/trading-results.json`

The file contains realistic sample data. You can:
- Keep it as is for demonstration
- Replace with your actual trading results
- Modify the numbers to match your performance

### Add Real Demo Videos (When Ready)

**File**: `src/components/DemoVideo.tsx`

Currently shows "Coming Soon" placeholder. When you have videos:

1. Upload videos to YouTube/Vimeo
2. Replace the placeholder in `DemoVideoPlayer` component
3. Or contact me for help integrating

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - FREE & Easy)

**Why Vercel?**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploy on git push
- ✅ Custom domain support

**Steps:**

1. **Create GitHub Repository**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit - WalletWhisperer website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/walletwhisperer-site.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects Next.js)

3. **Done!** Your site is live at `https://your-project.vercel.app`

4. **Add Custom Domain** (Optional)
   - Buy domain from Namecheap, GoDaddy, etc.
   - In Vercel dashboard → Settings → Domains
   - Add your domain and follow DNS instructions

---

### Option 2: Netlify (Alternative - Also FREE)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repo

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `.next`

---

### Option 3: Traditional Hosting (cPanel, Hostinger, etc.)

1. **Enable Static Export**
   
   Edit `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   module.exports = nextConfig;
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Upload**
   - Upload contents of `out` folder to your hosting
   - Point your domain to this folder

---

## 🎨 Customization Tips

### Change Colors

**File**: `tailwind.config.ts`

```ts
colors: {
  primary: {
    DEFAULT: "#00ff88",  // Change this
    dark: "#00cc6a",
  },
  secondary: {
    DEFAULT: "#00d9ff",  // Change this
    dark: "#00a8cc",
  },
}
```

### Change Fonts

**File**: `src/app/layout.tsx`

Currently using Inter and Manrope. To change:
```tsx
import { YourFont } from "next/font/google";
```

### Add More Blog Posts

**File**: `src/data/blog-posts.json`

Add new entries following the existing format.

### Update Performance Stats

**File**: `src/data/trading-results.json`

Modify the `summary` and `recentTrades` sections.

---

## 📊 Understanding the Data Files

### trading-results.json

```json
{
  "summary": {
    "totalTrades": 147,        // Total number of trades
    "profitableTrades": 102,   // Winning trades
    "winRate": 69.4,           // Win rate percentage
    "totalROI": 284.7,         // Total ROI percentage
    // ... more stats
  },
  "monthlyPerformance": [...], // Chart data
  "recentTrades": [...]        // Trade history table
}
```

### blog-posts.json

```json
[
  {
    "id": "unique-slug",
    "title": "Post Title",
    "date": "2025-10-16",
    "excerpt": "Short description",
    "content": "Full markdown content"
  }
]
```

---

## 🐛 Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### Build fails

Check Node.js version:
```bash
node --version  # Should be 18.x or higher
```

---

## 📞 Need Help?

**Contact**: martinshenry12e@gmail.com  
**WhatsApp**: +1 (742) 385-9203

---

## ✅ Pre-Launch Checklist

- [ ] Test all sections scroll smoothly
- [ ] Contact form works (currently simulated)
- [ ] All links work correctly
- [ ] Mobile responsive (test on phone)
- [ ] Update social media links
- [ ] Add custom domain (optional)
- [ ] Test on different browsers
- [ ] Check loading speed

---

## 🎯 Next Steps After Deployment

1. **Share your link** on social media
2. **Add Google Analytics** (optional)
3. **Create actual demo videos** when ready
4. **Update trading results** monthly
5. **Add new blog posts** regularly

---

## 📈 Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Minimal bundle size
- ✅ Fast page loads

**Lighthouse Score Target**: 90+ across all metrics

---

## 🔒 Security Notes

- Contact form currently simulated (no backend)
- No sensitive data stored
- All external links use `rel="noopener noreferrer"`
- HTTPS enforced on Vercel/Netlify

---

**Built with ❤️ for WalletWhisperer**
