import React from 'react';
import { useSelector } from 'react-redux';
import '~/config/ReactotronConfig';

import createRouter from './routes';

function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}

export default App;
