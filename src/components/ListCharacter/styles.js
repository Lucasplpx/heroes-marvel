import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  height: ${height - 160}px;
  /* background: blue; */
  width: 90%;
`;
