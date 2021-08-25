import React, { useContext } from 'react';
import { Text } from 'react-native';
import useFetchPost from './useFetchPost';
import { TokenContext } from '../Navigation/SideNav';

function AddMeal({ route, navigation }) {
  const { commande } = route.params;
  const token = useContext(TokenContext);

  useFetchPost(commande, 'http://127.0.0.1:8000/api/commandes', token);

  navigation.navigate('Meal');
  return <Text>Chargement.......</Text>;
}

export default AddMeal;
