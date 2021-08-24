import React from 'react';
import { Text } from 'react-native';
import FetchPost from './FetchPost';

function VerifLogIn({ route, navigation }) {
  const { login } = route.params;
  const token = FetchPost(login);

  if (token === false) {
    navigation.navigate('LogIn');
  } else {
    navigation.navigate('SideNav', { token });
  }

  return <Text>Chargement.......</Text>;
}

export default VerifLogIn;
