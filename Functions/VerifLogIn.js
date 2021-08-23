import React from 'react'
import FetchPost from './FetchPost'
import { Text } from 'react-native';

let token = ""

function VerifLogIn({ route, navigation }) {
    
    const { login } = route.params;
    token = FetchPost(login);

    if (token === false) {
        navigation.navigate('LogIn')
    }
    else {
        navigation.navigate('SideNav', {token: token})
    }
   
    return (
        <Text>Chargement.......</Text>
    )
}


export default VerifLogIn;
