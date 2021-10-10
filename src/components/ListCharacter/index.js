import React from 'react';
import { FlatList } from 'react-native';
import useCharacters from '../../hooks/useCharacters';
import { CardCharacter } from '../CardCharacter';
import FooterList from '../FooterList';
import { Container } from './styles';

const ListCharacter = ({ characters, goToDetail }) => {
  const { listNextPageCharactesAPI, loading } = useCharacters();

  const loadNextPage = () => {
    if (!loading) {
      listNextPageCharactesAPI();
    }
  };

  return (
    <Container>
      <FlatList
        style={{ flex: 1 }}
        data={characters}
        renderItem={({ item }) => CardCharacter({ item, goToDetail })}
        keyExtractor={(item) => String(item.id)}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
      />
    </Container>
  );
};

export default ListCharacter;
