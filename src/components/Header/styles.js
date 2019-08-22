import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #22202c;
`;

export const Logo = styled(Image)`
  width: 24px;
  height: 24px;
`;
