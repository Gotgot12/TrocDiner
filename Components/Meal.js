import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import bdd from "../Assets/Data/bdd.json";
import Token from "../Components/Token"
import Search from "../Components/Search"

function Meal({ navigation }) {
    return (
        <ScrollView>
            <View style={{marginTop: 10}}>
                <Token/>
                <Search placeholder="Recherche de plat"/>
                <View style={{marginTop: 5, alignItems: 'center'}}>
                    <Text style={{fontFamily: 'ScopeOne', fontSize: 25}}>Les meilleurs plats !</Text>
                </View>
            </View>
            <View style={styles.main_container}>
            {bdd.map(m => (
                <View style={styles.eachMeal} key={m.ID}>
                    <TouchableOpacity style={styles.account_container} 
                    onPress={ () => navigation.navigate('Profile', {prenom: m.Prenom, nom: m.Nom, adresse: m.Adresse,
                                                        dateNaissance: m.DateNaissance, email: m.Email, note: m.Notes, plat: m.Plat,
                                                        dateLiv: m.DateLivraison, part: m.Part, details: m.DetailsCommande }) }>
                        <Icon name="account" size={35} color="black" />
                        <Text style={styles.account_text}>{m.Prenom}</Text>
                    </TouchableOpacity>
                    <View style={styles.descriptionMeal_container}>
                        <Text style={styles.descriptionMeal_text}>{m.Plat}</Text>
                        <Text style={styles.descriptionMeal_text}>{m.Part} {(m.Part > 1) ? 'parts' : 'part'}</Text>
                        <Text style={styles.descriptionMeal_text}>{m.DateLivraison.split(" ")[0]}</Text>
                    </View>
                    <View style={styles.button_container}>
                        <Button title="Commander" color="#008037" 
                        onPress={ () => navigation.navigate('Request', {prenom: m.Prenom, nom: m.Nom, adresse: m.Adresse, note: m.Notes,
                                                            plat: m.Plat, dateLiv: m.DateLivraison, part: m.Part, details: m.DetailsCommande}) }/>
                    </View>
                </View>
            ))}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create ({
    main_container: {
        marginLeft: 10,
        marginRight: 10
    },

    eachMeal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1.5,
        borderColor: '#008037',
        marginTop: 10,
        marginBottom: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },

    account_container: {
        flexDirection: 'column',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -5
    },

    account_text: {
        fontFamily: 'ScopeOne',
        fontSize: 13,
    },

    descriptionMeal_container: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    descriptionMeal_text: {
        fontFamily: 'ScopeOne',
        fontSize: 16
    },

    button_container: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 5
    }
})

export default Meal