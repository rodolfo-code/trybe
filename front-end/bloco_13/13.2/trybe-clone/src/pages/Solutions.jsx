import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import RenderSolutionsList from '../components/RenderSolutionsList';

class Solutions extends Component {
  render() {
    const { availableSolutions } = this.props;
    console.log(this.props.availableSolutions[0])
    return (
      <section>
        {/* <h3>Gabarito do módulo  </h3>
        <ul>
          { solutions12.map((day) =>
            (<li key={ day }> <Link to={ `/solutions/${day}` }>{ day }</Link></li>
          ))}
        </ul> */}
        { availableSolutions.map((module) => <RenderSolutionsList solutions={ module }/>) }
      </section>
      
    )
  }
}

// Solutions.propTypes = {
//   availableSolutions: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

export default Solutions;
