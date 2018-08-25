import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './modules/Login';
import ScanPage from './modules/ScanPage';

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  ScanPage: {
    screen: ScanPage,
  }}, {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fc0',
      },
      headerTintColor: '#d40511',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
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