import React, { useContext, useEffect, useState } from 'react';
import './main.css';

import CharacterCard from '../../components/card/CharacterCard';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CharacterContext from '../../contextApi/characterContext';

function Main() {
  const { characters, setSelectedChar } = useContext(CharacterContext);
  const [inputName, setInputName] = useState('');
  const [filteredChar, setFilteredChar] = useState([]);

  console.log(inputName);
  console.log(filteredChar);

  useEffect(() => {
    const filtered = characters.filter((char) => char.name.includes(inputName));
    setFilteredChar(filtered);
  }, [characters, inputName]);

  return (
    <>
      <Header setInputName={setInputName} />
      <div className="card-container">
        {!filteredChar ? (
          <Loading />
        ) : (
          filteredChar.map((char, i) => <CharacterCard key={i} {...char} />)
        )}
      </div>
    </>
  );
}

export default Main;
