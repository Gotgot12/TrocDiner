import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNav from './BottomTabNav';
import History from '../Screens/History';
import Settings from '../Screens/Settings';

const Side = createDrawerNavigator();

const TokenContext = React.createContext();

function SideNav({ route }) {
  const { token } = route.params.token;

  return (
    <TokenContext.Provider value={token}>
      <Side.Navigator initialRouteName="Home">
        <Side.Screen name="Home" component={BottomTabNav} />
        <Side.Screen name="Historique de vos plats" component={History} />
        <Side.Screen name="Paramètres" component={Settings} />
      </Side.Navigator>
    </TokenContext.Provider>
  );
}

export { TokenContext };
export default SideNav;
