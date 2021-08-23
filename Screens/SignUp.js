import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import TopHeader from '../Components/TopHeaderLogSign';


function SignUp({ navigation }) {
    const [email, setEmail] = useState('horty@gmail.com');
    const [mdp, setMdp] = useState('test');
    const [confMdp, setConfMdp] = useState('test');

    const signup = {
        email: email,
        password: mdp,
        prenom: "prenom",
        nom: "nom",
        adresse: "adresse",
        dateNaissance: "2021-08-03T10:54:55.054Z"
    }

    function inscription(signup) {
        if (mdp === confMdp) {
            navigation.navigate('VerifSignUp', { signup: signup})
        }
    }


    return (
        <View style={styles.main_container}>
            <TopHeader />
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Inscription</Text>
            </View>

                <View style={{flex: 3}}>
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

                    <View style={styles.form_container}>
                        <Text style={styles.form_text}>Confirmation du mot de passe</Text>
                        <TextInput style={styles.form_input} placeholder="Confirmez le !"
                                onChangeText={confMdp => setConfMdp(confMdp)} defaultValue={confMdp}
                                secureTextEntry={true}/>
                    </View>
                    
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <TouchableHighlight style={styles.touchableHome_container} activeOpacity={0.6} underlayColor='#1A4301' onPress={() => inscription(signup)}>
                            <Text style={styles.touchableHome_text}>S'INSCRIRE</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            


            <View style={styles.description_container}>
                <Text style={styles.description_text}>Vous allez pouvoir renseigner plus d'informations dans votre profil pas d'inquiétude !</Text>
                <TouchableOpacity style={styles.touchableLog_container} onPress={() => navigation.navigate('LogIn')}>
                    <Text style={styles.touchableLog_text}>Vous avez déjà un compte ? Venez par là !</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
    },

    title_container: {
        flex: 0.8,
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
        flex: 0.8,
        width: '50%',
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
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 15,
    },

    description_text: {
        textAlign: 'center',
        fontFamily: 'OpenSansItalic',
        fontSize: 12,
    },

    touchableLog_container: {

    },

    touchableLog_text: {
        fontFamily: 'OpenSansItalic',
        fontSize: 14,
        textDecorationLine: 'underline',
    }

})

export default SignUp