import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

const MovieAPI = axios.create({
  baseURL: API_URL,
  params: {
    api_key: 'fc6e97341dc9ad67e721468f18ba1521',
  },
});

export const fetchTrandingMovies = async () => {
  const media_type = 'movie';
  const time_window = 'day';
  const response = await MovieAPI.get(`/trending/${media_type}/${time_window}`);
  const { data } = response;
  return data.results;
};

export const fetchMoviesById = async id => {
  const response = await MovieAPI.get(`movie/${id}`);
  const { data } = response;
  return data;
};

export const fetchMovieReview = async id => {
  const response = await MovieAPI.get(`movie/${id}/reviews`);
  const { data } = response;
  return data.results;
};

export const fetchMovieCast = async id => {
  const response = await MovieAPI.get(`movie/${id}/credits`);
  const { data } = response;
  return data.cast;
};

export const fetchMovieBySearch = async query => {
  const response = await MovieAPI.get('/search/movie', {
    params: { query },
  });
  const { data } = response;        
  return data.results;
};
