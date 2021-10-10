import React, { useEffect, useState } from 'react';

import ImageCharacter from '../../components/ImageCharacter';

import { Container } from './styles';
import { AreaView } from '../../components/AreaView';
import Form from '../../components/Form';
import ListItem from '../../components/ListItem';

import { ScrollView } from 'react-native';

export const Details = ({ route, navigation }) => {
  const [character, setCharacter] = useState({
    thumbnail: { path: '', extension: '' },
  });

  useEffect(() => {
    setCharacter(route.params);
  }, [route]);

  function handleGoBackPage() {
    navigation.goBack();
  }

  return (
    <AreaView>
      <Container>
        <ImageCharacter
          uri={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        />
        {character && (
          <>
            <Form
              character={route.params}
              handleGoBackPage={handleGoBackPage}
            />
            <ScrollView style={{ marginVertical: 10 }}>
              {character?.comics?.items.length > 0 && (
                <ListItem title="Comics" item={character?.comics?.items} />
              )}

              {character?.comics?.items.length > 0 && (
                <ListItem title="Series" item={character?.comics?.items} />
              )}

              {character?.comics?.items.length > 0 && (
                <ListItem title="Stories" item={character?.comics?.items} />
              )}
            </ScrollView>
          </>
        )}
      </Container>
    </AreaView>
  );
};
