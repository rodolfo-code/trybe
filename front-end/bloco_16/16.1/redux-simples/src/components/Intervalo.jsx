import React from 'react'
import Card from './Card'
import './Intervalo.css'

function Intervalo(props) {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <spa>
          <strong>Mínimo:</strong>
          <input type="number"value={0}
          />
        </spa>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10}
          />
        </span>
      </div>
    </Card>
  )
}

export default Intervalo
