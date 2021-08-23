import React from 'react'
import FetchPost from './FetchPost'
import { Text } from 'react-native';

function VerifSignUp({ route, navigation }) {

    const { signup } = route.params;

    let connexion = FetchPost(signup, 'http://localhost:8000/api/users')

    if (connexion === false) {
        navigation.navigate('SignUp')
    }
    else {
        const login = {
            email: signup.email,
            password: signup.password
        }

        navigation.navigate('VerifLogIn', {login: login})
    }

    return (
        <Text>Chargement....</Text>
    )
}


export default VerifSignUp