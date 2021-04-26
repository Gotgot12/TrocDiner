import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Card ({profile, navigation}) {
    return (
        <TouchableOpacity style={styles.main_container} onPress = {() => navigation.navigate('Profile', {profile:profile})}>
            <View style={styles.account_container}>
                <Icon name="account" size={50} color="black" />
            </View>
            <View style={styles.text_container}>
                <View style={styles.info_container}>
                    <Text style={styles.names_text}>{profile.prenom} {profile.nom}</Text>
                    <Text style={styles.location_text}>{profile.adresse}</Text>
                </View>
                <Text style={styles.notes_text}>Moyenne de ses notes : {profile.notes}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 2,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#008037',
        alignItems: 'center',
        marginBottom : 15,
    },

    account_container: {
        flex: 1,
        alignItems: 'center',
    },

    text_container: {
        flex: 4,
        justifyContent: 'center',
        marginRight: 5,
    },

    info_container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap-reverse',
    },

    names_text: {
        flex: 2,
        fontFamily: 'ScopeOne',
        fontSize: 18,
        alignSelf: 'center'

    },

    location_text: {
        flex: 1.5,
        fontFamily: 'ScopeOne',
        fontSize: 14,
        textAlign: 'center'
    },
    
    notes_text: {
        flex: 2,
        fontFamily: 'ScopeOne',
        fontSize: 15,
    }
})

export default Card