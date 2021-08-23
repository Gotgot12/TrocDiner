import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNav from './BottomTabNav.js';
import History from '../Screens/History'
import Settings from '../Screens/Settings.js';

const Side = createDrawerNavigator();

let token = ""

function SideNav({ route }) {
    token = route.params.token.token;

    return (
        <Side.Navigator initialRouteName="Home">
            <Side.Screen name="Home" component={BottomTabNav}/>
            <Side.Screen name="Historique de vos plats" component={History}/>
            <Side.Screen name="Paramètres" component={Settings}/>
        </Side.Navigator>
    )
}

export { token };
export default SideNav;

