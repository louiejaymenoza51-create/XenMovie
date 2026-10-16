const movieCatalog = {
  trending: [
    { title: "Midnight Echoes", genre: "Sci‑Fi", rating: "8.9", price: "₱199", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
    { title: "Velvet Run", genre: "Action", rating: "8.5", price: "₱149", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80" },
    { title: "Glass Horizon", genre: "Drama", rating: "9.1", price: "₱249", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" },
    { title: "Afterlight", genre: "Thriller", rating: "8.7", price: "₱179", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
    { title: "Redline", genre: "Action", rating: "8.4", price: "₱159", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
    { title: "Sunset Circuit", genre: "Fantasy", rating: "8.8", price: "₱199", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80" }
  ],
  topPicks: [
    { title: "Neon City", genre: "Sci‑Fi", rating: "9.0", price: "₱249", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80" },
    { title: "Silver Line", genre: "Drama", rating: "8.8", price: "₱169", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80" },
    { title: "Night Watch", genre: "Mystery", rating: "8.6", price: "₱179", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
    { title: "Rentless", genre: "Action", rating: "8.2", price: "₱149", image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=800&q=80" },
    { title: "Moon Arc", genre: "Fantasy", rating: "9.3", price: "₱299", image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" },
    { title: "Golden Hour", genre: "Comedy", rating: "8.4", price: "₱129", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" }
  ],
  continueWatching: [
    { title: "Shadow Manor", genre: "Horror", rating: "8.1", price: "₱99", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80" },
    { title: "Atlas", genre: "Documentary", rating: "7.9", price: "₱89", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" },
    { title: "Cinder Sky", genre: "Adventure", rating: "8.3", price: "₱139", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
    { title: "Ashes of Rome", genre: "Epic", rating: "8.6", price: "₱179", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80" },
    { title: "Open Water", genre: "Adventure", rating: "7.8", price: "₱109", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80" },
    { title: "Chrome Hearts", genre: "Thriller", rating: "8.5", price: "₱199", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80" }
  ],
  tvShows: [
    { title: "Signal City", genre: "Drama", rating: "8.9", price: "₱159", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80" },
    { title: "Echo Point", genre: "Mystery", rating: "8.7", price: "₱189", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
    { title: "Crownless", genre: "Thriller", rating: "8.6", price: "₱179", image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=800&q=80" },
    { title: "Ember Lane", genre: "Drama", rating: "8.4", price: "₱149", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
    { title: "Stormhouse", genre: "Action", rating: "8.8", price: "₱219", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80" },
    { title: "Blue Static", genre: "Sci‑Fi", rating: "8.5", price: "₱169", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" }
  ],
  movies: [
    { title: "Vortex Run", genre: "Action", rating: "8.8", price: "₱249", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
    { title: "Dawn of Ash", genre: "Adventure", rating: "8.7", price: "₱219", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80" },
    { title: "Fever Track", genre: "Crime", rating: "8.6", price: "₱199", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80" },
    { title: "Skyline 9", genre: "Sci‑Fi", rating: "8.9", price: "₱249", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
    { title: "Mosaic", genre: "Drama", rating: "8.5", price: "₱189", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80" },
    { title: "The Last City", genre: "Fantasy", rating: "8.8", price: "₱229", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80" }
  ],
  new: [
    { title: "Solar Crash", genre: "Thriller", rating: "8.9", price: "₱219", image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" },
    { title: "Velvet Tide", genre: "Drama", rating: "8.7", price: "₱179", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" },
    { title: "Northline", genre: "Action", rating: "8.8", price: "₱209", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
    { title: "Dark Current", genre: "Sci‑Fi", rating: "8.6", price: "₱229", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80" },
    { title: "Afterglow", genre: "Comedy", rating: "8.3", price: "₱149", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
    { title: "Nightfall Bay", genre: "Mystery", rating: "8.7", price: "₱199", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80" }
  ],
  myList: [
    { title: "Starlight City", genre: "Romance", rating: "8.5", price: "₱149", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
    { title: "Hollow Frame", genre: "Mystery", rating: "8.7", price: "₱169", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80" },
    { title: "Waves of Iron", genre: "Action", rating: "8.8", price: "₱179", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80" },
    { title: "Camber Bay", genre: "Drama", rating: "8.6", price: "₱159", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80" },
    { title: "The Last Echo", genre: "Thriller", rating: "9.0", price: "₱239", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" },
    { title: "White Tide", genre: "Adventure", rating: "8.4", price: "₱139", image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" }
  ]
};

const pageConfig = {
  home: {
    eyebrow: "Original Series",
    title: "Midnight Echoes",
    meta: ["2026", "18+", "8 Episodes", "4K UHD"],
    description: "A disgraced detective uncovers a hidden city beneath the rain-soaked streets, where every secret leaves a signal in the dark.",
    background: "linear-gradient(90deg, rgba(5, 7, 13, 0.92) 0%, rgba(5, 7, 13, 0.66) 28%, rgba(5, 7, 13, 0.14) 100%), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    metrics: [
      { value: "8.9", label: "IMDb" },
      { value: "₱199", label: "Monthly" },
      { value: "4K", label: "Ultra HD" }
    ],
    genres: ["Action", "Drama", "Thriller", "Comedy", "Sci‑Fi", "Fantasy", "Documentary"],
    rows: [
      { title: "Trending Now", link: "See All", key: "trending" },
      { title: "Top Picks", link: "Browse", key: "topPicks" },
      { title: "Continue Watching", link: "Resume", key: "continueWatching" }
    ]
  },
  tv: {
    eyebrow: "Fresh Episodes",
    title: "City of Signals",
    meta: ["2026", "PG-13", "10 Episodes", "Dolby Vision"],
    description: "A broadcast journalist follows a forgotten signal in the storm, uncovering a hidden network that predicts the next disaster.",
    background: "linear-gradient(90deg, rgba(5, 7, 13, 0.92) 0%, rgba(5, 7, 13, 0.66) 28%, rgba(5, 7, 13, 0.14) 100%), url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    metrics: [
      { value: "8.8", label: "IMDb" },
      { value: "₱159", label: "Monthly" },
      { value: "HD", label: "Streaming" }
    ],
    genres: ["Crime", "Drama", "Mystery", "Fantasy", "Sci‑Fi", "Adventure", "Documentary"],
    rows: [
      { title: "Featured Series", link: "All Shows", key: "tvShows" },
      { title: "Critics Pick", link: "Explore", key: "topPicks" },
      { title: "Continue Watching", link: "Resume", key: "continueWatching" }
    ]
  },
  movies: {
    eyebrow: "Big Screen",
    title: "Vortex Run",
    meta: ["2026", "16+", "2h 12m", "IMAX"],
    description: "A renegade racer must drive through a collapsing city to stop a weaponized network from taking every route to the sea.",
    background: "linear-gradient(90deg, rgba(5, 7, 13, 0.92) 0%, rgba(5, 7, 13, 0.66) 28%, rgba(5, 7, 13, 0.14) 100%), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    metrics: [
      { value: "8.8", label: "IMDb" },
      { value: "₱249", label: "Buy" },
      { value: "4K", label: "Ultra HD" }
    ],
    genres: ["Action", "Adventure", "Crime", "Thriller", "Sci‑Fi", "Fantasy", "Drama"],
    rows: [
      { title: "Top Movies", link: "See All", key: "movies" },
      { title: "Fan Favorites", link: "Browse", key: "trending" },
      { title: "Watchlist", link: "More", key: "myList" }
    ]
  },
  new: {
    eyebrow: "Just Added",
    title: "Solar Crash",
    meta: ["2026", "14+", "New Arrival", "4K"],
    description: "A fragile orbiting station crashes into the city skyline, and a rescue crew must survive the brutal aftermath of a failed launch.",
    background: "linear-gradient(90deg, rgba(5, 7, 13, 0.92) 0%, rgba(5, 7, 13, 0.66) 28%, rgba(5, 7, 13, 0.14) 100%), url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    metrics: [
      { value: "8.9", label: "IMDb" },
      { value: "₱219", label: "New" },
      { value: "4K", label: "Ultra HD" }
    ],
    genres: ["Thriller", "Drama", "Action", "Sci‑Fi", "Mystery", "Comedy", "Adventure"],
    rows: [
      { title: "Fresh Releases", link: "See All", key: "new" },
      { title: "Hot Right Now", link: "Browse", key: "trending" },
      { title: "Coming Soon", link: "Preview", key: "topPicks" }
    ]
  },
  myList: {
    eyebrow: "Saved for later",
    title: "My List",
    meta: ["12 Titles", "For You", "Offline Ready", "4K"],
    description: "Your handpicked lineup is ready whenever you want another thrill, laugh, or cinematic escape.",
    background: "linear-gradient(90deg, rgba(5, 7, 13, 0.92) 0%, rgba(5, 7, 13, 0.66) 28%, rgba(5, 7, 13, 0.14) 100%), url('https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    metrics: [
      { value: "12", label: "Saved" },
      { value: "₱0", label: "Current" },
      { value: "HD", label: "Ready" }
    ],
    genres: ["Saved", "Favorites", "Thrillers", "Action", "Drama", "Adventure", "Documentary"],
    rows: [
      { title: "Your Queue", link: "Open", key: "myList" },
      { title: "Recommended", link: "View", key: "topPicks" },
      { title: "Recently Added", link: "Update", key: "new" }
    ]
  }
};

const renderMovies = (rows = ["trending", "topPicks", "continueWatching"]) => {
  document.querySelectorAll("[data-section]").forEach((row) => {
    const key = row.dataset.section;
    const items = movieCatalog[key] || [];

    row.innerHTML = items
      .map(
        (movie) => `
          <article class="movie-card reveal">
            <img src="${movie.image}" alt="${movie.title}" />
            <div class="movie-info">
              <div class="movie-topline">
                <span>${movie.genre}</span>
                <span class="rating">★ ${movie.rating}</span>
              </div>
              <h3>${movie.title}</h3>
              <div class="movie-meta">
                <span>HD</span>
                <span class="movie-price">${movie.price}</span>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  });

  if (rows.length) {
    document.getElementById("rowOne").dataset.section = rows[0];
    document.getElementById("rowTwo").dataset.section = rows[1] || rows[0];
    document.getElementById("rowThree").dataset.section = rows[2] || rows[1] || rows[0];
    document.getElementById("rowThree").closest(".movie-section").style.display = rows[2] ? "block" : "none";
  }

  const sectionRows = document.querySelectorAll("[data-section]");
  sectionRows.forEach((row) => {
    const key = row.dataset.section;
    const items = movieCatalog[key] || [];
    row.innerHTML = items
      .map(
        (movie) => `
          <article class="movie-card reveal">
            <img src="${movie.image}" alt="${movie.title}" />
            <div class="movie-info">
              <div class="movie-topline">
                <span>${movie.genre}</span>
                <span class="rating">★ ${movie.rating}</span>
              </div>
              <h3>${movie.title}</h3>
              <div class="movie-meta">
                <span>HD</span>
                <span class="movie-price">${movie.price}</span>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  });
};

const initRevealObserver = () => {
  if (window.revealObserver) {
    window.revealObserver.disconnect();
  }

  window.revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          window.revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => window.revealObserver.observe(element));
};

const renderCategory = (categoryKey) => {
  const category = pageConfig[categoryKey] || pageConfig.home;

  const heroBanner = document.getElementById("heroBanner");
  const heroEyebrow = document.getElementById("heroEyebrow");
  const heroTitle = document.getElementById("heroTitle");
  const heroDescription = document.getElementById("heroDescription");
  const heroMetrics = document.getElementById("heroMetrics");
  const genreStrip = document.getElementById("genreStrip");

  heroBanner.style.background = category.background;
  heroEyebrow.textContent = category.eyebrow;
  heroTitle.textContent = category.title;
  heroDescription.textContent = category.description;

  const metaNodes = [
    document.getElementById("heroMetaOne"),
    document.getElementById("heroMetaTwo"),
    document.getElementById("heroMetaThree"),
    document.getElementById("heroMetaFour")
  ];

  metaNodes.forEach((node, index) => {
    node.textContent = category.meta[index] || "";
  });

  heroMetrics.innerHTML = category.metrics
    .map(
      (metric) => `
        <div>
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join("");

  genreStrip.innerHTML = category.genres
    .map(
      (genre, index) =>
        `<button class="genre-pill ${index === 0 ? "active" : ""}">${genre}</button>`
    )
    .join("");

  category.rows.forEach((rowConfig, index) => {
    const titleEl = document.getElementById(`rowTitle${index + 1}`);
    const linkEl = document.getElementById(`rowLink${index + 1}`);
    const rowEl = document.getElementById(`row${index + 1}`);

    if (titleEl) titleEl.textContent = rowConfig.title;
    if (linkEl) linkEl.textContent = rowConfig.link;
    if (rowEl) rowEl.dataset.section = rowConfig.key;
  });

  const rowKeys = category.rows.map((row) => row.key);
  renderMovies(rowKeys);
  initRevealObserver();

  document.querySelectorAll(".genre-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".genre-pill").forEach((item) => item.classList.remove("active"));
      pill.classList.add("active");
    });
  });
};

const bindFormActions = () => {
  document.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "index.html";
    });
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      const selectedCategory = link.dataset.nav || "home";
      renderCategory(selectedCategory);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll(".plan-option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".plan-option").forEach((item) => item.classList.remove("selected"));
      option.classList.add("selected");
      const input = option.querySelector("input");
      if (input) input.checked = true;
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderCategory("home");
  bindFormActions();
  initRevealObserver();
});
