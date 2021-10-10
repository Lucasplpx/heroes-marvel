import React from 'react';
import { RoundedTouchableOpacity, TextButton } from './styles';

const RoundedButton = ({ onPress, title, fontSize, ...rest }) => {
  return (
    <RoundedTouchableOpacity {...rest} onPress={onPress}>
      <TextButton size={fontSize}>{title}</TextButton>
    </RoundedTouchableOpacity>
  );
};

export default RoundedButton;
