import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { AreaView } from '../../components/AreaView';
import Search from '../../components/Search';
import ListCharacter from '../../components/ListCharacter';
import useCharacters from '../../hooks/useCharacters';

export const Home = () => {
  const { navigate } = useNavigation();
  const { listCharactesAPI, characters } = useCharacters();

  const goToDetail = (item) => {
    navigate('Details', item);
  };

  useEffect(() => {
    listCharactesAPI();
  }, []);

  return (
    <AreaView>
      <Search />

      {characters.length > 0 && (
        <ListCharacter characters={characters} goToDetail={goToDetail} />
      )}
    </AreaView>
  );
};
