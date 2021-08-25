import React, { useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { UserContext, UserProvider } from './Screens/UserProvider';
import NavigationLogSign from './Navigation/NavigationLogSign';
import SideNav from './Navigation/SideNav';

export default function App() {
  const [fontsLoaded] = useFonts({
    ScopeOne: require('./Assets/fonts/Scope_One/ScopeOne.ttf'),
    DancingScript: require('./Assets/fonts/Dancing_Script/DancingScript.ttf'),
    OpenSans: require('./Assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    OpenSansLight: require('./Assets/fonts/Open_Sans/OpenSans-Light.ttf'),
    OpenSansBold: require('./Assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    OpenSansItalic: require('./Assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Root = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return user ? <SideNav /> : <NavigationLogSign />;
  };

  return (
    <UserProvider>
      <Root />
    </UserProvider>
  );
}
