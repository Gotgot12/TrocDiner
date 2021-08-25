import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Request from '../Screens/Request';
import Profile from '../Screens/Profile';
import Meal from '../Components/Meal';

const Stack = createStackNavigator();

function RequestNav() {
  return (
    <Stack.Navigator initialRouteName="Meal" headerMode="none">
      <Stack.Screen name="Meal" component={Meal} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Request" component={Request} />
    </Stack.Navigator>
  );
}

export default RequestNav;
