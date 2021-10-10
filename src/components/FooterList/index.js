import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const FooterList = ({ load }) => {
  if (!load) return null;

  return (
    <Container>
      <ActivityIndicator size={35} color="#7159c1" />
    </Container>
  );
};

export default FooterList;
