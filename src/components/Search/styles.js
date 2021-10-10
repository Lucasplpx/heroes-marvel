import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.7}px;
  height: 60px;
  background: rgba(113, 89, 193, 0.2);
  border-radius: 30px;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#7159c1',
})`
  flex: 1;
  font-size: 20px;
  color: #7159c1;
  margin-right: 60px;
  margin-left: 10px;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: #7159c1;
  position: absolute;
  right: 0;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  color: #fff;
  font-size: 20px;
`;
