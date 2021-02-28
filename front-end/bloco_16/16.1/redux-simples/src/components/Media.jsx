import React from 'react'
import Card from './Card'

function Media(props) {
  const {min, max} = props;
  return (
    <Card title="Média dos Números" green>
      <div>
        <spa>
          <span>Resultado:</span>
          <strong>{(min + max)/ 2}</strong>
        </spa>
      </div>
    </Card>
  )
}

export default Media;
