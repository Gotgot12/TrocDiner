import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './BottomTabNav';
import History from '../Screens/History';
import Settings from '../Screens/Settings';

const Side = createDrawerNavigator();

function SideNav() {
  return (
    <NavigationContainer>
      <Side.Navigator initialRouteName="Home">
        <Side.Screen name="Home" component={BottomTabNav} />
        <Side.Screen name="Historique de vos plats" component={History} />
        <Side.Screen name="Paramètres" component={Settings} />
      </Side.Navigator>
    </NavigationContainer>
  );
}

export default SideNav;
