import SELECT_MOVIE from '../actions/Action';
import categoriesData from '../data';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [categoriesData],
};

function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedCategory: action.payload.selectedCategory,
      selectedMovie: action.payload.selectedMovie,
    };
  default:
    return state;
  }
}

export default movieReducer;
