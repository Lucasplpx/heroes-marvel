import React, { useState } from 'react';
import useCharacters from '../../hooks/useCharacters';
import { BoxButtonSearch, Container, Input, SearchIcon } from './styles';

const Search = () => {
  const [nameHero, setNameHero] = useState('');
  const { filterCharacterByName } = useCharacters();

  const handleSearch = () => {
    if (nameHero.length >= 3) {
      filterCharacterByName(nameHero);
    }
    setNameHero('');
  };

  return (
    <Container>
      <Input
        placeholder="Search Hero"
        value={nameHero}
        onChangeText={(value) => setNameHero(value)}
      />
      <BoxButtonSearch onPress={handleSearch}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
};

export default Search;
