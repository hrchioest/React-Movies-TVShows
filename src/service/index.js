
export const movieTrending = "https://api.themoviedb.org/3/trending/movie/week?api_key=b28a6d7a756aac4ded04e3b860e94284";
export const trendingTv = "https://api.themoviedb.org/3/trending/tv/week?api_key=b28a6d7a756aac4ded04e3b860e94284";

export const moviePopular = "https://api.themoviedb.org/3/movie/popular?api_key=b28a6d7a756aac4ded04e3b860e94284";
export const movieTopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=b28a6d7a756aac4ded04e3b860e94284";
export const movieUpcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=b28a6d7a756aac4ded04e3b860e94284";
export const movieNow = "https://api.themoviedb.org/3/movie/now_playing?api_key=b28a6d7a756aac4ded04e3b860e94284";

export const tvPopular = "https://api.themoviedb.org/3/tv/popular?api_key=b28a6d7a756aac4ded04e3b860e94284";
export const tvTopRated = "https://api.themoviedb.org/3/tv/top_rated?api_key=b28a6d7a756aac4ded04e3b860e94284";
export const tvNow = "https://api.themoviedb.org/3/tv/on_the_air?api_key=b28a6d7a756aac4ded04e3b860e94284";


/*
export const topRatedMovies = async () => {
    try {
        const { data } = await axios.get(topMovieUrl)
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data.results.map((m) => ({
            id: m['id'],
            title: m['title'],
            poster: posterUrl + m['poster_path']
        }))
        return modifiedData;
    }
    catch (error) { }
}

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await moviesTopRated());
    };

    fetchAPI();
  }, []);



export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchMovieByGenre = async (genre_id) => {
    try {
        const { data } = await axios.get(moviesUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1,
                with_genres: genre_id
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchPersons = async () => {
    try {
        const { data } = await axios.get(personUrl, {
            params: {
                api_key: apiKey
            }
        })
        const modifiedData = data['results'].map((p) => ({
            id: p['id'],
            popularity: p['popularity'],
            name: p['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
            known: p['known_for_department']
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchTopratedMovie = async () => {
    try {
        const { data } = await axios.get(topratedUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) {

    }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}

export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
            params: {
                api_key: apiKey,
            }
        });
        return data['results'][0];
    } catch (error) { }
}

export const fetchCasts = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}*/