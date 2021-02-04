import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RenderSolutionsList extends Component {
  render() {
    const { solutions } = this.props
    return (
      <section>
        <h3>Gabarito do módulo {solutions[0] - 0.1} </h3>
        <ul>
          { solutions.map((day) =>
            (<li key={ day }> <Link to={ `/solutions/${day}` }>{ day }</Link></li>
          ))}
        </ul>
      </section>
    )
  }
}
