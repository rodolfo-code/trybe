import React from 'react';

function consoleString() {
  console.log('React é lindo')
}
function console2() {
  console.log('React é maravilhoso')
}

class ManyButtons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={consoleString}>Clique</button>
        <button onMouseOver={console2}>Coloque o mouse sobre</button>
      </div>
    )
  }
}

export default ManyButtons;
