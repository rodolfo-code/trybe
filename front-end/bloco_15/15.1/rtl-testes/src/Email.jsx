import React, { useState } from 'react'

function Email() {
  let [email, setEmail] = useState('');
  let [change, setChange] = useState('')

  const handleClick = () => {
    setEmail(email = change)
    setChange('')
  }

  const handleClear = () => {
    setEmail(email = '')
  }

  console.log(change)
  return (
    <div>
      <label htmlFor="user-email">
        Email
      </label>
      <input type="email" value={change} id='user-email' onChange={e => setChange(change = e.target.value)} />
      <input type="button" data-testid="id-send" onClick={handleClick} value="Salvar"/>
      <input type="button" data-testid="id-clear" value="Limpar" onClick={handleClear}/>
      <h2>
        Valor: {email}
      </h2>
    </div>
  )
}

export default Email
