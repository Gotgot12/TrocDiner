import React from 'react'
import { Text } from 'react-native';
import FetchPost from './FetchPost'
import { token } from '../Navigation/SideNav'



function AddMeal({route, navigation}) {

    let { commande } = route.params;

    FetchPost(commande, 'http://127.0.0.1:8000/api/commandes', token)

    navigation.navigate("Meal")
    return (
        <Text>Chargement.......</Text>
    )

}

export default AddMeal