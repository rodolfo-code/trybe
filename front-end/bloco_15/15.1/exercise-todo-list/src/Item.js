import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, selectTodo } = props
  return (
    <div className="Item" onClick={() => selectTodo(content)} >
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
