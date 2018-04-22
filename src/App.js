import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
componentWillMount() {
  //api config
  const config = {
    apiKey: 'AIzaSyDOtAz0-Urms0hIyOTPAx8If_pwCqGgP1c',
    authDomain: 'manager-7aa65.firebaseapp.com',
    databaseURL: 'https://manager-7aa65.firebaseio.com',
    projectId: 'manager-7aa65',
    storageBucket: 'manager-7aa65.appspot.com',
    messagingSenderId: '478281341028'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}


export default App;