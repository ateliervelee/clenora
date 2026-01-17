# Clenora - Apartment Cleaning Services

A fast, mobile-friendly one-page website for Clenora apartment cleaning services.

## Features

- 🚀 **Super Fast** - No libraries, pure vanilla HTML/CSS/JS
- 📱 **Mobile Friendly** - Responsive design that works on all devices
- 🎨 **Component-Based** - Clean, modular architecture
- 🎨 **Easy Theming** - All colors defined in one place (`styles.css`)

## Project Structure

```
clenora/
├── index.html          # Main HTML file
├── styles.css          # All styles and theme variables
├── script.js           # Component injection system
└── components/         # Individual component files
    ├── header.html
    ├── hero.html
    ├── services.html
    ├── benefits.html
    ├── how-it-works.html
    ├── contact.html
    └── footer.html
```

## Customizing Colors

All theme colors are centralized in `styles.css` at the top in the `:root` section. Simply update the CSS variables:

- `--color-primary` - Main blue color
- `--color-primary-dark` - Darker blue
- `--color-primary-light` - Lighter blue
- `--color-secondary` - Main grey color
- And more...

## Local Development

To test locally, you need to run a local server (required for component loading):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deployment to Cloudflare Pages

### Step 1: Push to GitHub

Make sure all your changes are committed and pushed:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select the repository: `ateliervelee/clenora`
7. Click **Begin setup**

### Step 3: Configure Build Settings

Since this is a static site with no build process:

- **Framework preset**: None
- **Build command**: (leave empty)
- **Build output directory**: `/` (root directory)
- **Root directory**: `/` (root directory)

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will deploy your site automatically
3. You'll get a URL like: `clenora.pages.dev`

### Step 5: Connect Custom Domain

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `clenora.eu`
4. Cloudflare will automatically configure DNS and SSL
5. Make sure your domain's nameservers point to Cloudflare

## Domain Configuration

### If your domain is already on Cloudflare:

1. **Remove conflicting DNS records:**
   - Go to **DNS** → **Records** in your Cloudflare dashboard
   - Delete any A records or CNAME records that point to external servers
   - Cloudflare Pages will automatically create the necessary records when you add the custom domain

2. **Add custom domain in Pages:**
   - In your Pages project, go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `clenora.eu`
   - Cloudflare will automatically configure DNS and SSL

3. **Verify DNS records:**
   - After adding the domain, check **DNS** → **Records**
   - You should see a CNAME record for `clenora.eu` pointing to your Pages URL
   - Make sure it's **Proxied** (orange cloud icon), not DNS only (grey cloud)

### Troubleshooting Error 521

If you see "Error 521 - Web server is down":

1. **First, test your Pages URL:**
   - Check if `your-project.pages.dev` works
   - If it works, the issue is with domain configuration, not the deployment

2. **Check DNS records:**
   - Go to **DNS** → **Records** for `clenora.eu`
   - Remove any A records pointing to IP addresses
   - Remove any CNAME records pointing to external servers
   - Only keep the CNAME record created by Pages

3. **Verify custom domain in Pages:**
   - Go to your Pages project → **Custom domains**
   - Make sure `clenora.eu` is listed and shows "Active"
   - If there's an error, remove and re-add the domain

4. **Wait for propagation:**
   - DNS changes can take 5-10 minutes to propagate
   - Clear your browser cache and try again

### If your domain is elsewhere:

- You'll need to add a CNAME record pointing to your Cloudflare Pages URL
- Or transfer your domain to Cloudflare for easier management

## Updating the Site

Simply push changes to the `main` branch on GitHub, and Cloudflare Pages will automatically rebuild and deploy your site.
