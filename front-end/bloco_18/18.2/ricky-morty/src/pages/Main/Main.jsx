import React, { useContext, useEffect, useState } from 'react';
import './main.css';

import CharacterCard from '../../components/card/CharacterCard';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CharacterContext from '../../contextApi/characterContext';

function Main() {
  const { characters, setSelectedChar } = useContext(CharacterContext);
  const [inputName, setInputName] = useState('');

  console.log(inputName);

  // useEffect(() => {}, []);

  return (
    <>
      <Header setInputName={setInputName} inputName={inputName} />
      <div className="card-container">
        {!characters ? (
          <Loading />
        ) : (
          characters.map((char, i) => <CharacterCard key={i} {...char} />)
        )}
      </div>
    </>
  );
}

export default Main;
