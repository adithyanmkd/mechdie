# MECH & DIE – Engineering Solutions Website

A responsive, high-performance, minimalist white-theme website built for **MECH & DIE – Engineering Solutions** (Industrial Machinery, Bakery & Food Processing Equipment, Tool & Die, Iron Casting, and Custom Engineering).

Serving markets across the **United Arab Emirates (UAE)**, **India**, and **Worldwide**.

---

## 🚀 Tech Stack & Design System

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Dispatch**: [Nodemailer](https://nodemailer.com/) with built-in honeypot spam protection
- **Design Specifications**:
  - **Background**: Pure white (`#FFFFFF`) with subtle light grey sections (`#F5F5F7`).
  - **Brand Accent**: Deep industrial purple (`#261A66`).
  - **Text**: Premium charcoal dark (`#202027`) and muted grey (`#5A5A68`).
  - **Typography**: Inter / Plus Jakarta Sans.
  - **Zero Yellow Theme Elements**: Strict adherence to the clean white/deep purple palette.

---

## 📁 Project Architecture

```
mech-and-die/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Nodemailer API handler with honeypot & logging
│   ├── products/
│   │   └── [slug]/
│   │       └── page.tsx         # Dynamic product detail page (SSG + SEO)
│   ├── globals.css              # Global styles & smooth scroll
│   ├── layout.tsx               # Root layout, Inter font, OpenGraph & Metadata
│   ├── not-found.tsx            # Custom 404 page
│   └── page.tsx                 # Single scrolling home page
├── components/
│   ├── About.tsx                # About section + soft auto-rotating showcase
│   ├── ContactSection.tsx       # Contact details (India, UAE, Email) + Contact Form
│   ├── Footer.tsx               # Centered copyright footer
│   ├── Hero.tsx                 # Short punchy headline + 2 CTA buttons
│   ├── Navbar.tsx               # Sticky navbar with active section scroll spy & mobile menu
│   ├── ProductEnquiryActions.tsx# WhatsApp modal trigger & Call Now popover
│   ├── ProductGallery.tsx       # Large image display with thumbnail switcher
│   ├── ProductsGrid.tsx         # Category filter chips & product card grid
│   └── WhatsAppModal.tsx        # WhatsApp pre-filled inquiry composer
├── data/
│   ├── products.ts              # Single editable source of truth for all 14 products
│   └── site.ts                  # Single editable source of truth for company details & links
├── public/
│   ├── brand/                   # Original branding files
│   ├── products/                # 14 optimized product imagery files
│   ├── logo.png                 # Primary logo
│   ├── logo-purple.jpg          # Brand badge & OpenGraph image
│   └── og-image.jpg             # Social sharing preview
├── .env.example                 # Template for SMTP mailer credentials
├── .env.local                   # Local environment configuration
├── next.config.mjs              # Next.js configuration
├── package.json
├── tailwind.config.ts           # Custom color tokens (#261A66, #F5F5F7, #202027)
└── tsconfig.json
```

---

## ✏️ 1. How to Edit Company Content

All general company text, phone numbers, and services live in **`data/site.ts`**:

1. Open `data/site.ts` in any code or text editor.
2. Edit any field:
   - **Company Description**: Update `siteConfig.about.description`.
   - **Services List**: Edit `siteConfig.about.services` array.
   - **Phone Numbers**:
     ```ts
     india: {
       display: "+91 85477 70761",
       tel: "+918547270761",
       whatsappNumber: "918547270761",
     },
     uae: {
       display: "+971 56 308 8846",
       tel: "+971563088846",
       whatsappNumber: "971563088846",
     }
     ```
   - **Email**: Update `siteConfig.contact.email` (default: `info@mechanddie.com`).

---

## 📦 2. How to Add or Edit Products

All 14 products across the 6 categories are located in **`data/products.ts`**:

- **Pumps & Accessories** (5 products)
- **Bakery / Food Processing** (4 products, including *Idli Steaming Cabinet* & *Automatic Chapathi Maker*)
- **Industrial & Metal Forming** (2 products)
- **Air Compressors** (1 product)
- **Universal Joints** (1 product)
- **Custom Pneumatic Machines** (1 product)

### To edit an existing product:
Locate the product in `data/products.ts` and modify its fields:
```ts
{
  id: "prod-1",
  slug: "idli-steaming-cabinet",
  name: "Idli Steaming Cabinet",
  category: "Bakery / Food Processing",
  image: "/products/idli-steaming-cabinet.png",
  gallery: ["/products/idli-steaming-cabinet.png"],
  shortDescription: "Heavy-duty commercial food steamer...",
  fullDescription: "Detailed technical description...",
  specifications: [
    { label: "Material Construction", value: "Food-grade AISI 304 Stainless Steel" },
    { label: "Capacity", value: "Configurable multi-tray (96 to 240 idlis / cycle)" },
  ],
  features: [
    "Consistent steam distribution across all rack tiers",
    "Corrosion-resistant sanitary welding",
  ],
}
```

### To add a new product:
1. Place the product image into the `public/products/` folder (e.g. `public/products/my-new-machine.png`).
2. Add a new product object to the `products` array in `data/products.ts` with a unique `slug` and appropriate `category`.
3. The new product will automatically appear in:
   - The Home page product grid with category filtering.
   - The Contact form product dropdown.
   - A dedicated static detail page at `/products/[slug]`.

---

## 🖼️ 3. How to Update the Logo & Images

- **Logo**: Replace `public/logo.png` with your preferred transparent PNG or vector logo.
- **Brand Square / Favicon**: Replace `public/logo-purple.jpg` with your high-res square logo.
- **OpenGraph Social Preview**: Replace `public/og-image.jpg` (1200x630 px).
- **Product Images**: Place PNG, JPG, or WebP files in `public/products/`. Next.js automatically serves and optimizes them.

---

## 📧 4. How to Configure Email (Nodemailer & SMTP)

When someone submits the inquiry form on the home page, an email is dispatched directly to `info@mechanddie.com`.

### Step 1: Create your `.env.local` file
Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

### Step 2: Fill in your SMTP credentials
Open `.env.local` and configure your email provider:

#### Option A: Gmail (Recommended for quick setup)
1. In your Google Account, enable **2-Step Verification**.
2. Go to **Security → App Passwords** and generate a password for "Mail".
3. Add the following to `.env.local`:
   ```env
   CONTACT_RECIPIENT_EMAIL=info@mechanddie.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-account@gmail.com
   SMTP_PASS=your-16-character-app-password
   SMTP_FROM="MECH & DIE Website" <info@mechanddie.com>
   ```

#### Option B: Professional Domain Email (Hostinger, cPanel, Zoho, Google Workspace)
```env
CONTACT_RECIPIENT_EMAIL=info@mechanddie.com
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@mechanddie.com
SMTP_PASS=your-mailbox-password
SMTP_FROM="MECH & DIE Inquiries" <info@mechanddie.com>
```

> **Note**: If SMTP credentials are not yet set up, the website automatically falls back to development mode: inquiries are cleanly logged to the server console and the user receives an instant confirmation, ensuring the form never breaks or errors out.

### Anti-Spam Honeypot Protection
The contact form includes an invisible honeypot field (`website_hp`). If an automated spam bot attempts to fill this hidden field, the API route silently ignores the message without sending spam emails to your inbox.

---

## 💬 5. WhatsApp & Call Enquiry Workflows

On every product detail page (`/products/[slug]`), visitors have two high-converting contact options:

1. **Call Now**:
   - Offers an instant choice between **India Direct** (`+91 85477 70761`) and **UAE Direct** (`+971 56 308 8846`).
2. **Enquire on WhatsApp**:
   - Opens an interactive modal pre-filled with the Product Name & Category.
   - Collects Name, Company Name, and an optional custom message.
   - Allows selecting either the **India** or **UAE** support desk.
   - Pre-composes a structured message and opens WhatsApp Web or the WhatsApp App directly with zero friction:
     ```
     Hello MECH & DIE, I would like to enquire about a product.
     Name: John Doe
     Company: Gulf Bakery LLC
     Product: Automatic Chapathi Maker (Category: Bakery / Food Processing)
     Message: Please provide export pricing and shipping terms to Dubai.
     ```

---

## 💻 6. Running Locally

To run the project on your machine:

```bash
# 1. Navigate to the project directory
cd C:\Users\yasee\.gemini\antigravity\scratch\mech-and-die

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify a production build:
```bash
npm run build
npm run start
```

---

## 🌐 7. Deploying to Vercel (Production)

Deploying this Next.js project to **Vercel** takes under 2 minutes:

1. Push your project to a GitHub, GitLab, or Bitbucket repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for MECH & DIE website"
   git branch -M main
   git remote add origin https://github.com/your-username/mech-and-die.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your `mech-and-die` repository. Vercel automatically detects Next.js.
4. In the **Environment Variables** section, add your SMTP variables from `.env.local`:
   - `CONTACT_RECIPIENT_EMAIL`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
5. Click **Deploy**. Vercel will build the project and issue a global SSL domain with instantaneous edge performance.
