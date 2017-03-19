import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import store from '../store/store.js';
import scenes from './scenes.js'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}
