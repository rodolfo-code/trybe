import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addAssignment } from '../actions';

function InputList(props) {
  const { add } = props;
  const [task, setTask] = useState('')

  return (
    <div>
      <input
        type="text" 
        placeholder='Digite a tarefa'
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => add(task)}>Adicionar tarefa</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  add: (e) => dispatch(addAssignment(e))
})

export default connect(null, mapDispatchToProps)(InputList)
