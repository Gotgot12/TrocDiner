import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from '../Screens/SignUp';
import LogIn from '../Screens/LogIn';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

class NavigationLogSign extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp" headerMode="none">
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="LogIn" component={LogIn} />
                    <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default NavigationLogSign