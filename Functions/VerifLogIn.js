import React from 'react';
import { Text } from 'react-native';
import useFetchPost from './useFetchPost';

function VerifLogIn({ route, navigation }) {
  const { login } = route.params;
  const token = useFetchPost(login);

  if (token === false) {
    navigation.navigate('LogIn');
  } else {
    navigation.navigate('SideNav', { token });
  }

  return <Text>Chargement.......</Text>;
}

export default VerifLogIn;
