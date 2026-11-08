# Out of All the Places, I'd Choose You 💖
### *A little something for my Totaa (Batool)*

An interactive, romantic storytelling website handcrafted for **Batool** by **Mayer**. Designed to be opened on her phone when she wakes up in Egypt, feeling deeply loved, reassured, and understanding what was in your heart all along.

---

## 🌟 Story Chapters & Experience

1. **Chapter 1 — Good Morning, Totaa**: A sweet wake-up note with an animated wax-sealed envelope that opens when tapped.
2. **Chapter 2 — About Last Night**: A heartfelt, gentle letter clarifying the conversation from last night, taking full ownership without pressure or guilt, plus a playful smile.
3. **Chapter 3 — Two Paths, One Choice**: Interactive illustrated cards comparing France (feasibility/academic paper) vs. Egypt (home, warmth, and the girl who makes coming back so sweet).
4. **Chapter 4 — Paris Is Beautiful, But...**: Responsive animated flight map connecting Paris to Cairo with an airplane leaving hearts, building up to the dramatic reveal: **"YOU, TOTAA."**
5. **Chapter 5 — The Little Things I Miss**: A romantic Polaroid scrapbook with 6 interactive 3D flip cards, revealing personal notes on the back.
6. **Chapter 6 — My Letter to Totaa**: The emotional climax — a handwritten letter on warm parchment with Mayer's wax seal, leading to a surprise finale button with an animated giant glowing heart, a rose petal shower, and **"See you soon, inshallah."**

---

## 💌 Hidden Easter Eggs

- **Corner Heart**: Tapping the tiny heart in the bottom-left corner 5 times triggers confetti and reveals:
  > *"Pssst... Mayer loves Totaa more than this website can explain. 💖"*
- **Secret Kiss Stamp**: Tapping the subtle stamp next to the corner heart or the footer heart triggers a secret kiss popup:
  > *"You found a secret! Here's one extra kiss for you. 💋"*
- **Desktop Cursor Heart Trail**: On desktop, subtle floating hearts softly trail the cursor (automatically disabled on mobile touch screens for optimal battery & performance).
- **Romantic Melody Box**: Floating music control in the top-right corner. It uses a built-in soothing music-box lullaby synthesizer (zero copyright issues, zero heavy file downloads) and **never autoplays** until she taps it.

---

## 📸 How to Replace the Photos with Real Pictures of You Two

The cards in Chapter 5 currently use high-quality handcrafted romantic SVG illustrations. You can easily replace them with your real photos:

1. Copy your 6 photos into the `public/photos/` directory:
   - `smile.jpg` (or `.png`)
   - `dates.jpg`
   - `laughing.jpg`
   - `pictures.jpg`
   - `time.jpg`
   - `together.jpg`
2. Open [`src/content/story.ts`](src/content/story.ts) and verify the file paths in `cards` (e.g. change `/photos/smile.svg` to `/photos/smile.jpg`).
3. If an image ever fails to load, it automatically falls back gracefully to a romantic colored illustration, so the site will never look broken!

---

## ✏️ How to Edit or Personalize Any Text

All text across all 6 chapters is centralized in one file:
👉 **[`src/content/story.ts`](src/content/story.ts)**

You can tweak any paragraph, card message, or easter egg in seconds.

---

## 🎵 Optional Custom Music File

If you have a special song you want to play instead of the built-in ambient music box:
1. Name your audio file `music.mp3`.
2. Drop it into the `public/` folder (`public/music.mp3`).
3. The player will automatically detect it and play your song when she taps the music icon!

---

## 🚀 Deployment Guide (Share Privately with Totaa in 2 Minutes)

### Option 1: Deploy to Vercel (Recommended — Free & Takes 60 Seconds)

1. Push this project to your GitHub account (private or public repository).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Leave all settings at default (Vercel automatically detects Vite):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
6. In ~30 seconds, Vercel will give you a private link (e.g., `https://totaa-surprise.vercel.app`).
7. Send the link to her on WhatsApp / iMessage before she wakes up!

### Option 2: Deploy to Netlify (Free & Drag-and-Drop)

1. Build the production files:
   ```bash
   npm run build
   ```
2. Log in to [netlify.com](https://netlify.com).
3. Go to the **Sites** tab and drag & drop the `dist` folder directly into the Netlify dashboard.
4. Your site will be live instantly with a free SSL certificate.

---

## 🛠️ Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:3000 in your browser
```
