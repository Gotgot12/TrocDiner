import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
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
                <View style={styles.eachMeal} key={m.id}>
                    <TouchableOpacity style={styles.account_container} 
                    onPress={ () => navigation.navigate('Profile', {profile: m}) }>
                        <Icon name="account" size={35} color="black" />
                        <Text style={styles.account_text}>{m.prenom}</Text>
                    </TouchableOpacity>
                    <View style={styles.descriptionMeal_container}>
                        <Text style={styles.descriptionMeal_text}>{m.plat}</Text>
                        <Text style={styles.descriptionMeal_text}>{m.part} {(m.part > 1) ? 'parts' : 'part'}</Text>
                        <Text style={styles.descriptionMeal_text}>{m.dateLivraison.split(" ")[0].split("-")[2] + "/" + m.dateLivraison.split(" ")[0].split("-")[1] + "/" + m.dateLivraison.split(" ")[0].split("-")[0]}</Text>
                    </View>
                    <TouchableHighlight activeOpacity={0.6} underlayColor='#1A4301' style={styles.button_container} onPress={ () => navigation.navigate('Request', {profile: m}) }>
                        <Text style={styles.button_text}>COMMANDER</Text>
                    </TouchableHighlight>
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
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        backgroundColor: '#008037',
        borderRadius: 7,
    },

    button_text: {
        color: 'white',
        fontFamily: 'ScopeOne',
        fontSize: 16
    }
})

export default Meal