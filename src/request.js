const API_KEY = "754e66cced9c854e3adffd77926e18a3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
};

export default requests;
