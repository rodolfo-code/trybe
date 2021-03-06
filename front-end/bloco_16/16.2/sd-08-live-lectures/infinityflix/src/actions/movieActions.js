import SELECT_MOVIE from './Action';

export default function selectMovie(selectedCategory, selectedMovie) {
  return {
    type: SELECT_MOVIE,
    payload: {
      selectedCategory,
      selectedMovie,
    },
  };
}
