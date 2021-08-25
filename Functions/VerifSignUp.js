import React from 'react';
import { Text } from 'react-native';
import useFetchPost from './useFetchPost';

function VerifSignUp({ route, navigation }) {
  const { signup } = route.params;

  const connexion = useFetchPost(signup, 'http://localhost:8000/api/users');

  if (connexion === false) {
    navigation.navigate('SignUp');
  } else {
    const login = {
      email: signup.email,
      password: signup.password,
    };

    navigation.navigate('VerifLogIn', { login });
  }

  return <Text>Chargement....</Text>;
}

export default VerifSignUp;
