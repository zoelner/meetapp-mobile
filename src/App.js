import React from 'react';

import '~/config/ReactotronConfig';

import createRouter from './routes';

function App() {
  const Routes = createRouter(false);

  return <Routes />;
}

export default App;
