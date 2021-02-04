import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class Solutions extends Component {
  render() {
    const { availableSolutions } = this.props;
    console.log(availableSolutions)
    return (
      <section>
        <ul>
          { availableSolutions.map((day) =>
            (<li key={ day }> <Link to={ `/solutions/${day}` }>{ day }</Link></li>
          ))}
      </ul>
      </section>
    )
  }
}

Solutions.propTypes = {
  availableSolutions: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Solutions;
