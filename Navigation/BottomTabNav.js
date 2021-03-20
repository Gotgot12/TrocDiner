import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from './Chat.js';
import Friends from './Friends.js';
import Add from './Add.js';
import Notifications from './Notifications.js';
import Home from './Home.js'


const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: '#1A4301',
              style: {backgroundColor: '#008037'},
              labelStyle: {fontSize: 12},
          }}
      > 
        <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size}/>
            ), }} 
        />

        <Tab.Screen name="Chat" component={Chat} options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ), }}
        />

        <Tab.Screen name="Add" component={Add} options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle" color={color} size={2*size} style={{marginBottom: -12}} />
            ), }}
        />

        <Tab.Screen name="Friends" component={Friends} options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={size} />
            ), }}
        />
        
        <Tab.Screen name="Notifications" component={Notifications} options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3, }}
        />        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNav