import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import LogIn from '../Screens/LogIn';
import SideNav from './SideNav';

const Stack = createStackNavigator();

function NavigationLogSign() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" headerMode="none">
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SideNav" component={SideNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationLogSign;
