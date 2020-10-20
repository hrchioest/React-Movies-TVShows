const api_key = process.env.REACT_APP_API_KEY_THEMOVIEDB;

export const movieTrending = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=es-US&page=[page]`;
export const trendingTv = `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}&language=es-US&page=[page]`;

export const moviePopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-US&page=[page]`;
export const movieTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=es-US&page=[page]`;
export const movieUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=es-US&page=[page]`;
export const movieNow = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=es-US&page=[page]`;

export const tvPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-US&page=[page]`;
export const tvTopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=es-US&page=[page]`;
export const tvNow = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=es-US&page=[page]`;

export const info = `https://api.themoviedb.org/3/[type]/[id]?api_key=${api_key}&language=es`;
export const cast = `https://api.themoviedb.org/3/[type]/[id]/credits?api_key=${api_key}&language=es`;

export const multiSearch = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}`;

export const external = `https://api.themoviedb.org/3/[type]/[id]/external_ids?api_key=${api_key}&language=es`;
export const videoMovie = `https://api.themoviedb.org/3/movie/[id]/videos?api_key=${api_key}&language=en=US`;
export const season = `https://api.themoviedb.org/3/tv/[id]/season/[season_number]?api_key=${api_key}&language=es`;
export const similars = `https://api.themoviedb.org/3/[type]/[id]/similar?api_key=${api_key}&language=es`;
