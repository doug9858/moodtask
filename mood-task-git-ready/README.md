# MoodTask

MoodTask is a lightweight Android-friendly Progressive Web App for choosing tasks based on your current mood, energy level, time of day, life area, and available time.

## Features in this first version

- Add, edit, delete, and search tasks.
- Tag tasks by life area, energy, time of day, mood, duration, difficulty, location, type, and repeatability.
- Randomly generate a task from your preferences.
- Uses stricter matching first, then falls back to a near match if no exact task exists.
- Avoids tasks recently completed or skipped.
- Tracks completed and skipped task history.
- Includes starter tasks such as late-night, low-energy, family-oriented options.
- Stores data locally in the browser using localStorage.
- Includes PWA files: manifest, app icons, and a service worker for offline caching when served from a secure origin.
- Supports JSON backup export and import.

## How to run locally

Open this folder in a static server. For example, from the folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Opening `index.html` directly from the file system works for basic testing, but the install/offline PWA features require a local server, localhost, or HTTPS hosting.

## How to use on Android

1. Host the folder on an HTTPS static host, such as Netlify, Vercel, GitHub Pages, Firebase Hosting, or Cloudflare Pages.
2. Open the hosted URL in Chrome on Android.
3. Use Chrome's menu and choose **Add to Home screen** or **Install app**.

## Files

- `index.html` — app structure
- `styles.css` — mobile-first styling
- `app.js` — app logic and local storage
- `manifest.webmanifest` — Android/PWA install metadata
- `service-worker.js` — offline caching
- `icons/` — PWA icons
