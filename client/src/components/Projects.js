import React from 'react'
import cards from '../photos/cards.png'

function Projects(props) {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <p className="info">{props.info}</p>
      </div>
    </div>
  )
}

export default Projects
