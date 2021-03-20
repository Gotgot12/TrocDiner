import React from 'react';
import BottomTabNav from './Views/BottomTabNav';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'ScopeOne' : require('./assets/fonts/Scope_One/ScopeOne.ttf'),
    'DancingScript' : require('./assets/fonts/Dancing_Script/DancingScript.ttf'),
    'OpenSans' : require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'OpenSansLight' : require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
    'OpenSansBold' : require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    'OpenSansItalic' : require('./assets/fonts/Open_Sans/OpenSans-Italic.ttf'),

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <BottomTabNav/>;
}
