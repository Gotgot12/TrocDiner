import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import TopHeader from '../Components/TopHeaderLogSign';

function LogIn ({ navigation }) {
    return (
        <View style={styles.main_container}>
            <TopHeader/>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Connexion</Text>
            </View>
            <View style={styles.form_container}>
                <Text style={styles.form_text}>E-Mail</Text>
                <TextInput style={styles.form_input} placeholder="Adresse email ISEP"/>
            </View>
            <View style={styles.form_container}>
                <Text style={styles.form_text}>Mot de passe</Text>
                <TextInput style={styles.form_input} placeholder="Votre plus beau mot de passe"/>
            </View>
            <View style={styles.button_container}>
                <Button title="Se connecter" color="#008037" />
            </View>
            <View style={styles.description_container}>
                <TouchableOpacity style={styles.touchable_container}  onPress={ () => navigation.navigate('SignUp') }>
                    <Text style={styles.touchable_text}>Pour vous inscrire c'est par ici !</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
    },

    title_container: {
        flex: 1,
        justifyContent: 'center',
    },

    title_text: {
        fontFamily: "ScopeOne",
        fontSize: 25,
        textDecorationLine: "underline",
    },
    
    form_container: {
        flex: 1,
        alignItems: "center",
    },

    form_text: {
        fontFamily: "ScopeOne",
        fontSize: 18,
    },

    form_input: {
        fontFamily: "OpenSansLight",
        width: 200,
        height: 40,
        backgroundColor: '#008037',
        paddingLeft: 10,
        borderRadius: 5,
    },

    button_container: {
        flex: 1,
        justifyContent: 'center',
    },

    description_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 15,
    },

    touchable_container: {

    },

    touchable_text: {
        fontFamily: 'OpenSansItalic',
        fontSize: 14,
        textDecorationLine: 'underline',
    }
})

export default LogIn