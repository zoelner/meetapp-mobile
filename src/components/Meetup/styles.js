import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  height: 150px;
  resize-mode: cover;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Info = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 11px;
`;

export const DateTime = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 5px;
`;

export const Location = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 5px;
`;

export const Organizer = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 5px;
`;

export const ActionButton = styled(Button)`
  margin-top: 16px;
`;
