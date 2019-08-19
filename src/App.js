import React from 'react';

// import { Container } from './styles';

import createRouter from './routes';

function App() {
  const Routes = createRouter(false);

  return <Routes />;
}

export default App;
