# Netlify Deployment Instructions

## Method 1: Drag & Drop (Recommended)

### Step 1: Download and Setup
1. Download the project from v0
2. Extract the ZIP file
3. Open terminal/command prompt in the project folder

### Step 2: Install Dependencies and Build
\`\`\`bash
npm install
npm run build
\`\`\`

### Step 3: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Look for the `out` folder created after the build
3. Drag the **contents** of the `out` folder (not the folder itself) to Netlify's deploy area
4. Your site will be live instantly!

## Method 2: Git Integration

### Step 1: Push to GitHub
\`\`\`bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/natnael-portfolio.git
git push -u origin main
\`\`\`

### Step 2: Connect to Netlify
1. In Netlify dashboard, click "New site from Git"
2. Choose GitHub and select your repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

## Troubleshooting

### If you get "Page Not Found":
- Make sure you're uploading the **contents** of the `out` folder, not the folder itself
- Check that `index.html` is in the root of your upload
- Verify the `netlify.toml` file is included

### If images don't load:
- The `next.config.js` is configured for static export
- All images are optimized for static hosting

### If build fails:
- Make sure Node.js version 16+ is installed
- Delete `node_modules` and run `npm install` again
- Check that all files are included in your project

## Your site will be available at:
- Default: `https://amazing-name-123456.netlify.app`
- Custom domain can be added in Netlify settings

## Files included for Netlify deployment:
- ✅ `next.config.js` - Configured for static export
- ✅ `netlify.toml` - Netlify configuration
- ✅ `package.json` - Updated build scripts
- ✅ All components and images
- ✅ Optimized for static hosting
