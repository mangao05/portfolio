# Jeric Mangao - Professional Full-Stack Developer Portfolio

A modern, highly aesthetic, responsive, and recruiter-friendly one-page portfolio website designed for **Jeric E. Mangao**, Senior PHP / Full-Stack Developer. 

This is a production-ready static website configured for fast, free deployments to hosting platforms like **Vercel**, **GitHub Pages**, or **Netlify**.

## 🚀 Tech Stack

- **Structure**: Semantic HTML5
- **Styling**: Custom CSS (Vanilla CSS) & Bootstrap 5 (via CDN)
- **Icons**: Font Awesome 6 (via CDN)
- **Interactivity**: Vanilla JavaScript
- **Fonts**: Space Grotesk (Headings) & Plus Jakarta Sans (Body) from Google Fonts

## 📁 Folder Structure

```text
portfolio/
├── index.html                  # Main entry point (highly structured & semantic)
├── assets/
│   ├── css/
│   │   └── style.css           # Custom stylesheets, glassmorphic styles & animations
│   ├── js/
│   │   └── main.js            # Frontend interactivity, active link tracking, tab filters
│   ├── img/                    # Static image directory (optional assets)
│   └── resume/
│       └── Jeric_Mangao_Resume_V4.pdf # Downloadable resume file
├── vercel.json                 # Vercel configuration (clean URLs & caching headers)
└── README.md                   # Project documentation (this file)
```

## 💻 Running Locally

You can run this project locally without any compiling or bundling.

### Option 1: Direct File Access
Simply double-click the `index.html` file in your file explorer to open it in your browser of choice.

### Option 2: Live Server (VS Code Extension)
If using VS Code, right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Command Line Server
Run one of the following commands in the `portfolio` root directory:

**Using Node.js (`npx`):**
```bash
npx serve
```

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000
```
Then, visit `http://localhost:8000` in your web browser.

## ☁️ Deploying to Vercel

This portfolio is optimized for Vercel's zero-config deployment.

### Option 1: Vercel Dashboard (GitHub Import)
1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to your [Vercel Account](https://vercel.com).
3. Click **"Add New"** > **"Project"** and select your repository.
4. Click **"Deploy"**. Vercel will automatically detect the static project and deploy it.

### Option 2: Vercel CLI
If you have Vercel CLI installed:
1. Run `npm install -g vercel` (if not already installed).
2. Navigate to the `portfolio` root directory.
3. Run the deployment command:
   ```bash
   vercel
   ```
4. Follow the terminal prompts. To deploy to production, run:
   ```bash
   vercel --prod
   ```

## 📄 Key Features Included
- **Hero Banner**: High-impact greeting, dynamic typography, statistics panel, and instant action CTAs.
- **Interactive Skills Tab**: Categorized filter tabs (Backend, Frontend, Databases, DevOps, Integrations) built in vanilla JS.
- **Vertical Experience Timeline**: Custom timeline design highlighting technical responsibilities, metrics, and technology badges for each position.
- **Featured Case Studies**: 4 deep-dive cards based on Jeric's resume detailing Challenges, Solutions, and Impacts for key accomplishments.
- **Feedback-ready Contact Form**: Interactive UX validation with button state transitions and a simulated sending state.
- **Performance Details**: Light weight, zero heavy dependencies, responsive mobile design, and optimized clean URLs via `vercel.json`.
