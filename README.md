# 🚀 My Learning Apps

A landing page for all our learning adventure apps! Deployed as a GitHub Pages root site.

## How It Works

This is the **hub** that links to all the individual app repos:

```
<username>.github.io          ← THIS repo (landing page)
<username>.github.io/music-adventure/   ← separate repo
<username>.github.io/chess-puzzles/     ← separate repo (future)
<username>.github.io/nature-explorer/   ← separate repo (future)
```

## Setup

1. **Create a GitHub account** for your kid (e.g. `kidname`)
2. **Create a repo** named exactly `kidname.github.io` (must match the username)
3. Push this code to the `main` branch
4. Go to **Settings → Pages → Source** → select **GitHub Actions**
5. Your landing page is live at `https://kidname.github.io`

## Adding a New App

1. Deploy the app as a separate repo (e.g. `music-adventure`)
2. Open `src/App.jsx`
3. In the `APPS` array, either update a "coming-soon" entry or add a new one:

```js
{
  id: "my-new-app",
  name: "My New App",
  description: "What this app does!",
  emoji: "🎯",
  secondEmoji: "✨",
  color: "#FF6B6B",
  colorLight: "#FFF1F0",
  gradient: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
  url: "/my-new-app/",     // ← matches the repo name
  status: "ready",          // ← change from "coming-soon" to "ready"
  tags: ["Tag1", "Tag2"],
},
```

4. Push — it auto-deploys.

## Local Development

```bash
npm install
npm run dev
```
