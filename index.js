import React, {useState, useEffect} from 'react';
import {AppRegistry, LogBox, Text} from 'react-native';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import AppContainer from './src/navigation/RootNavigation';
import {name as appName} from './app.json';
import reducers from './src/reducers';
import rootSaga from './src/sagas';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigation';
import {enableScreens} from 'react-native-screens';

enableScreens();

const sagaMiddleware = createSagaMiddleware({
  onError(error) {
    console.log(error);
  },
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

LogBox.ignoreAllLogs(true);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
          <AppContainer />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
