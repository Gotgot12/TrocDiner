import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from './Chat.js';
import Friends from './Friends.js';
import Add from './Add.js';
import Notifications from './Notifications.js';
import Settings from './Settings.js';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Chat"
        tabBarOptions={{
            activeTintColor: '#e91e63',
            inactiveTintColor: 'blue',
            activeBackgroundColor: 'white',
            style: {backgroundColor: 'green'},
            labelStyle: {fontSize: 12}
        }}
    >
      <Tab.Screen name="Chat" component={Chat} options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ), }} 
      />

      <Tab.Screen name="Friends" component={Friends} options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ), }}
      />

      <Tab.Screen name="Add" component={Add} options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-thick" color={color} size={1.5*size} />
          ), }}
      />

      <Tab.Screen name="Notifications" component={Notifications} options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3, }}
      />

      <Tab.Screen name="Settings" component={Settings} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ), }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs