import React from 'react';
import { connect } from 'react-redux';
import selectMovie from '../actions/movieActions';

class Sidebar extends React.Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <aside>
        {categories.map((category) => (
          <div key={ category.id }>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ movie.id }>
                  {movie.title}
                  {' '}
                  was released in
                  {' '}
                  {movie.released}
                  <button
                    type="button"
                    onClick={ () => selectMovie(category, movie) }
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovies: state.movies.selectedMovies,
  categories: state.movies.categories,
});

const mapDispatchToProps = (dispatch) => ({
  movie: () => dispatch(selectMovie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
