# Publishing MoodTask to GitHub

## 1. Initialize Git locally

```bash
git init
git branch -M main
git add .
git commit -m "Initial MoodTask PWA"
```

## 2. Create a GitHub repository

Create an empty repository on GitHub. Do not initialize it with a README, license, or gitignore because this folder already contains those files.

## 3. Connect and push

Replace `YOUR-USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/moodtask.git
git remote -v
git push -u origin main
```

## Optional: use GitHub CLI instead

```bash
gh auth login
gh repo create moodtask --public --source=. --remote=origin --push
```

## Optional: publish as a GitHub Pages app

In GitHub, go to the repository's **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

Your app URL will usually look like:

```text
https://YOUR-USERNAME.github.io/moodtask/
```
