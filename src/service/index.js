const api_key = process.env.REACT_APP_API_KEY_THEMOVIEDB;
export const movieTrending = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;
export const trendingTv = `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`;

export const moviePopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key} `;
export const movieTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key} `;
export const movieUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key} `;
export const movieNow = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;

export const tvPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;
export const tvTopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`;
export const tvNow = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}`;

export const info = `https://api.themoviedb.org/3/[type]/[id]?api_key=${api_key}&language=es`;
export const cast = `https://api.themoviedb.org/3/[type]/[id]/credits?api_key=${api_key}&language=es`;
