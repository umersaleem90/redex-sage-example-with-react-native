/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import ImageGrid from './src/components/ImageGrid';
import configureStore  from "./src/store";

const store = configureStore();

const App = () => {
  return(
    <Provider store = {store}>
      <ImageGrid />
    </Provider>
  )
};

export default App;
