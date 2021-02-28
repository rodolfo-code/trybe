import React from 'react'
import Card from './Card'
import './Intervalo.css'

function Intervalo(props) {
  const { min, max, onMinChanged, onMaxChanged } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <spa>
          <strong>Mínimo:</strong>
          <input type="number"value={min}
            onChange={(e) => onMinChanged(e.target.value)}
          />
        </spa>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max}
            onChanged={(e) => onMaxChanged(e.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}

export default Intervalo
