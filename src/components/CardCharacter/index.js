import React from 'react';
import RoundedButton from '../Button';
import ImageCharacter from '../ImageCharacter';
import { Card, CardInfo, Title } from './styles';

export const CardCharacter = ({ item, goToDetail }) => {
  return (
    <Card>
      <ImageCharacter
        uri={`${item.thumbnail.path}.${item.thumbnail.extension}`}
      />
      <CardInfo>
        <Title>{item.name}</Title>

        <RoundedButton
          title="Details"
          fontSize={16}
          onPress={() => goToDetail(item)}
        />
      </CardInfo>
    </Card>
  );
};
