import React from 'react';
import { Text } from 'react-native';
import FetchPost from './FetchPost';

function VerifSignUp({ route, navigation }) {
  const { signup } = route.params;

  const connexion = FetchPost(signup, 'http://localhost:8000/api/users');

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
