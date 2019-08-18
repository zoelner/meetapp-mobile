import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import App from './App';

export default function Root() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#22202C" />
      <App />
    </Fragment>
  );
}
