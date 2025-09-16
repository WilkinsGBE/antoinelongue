# Setup Instructions

## 1. Install Dependencies
```bash
npm install
```

## 2. Install Tailwind CSS v4 Dependencies
```bash
npm install -D tailwindcss@^4 @tailwindcss/postcss autoprefixer postcss
```

## 3. Add Your Assets

### Hero Video
- Replace `/public/hero/reel.mp4` with your actual hero video
- Keep under 6MB and 12 seconds for optimal performance

### Portfolio Images
Create folders in `/public/portfolio/` matching your project slugs:
- `/public/portfolio/cf-montreal-vs-stlouis-city/`
- `/public/portfolio/cf-montreal-vs-lafc/`
- `/public/portfolio/media-day-soccer-cvm/`
- `/public/portfolio/kerchak-king-fali-mtl-2025/`
- `/public/portfolio/camp-retour-a-lorigine-2025/`

Add images to each folder:
- `hero.jpg` - Main project image
- `01.jpg`, `02.jpg`, `03.jpg` - Gallery images

### UEFA Logo
- Replace `/public/logos/uefa.svg` with the actual UEFA Media Pool logo

### Favicon
- Replace `/app/favicon.ico` with your actual favicon

## 4. Update Content

### Site Information
Edit `/content/site.json`:
- Update `email` with your actual email
- Update `instagram` with your Instagram URL
- Modify `locations` if needed

### Project Details
Update the JSON files in `/content/projects/` with:
- Correct image filenames
- Updated project information
- Proper dates and locations

## 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

## 6. Production Deployment

### Contact Form Integration
Replace the placeholder in `/app/api/contact/route.ts` with:
- Resend
- SendGrid
- Nodemailer
- Or integrate with Calendly

### Build for Production
```bash
npm run build
npm run start
```

## Customization

### Colors
Edit CSS variables in `/app/globals.css`:
- `--accent` for electric blue (#1FA4FF)
- `--gold` for warm filmic (#D6AF68)
- `--bg` for background (#0B0D12)

### Typography
Update font families in `/tailwind.config.js`:
- `sans` for body text (Inter)
- `display` for headings (Playfair Display)

## Notes
- All images should be optimized (WebP preferred)
- Ensure you have rights to use UEFA Media Pool logo
- Test contact form functionality before going live
