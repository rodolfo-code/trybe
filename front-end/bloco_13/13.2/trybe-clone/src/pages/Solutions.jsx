import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import RenderSolutionsList from '../components/RenderSolutionsList';

class Solutions extends Component {
  render() {
    const { availableSolutions } = this.props;
    return (
      <section>
        { availableSolutions.map((module) => <RenderSolutionsList solutions={ module }/>) }
      </section>
      
    )
  }
}

// Solutions.propTypes = {
//   availableSolutions: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

export default Solutions;
