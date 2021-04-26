import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import TopHeader from '../Components/TopHeaderLogSign';

function LogIn ({ navigation }) {
    const [email, setEmail] = useState('');
    const [mdp, setMdp] = useState('');

    return (
        <View style={styles.main_container}>
            <TopHeader/>
                
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Connexion</Text>
            </View>

            <View style={{flex: 2.5}}>
                <KeyboardAvoidingView behavior="padding">
                <View style={styles.form_container}>
                    <Text style={styles.form_text}>E-Mail</Text>
                    <TextInput style={styles.form_input} placeholder="Adresse email ISEP"
                            onChangeText={email => setEmail(email)} defaultValue={email}/>
                </View>

                <View style={styles.form_container}>
                    <Text style={styles.form_text}>Mot de passe</Text>
                    <TextInput style={styles.form_input} placeholder="Votre plus beau mot de passe"
                            onChangeText={mdp => setMdp(mdp)} defaultValue={mdp}
                            secureTextEntry={true}/>
                </View>

                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableHighlight style={styles.touchableHome_container} activeOpacity={0.6} underlayColor='#1A4301' onPress={() => navigation.navigate('BottomTabNav')}>
                        <Text style={styles.touchableHome_text}>SE CONNECTER</Text>
                    </TouchableHighlight>
                </View>
                </KeyboardAvoidingView>
            </View>

            <View style={styles.description_container}>
                <TouchableOpacity style={styles.touchableSign_container} onPress={ () => navigation.navigate('SignUp') }>
                    <Text style={styles.touchableSign_text}>Pour vous inscrire c'est par ici !</Text>
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
        color: 'white',
    },

    touchableHome_container: {
        flex: 0.6,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008037',
        borderRadius: 10,
    },

    touchableHome_text: {
        fontFamily: 'ScopeOne',
        color: 'white',
        fontSize: 16,
    },

    description_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 15,
    },

    touchableSign_container: {

    },

    touchableSign_text: {
        fontFamily: 'OpenSansItalic',
        fontSize: 14,
        textDecorationLine: 'underline',
    }
})

export default LogIn