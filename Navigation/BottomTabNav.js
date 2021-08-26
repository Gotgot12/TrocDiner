import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from '../Screens/Chat';
import Friends from '../Screens/Friends';
import Add from '../Screens/Add';
import Notifications from '../Screens/Notifications';
import Home from '../Screens/Home';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#1A4301',
        style: { backgroundColor: '#008037' },
        labelStyle: { fontSize: 11, fontFamily: 'OpenSans' },
        labelPosition: 'below-icon',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: function Icon({ color, size }) {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: function Icon({ color, size }) {
            return (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: '',
          tabBarIcon: function Icon({ color, size }) {
            return (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={2 * size}
                style={{ marginBottom: -12 }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: function Icon({ color, size }) {
            return (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: function Icon({ color, size }) {
            return (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            );
          },
          tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: function Icon({ color, size }) {
            return (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
