import React, { useEffect, useState } from 'react';

import CharacterContext from './characterContext';
import requestApi from '../services/Api';

function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [filteredByName, setFilteredByName] = useState([]);
  const [selectedChar, setSelectedChar] = useState({});

  useEffect(() => {
    async function getChar() {
      const char = await requestApi();
      setCharacters(char);
    }
    getChar();
  }, []);

  useEffect(() => {}, []);

  const value = {
    characters,
    selectedChar,
    setSelectedChar,
  };
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterProvider;
