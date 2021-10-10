import styled from 'styled-components/native';

export const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 50px;
  border-radius: 30px;
  width: 100px;

  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: ${(props) => `${props.size}px` || '16px'};
`;
