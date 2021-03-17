import React from 'react';
import Search from './Components/Search'
import MyTabs from './Views/BottomTabNav'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
