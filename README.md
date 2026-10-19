# Nikhil Diwakar - Personal Portfolio

A fast, responsive, and accessible personal portfolio website built with clean semantic HTML, vanilla CSS, and lightweight JavaScript.

Designed for **Nikhil Diwakar**, a B.Tech Computer Science Engineering student based in **Kanpur, Uttar Pradesh, India**.

---

## 📋 Verified Details & Constraints

- **Name:** Nikhil Diwakar
- **Education:** B.Tech in Computer Science Engineering (Currently pursuing)
- **Location:** Kanpur, Uttar Pradesh, India
- **LinkedIn Profile:** [https://www.linkedin.com/in/nikhil-diwakar-4828482a9](https://www.linkedin.com/in/nikhil-diwakar-4828482a9)
- **GitHub Profile:** [https://github.com/nikhildiwakar666-a11y](https://github.com/nikhildiwakar666-a11y)
- **Featured Project:** [PN-Neet-Diw](https://github.com/nikhildiwakar666-a11y/PN-Neet-Diw)
- **Project Repository:** `https://github.com/nikhildiwakar666-a11y/PN-Neet-Diw`
- **Verified Certificates:**
  - *Java Course - Mastering the Fundamentals* — Scaler Topics (25 August 2026)
  - *YUVA AI For All* — IndiaAI through TCS iON (25 August 2026)
  - *AI - Data Engineering Analyst* — NASSCOM & Skill India Digital Hub (19 August 2026)
- **Verified Achievements & Activities:**
  - School Long Jump (2nd Place)
  - School Race (3rd Place)
  - Marathon Race (Participant)
  - College Brainteaser Event (Participant)

> **Note:** Strictly adheres to verified details. No unconfirmed colleges, study years, contact emails, phone numbers, or technical claims are fabricated.

---

## 🎨 Visual & Design System

- **Blue Theme:** Deep midnight navy background (`#060b18` / `#080f22`), soft non-intrusive cyan/blue ambient lighting, and rich cobalt glass cards.
- **Accent Palette:** Electric blue (`#38bdf8`), vibrant cyan (`#06b6d4`, `#22d3ee`), and soft sky blue (`#7dd3fc`).
- **Strict Color Rules:** Completely free of orange, red, brown, or warm colors.
- **Hero Presentation:** Modern asymmetric split-grid with developer profile terminal component.
- **Typography:** Refined typography using *Plus Jakarta Sans* and *JetBrains Mono*.
- **Resume & LinkedIn:** Dedicated "Download Resume" action button and verified LinkedIn button.
- **Certificates & Achievements:** Dedicated cards with thumbnail view and PDF open/download actions.
- **Project Showcase:** Features verified project logo (`assets/pn-neet-diw-logo.jpg`) with public repository badge.
- **Accessibility:**
  - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
  - Skip-to-content keyboard link
  - Clear `:focus-visible` cyan outline rings with accessible contrast
  - Supports `prefers-reduced-motion` for motion-sensitive users
  - Responsive mobile drawer navigation with ARIA attributes and keyboard Escape key dismissal

---

## 📁 Project Structure

```text
portfolio/
├── assets/
│   ├── pn-neet-diw-logo.jpg                                # Verified PN-Neet-Diw project logo
│   ├── cirtificate.jpeg                                    # Scaler Java Course certificate
│   ├── Nikhil_Diwakar_41325.pdf                            # IndiaAI TCS iON certificate
│   └── certificate_30abc684-c033-40a9-836b-caa3d4b7be33.pdf # NASSCOM AI certificate
├── Nikhil_resume.pdf                                       # Resume PDF file
├── index.html                                              # Semantic HTML5 markup
├── styles.css                                              # Design system with deep navy & cyan accents
├── script.js                                               # Accessible mobile drawer & scroll-spy
├── server.js                                               # Zero-dependency local Node.js HTTP server
├── package.json                                            # NPM start command
└── README.md                                               # Documentation and deployment guide
```

---

## 🚀 Running Locally

You can preview the website locally using any standard static file server:

### Option 1: Native Node Server (Recommended)
You can start the built-in local server instantly with zero third-party dependencies:
```bash
npm start
```
or:
```bash
node server.js
```
Then open your browser at:
```
http://localhost:3000
```

### Option 2: Python Built-in Server
If Python is available on your machine, you can run:
```bash
python -m http.server 3000
```

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

### Option 3: VS Code Live Server Extension
Right-click on `index.html` in VS Code and select **"Open with Live Server"**.

### Option 4: Direct Browser View
You can also double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

---

## 🌐 Publishing to GitHub Pages

You can host this portfolio completely free using **GitHub Pages**.

### Method A: Publishing as your primary User Site (`<username>.github.io`)

1. Create a new public repository on GitHub named:
   ```text
   nikhildiwakar666-a11y.github.io
   ```
2. In your local terminal, navigate to the portfolio folder and initialize git:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio release for Nikhil Diwakar"
   git branch -M main
   git remote add origin https://github.com/nikhildiwakar666-a11y/nikhildiwakar666-a11y.github.io.git
   git push -u origin main
   ```
3. Your site will automatically go live at:
   ```
   https://nikhildiwakar666-a11y.github.io
   ```

---

### Method B: Publishing as a Project Repository (`portfolio`)

1. Create a repository on GitHub named `portfolio` (or `developer-portfolio`).
2. Push the files to the repository:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/nikhildiwakar666-a11y/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings** > **Pages** in your GitHub repository.
4. Under **Branch**, select `main` and root `/` folder, then click **Save**.
5. Within 1-2 minutes, your site will be live at:
   ```
   https://nikhildiwakar666-a11y.github.io/portfolio/
   ```

---

## ✅ Quality & Verification Checklist

- [x] Exact project name confirmed: **PN-Neet-Diw** (not "PN-Neet-Div")
- [x] Project URL points directly to: `https://github.com/nikhildiwakar666-a11y/PN-Neet-Diw`
- [x] GitHub profile URL points to: `https://github.com/nikhildiwakar666-a11y`
- [x] Location accurately specified: `Kanpur, Uttar Pradesh, India`
- [x] Education stated as: `B.Tech in Computer Science Engineering` (Currently pursuing)
- [x] No invented colleges, contact numbers, email forms, or false experience claims
- [x] Validated semantic HTML and accessible keyboard navigation
