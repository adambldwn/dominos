import React from 'react';
import { SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import { store } from './src/redux/store/store';
import {Router} from './src/Router'

export const App = () => {
  return(
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>

      <Router/>
    </SafeAreaView>
    </Provider>
  )
}