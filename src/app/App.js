import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './modules/Login';
import ScanPage from './modules/ScanPage';
import Home from './modules/Home';
import FactoryProductArrive from './modules/FactoryProductArrive';

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  ScanPage: {
    screen: ScanPage,
  },
  Home: {
    screen: Home,
  },
  FactoryProductArrive: {
    screen: FactoryProductArrive,
  },
  }, {
    // initialRouteName: 'Login',
    initialRouteName: 'FactoryProductArrive',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fc0',
      },
      headerTintColor: '#d40511',
      headerTitleStyle: {
        fontWeight: 'bold',
        // flex: 1,
        textAlign:'center',
      },
    }
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}