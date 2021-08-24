import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import LogIn from '../Screens/LogIn';
import SideNav from './SideNav';
import VerifLogIn from '../Functions/VerifLogIn';
import VerifSignUp from '../Functions/VerifSignUp';

const Stack = createStackNavigator();

function NavigationLogSign() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" headerMode="none">
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SideNav" component={SideNav} />
        <Stack.Screen name="VerifLogIn" component={VerifLogIn} />
        <Stack.Screen name="VerifSignUp" component={VerifSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationLogSign;
