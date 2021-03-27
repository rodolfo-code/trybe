import React, { useContext } from 'react';
import './main.css';

import CharacterCard from '../../components/card/CharacterCard';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CharacterContext from '../../contextApi/characterContext';
import { Badge } from 'react-bootstrap';

function Main() {
  const { characters, setSelectedChar } = useContext(CharacterContext);

  function handleSelectChar({ target: name }) {
    setSelectedChar(name);
  }

  return (
    <>
      <Header />
      <div className="card-container">
        {!characters ? (
          <Loading />
        ) : (
          characters.map((char, i) => (
            <CharacterCard key={i} {...char} onChange={handleSelectChar} />
          ))
        )}
      </div>
    </>
  );
}

export default Main;
