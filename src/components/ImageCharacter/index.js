import React from 'react';
import { Image } from 'react-native';
import { Container, ImageHero } from './styles';

const ImageCharacter = ({ uri }) => {
  return (
    <Container>
      <ImageHero
        source={{
          uri,
        }}
      />
    </Container>
  );
};

export default ImageCharacter;
