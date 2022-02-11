import React from 'react'
import { connect } from 'react-redux';

function List(props) {
  const { list } = props;
  return (
    <div>
      {list.map(task => (<p>{task}</p>))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.listReducer
})

export default connect(mapStateToProps)(List);
