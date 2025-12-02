# smart-shoppinh-tool

Netlify-ready starter for an E-commerce Price Intelligence tool (web + serverless functions) with Amazon Associates integration, CI, and auto Netlify deploy workflow.

## What is included
- React frontend (Vite)
- Netlify Functions (serverless) for simple APIs and affiliate redirect
- Netlify config
- GitHub Actions workflows for CI and Netlify deployment
- Instructions to create the GitHub repo and deploy

## How to use
1. Unzip and review files.
2. Create a new GitHub repository named `smart-shoppinh-tool` with default branch `main`.
3. Push the repo to GitHub (instructions below).
4. Configure Netlify site and set secrets (`NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`, `AMAZON_AFFILIATE_TAG`, etc).
5. Deploy on Netlify (automatic via GitHub Actions).

### Quick push commands (run locally)
```bash
git init
git branch -M main
git add .
git commit -m "Initial commit - smart-shoppinh-tool starter"
git remote add origin https://github.com/your-username/smart-shoppinh-tool.git
git push -u origin main
```

### Env vars to set on Netlify / GitHub
- NETLIFY_AUTH_TOKEN
- NETLIFY_SITE_ID
- AMAZON_AFFILIATE_TAG
- (Optional) SUPABASE_URL, SUPABASE_KEY

