import React from 'react';
import CountContext from '../context/CountContext';

function Child() {
  return (
    <CountContext.Consumer>
      {({ count, sumClick }) => (
        <>
          <h1>FILHO</h1>
          <h2>{count}</h2>
          <button onClick={() => sumClick()}>CLICAAAAA</button>
        </>
      )}
    </CountContext.Consumer>
  );
}

export default Child;
