import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 110px;
  background: rgba(113, 89, 193, 0.2);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#7159c1',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #7159c1;
`;
