import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, InputField } from './styles';

const InputArea = ({ icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={25} color="#7159c1" />
      <InputField {...rest} />
    </Container>
  );
};

export default InputArea;
