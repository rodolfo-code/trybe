import React from 'react'
import Card from './Card'
import './Intervalo.css'

function Intervalo() {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <spa>
          <strong>Mínimo:</strong>
          <input type="number"value={0}/>
        </spa>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10}></input>
        </span>
      </div>
    </Card>
  )
}

export default Intervalo
