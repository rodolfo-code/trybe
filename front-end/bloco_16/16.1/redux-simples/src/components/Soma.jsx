import React from 'react'
import Card from './Card'

function Soma(props) {
  const {min, max} = props;
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <spa>
          <span>Resultado:</span>
          <strong>{max + min}</strong>
        </spa>
      </div>
    </Card>
  )
}

export default Soma;
