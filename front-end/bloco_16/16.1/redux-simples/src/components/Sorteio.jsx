import React from 'react'
import Card from './Card'

function Sorteio(props) {
  const {min, max} = props;
  const random = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <spa>
          <span>Resultado:</span>
          <strong>{random}</strong>
        </spa>
      </div>
    </Card>
  )
}

export default Sorteio;
