import React from 'react';

import logo from '~/assets/images/logo.png';
import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
