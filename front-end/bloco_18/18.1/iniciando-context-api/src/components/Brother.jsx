import React from 'react';
import CountContext from '../context/CountContext';

function Brother() {
  return (
    <CountContext.Consumer>
      {({ count, sumClick }) => (
        <>
          <h1>Brother</h1>
          <h2>{count}</h2>
          <button onClick={() => sumClick()}>Mais</button>
        </>
      )}
    </CountContext.Consumer>
  );
}

export default Brother;
