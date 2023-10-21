
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Nav from './Nav';
import { Provider } from 'react-redux';
import store from './store';



const App = () => {

  return (
    <Provider store={store}>
    <Nav />
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 32,
    // paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
