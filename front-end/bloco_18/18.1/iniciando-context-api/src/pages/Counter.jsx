import React, { Component, useState } from 'react';
import Brother from '../components/Brother';
import Sister from '../components/Sister';
import CountContext from '../context/CountContext';

function Counter() {
  const [count, setCount] = useState(0);

  const sumClick = () => {
    setCount(count + 10);
  };

  const contextValues = {
    count: count,
    sumClick: () => sumClick(),
  };

  return (
    <CountContext.Provider value={contextValues}>
      <Brother />
      <hr />
      <Sister />
      <button type="button" onClick={() => setCount(count + 1)}>
        Clique
      </button>
    </CountContext.Provider>
  );
}

export default Counter;

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 10,
//     };
//   }
//   render() {
//     return (
//       <CountContext.Provider value={{ ...this.state }}>
//         <Brother />
//         <hr />
//         <Sister />
//       </CountContext.Provider>
//     );
//   }
// }
