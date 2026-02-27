# Netflix-style Landing Page (TMDB)

A React frontend that fetches movies and TV data from [The Movie Database (TMDB)](https://www.themoviedb.org/) and displays it in a Netflix-style landing layout: hero banner, sidebar, and horizontal content rows.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. (Optional) API key is already set in `.env`. To use your own TMDB key, create a `.env` file:

   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

## Run the app

**Development (with hot reload):**

```bash
npm run dev
```

Then open **http://localhost:5173/** in your browser.

**Production build:**

```bash
npm run build
npm run preview
```

Then open the URL shown in the terminal (e.g. http://localhost:4173/).

## What you’ll see

- **Left sidebar** – Icons for Search, Home, Downloads, Play, More, Settings  
- **Hero section** – Featured title (from TMDB trending) with backdrop, title, rating, overview, Play and Watch Trailer  
- **Content rows** – “New this week”, “Trending Now”, “Popular on Netflix”, “Top Rated” with horizontal scrollable posters  

Data is loaded from TMDB; posters and backdrops use TMDB’s image CDN.
