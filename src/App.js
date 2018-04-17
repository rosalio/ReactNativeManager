import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB92bgCDdhqz-SqOKDfjzidlRCGH2meuQI',
      authDomain: 'manager-4a657.firebaseapp.com',
      databaseURL: 'https://manager-4a657.firebaseio.com',
      projectId: 'manager-4a657',
      storageBucket: 'manager-4a657.appspot.com',
      messagingSenderId: '227856630665'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
