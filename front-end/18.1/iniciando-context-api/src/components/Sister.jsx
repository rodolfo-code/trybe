import React from 'react';
import CountContext from '../context/CountContext';
import Child from './Child';

function Sister() {
  return (
    <CountContext.Consumer>
      {(context) => (
        <>
          <h1>Brother</h1>
          <h2>{context.count}</h2>
          <Child />
        </>
      )}
    </CountContext.Consumer>
  );
}

export default Sister;
