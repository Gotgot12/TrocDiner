import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../Components/Card';
import Counter from '../Components/Counter';


function Request ({ route, navigation }) {
    const { prenom, nom, adresse, note, plat, dateLiv, part, details } = route.params;
    const dateSplit = dateLiv.split(" "); 
    return (
        <View style={styles.main_container}>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Votre commande</Text>
                <Text style={styles.token_text}>Petit rappel: Vous avez ... jetons</Text>
            </View>
            <Card prenom={prenom} nom={nom} adresse={adresse} note={note}/>
            <View style={styles.recap_container}>
                <View style={styles.infos_container}>
                    <Text style={styles.infos_text}>{plat}</Text>
                    <View style={styles.dateLiv}>
                        <Text style={styles.infos_text}>{dateSplit[0].split("-")[2] + "/" + dateSplit[0].split("-")[1] + "/" + dateSplit[0].split("-")[0]}</Text>
                        <Text style={styles.infos_text}>{dateSplit[1].split(":")[0] + ":" + dateSplit[1].split(":")[1]}</Text>
                    </View>
                </View>
                <Counter part={part}/>
                <View>
                    <Button title="Commander" color="#008037" />
                </View>
            </View>
            <View style={styles.details_container}>
                <Text style={styles.titledetails_text}>Détails de la commande :</Text>
                <Text style={styles.lorem_text}>{details}</Text>
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
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },

    title_text: {
        fontFamily: "ScopeOne",
        fontSize: 25,
        textDecorationLine: "underline",
    },

    token_text: {
        fontFamily: 'OpenSansItalic',
        fontSize: 15,
    },

    recap_container: {
        flex: 3,
        width: 300,
        borderWidth: 1,
        borderColor: '#008037',
    },

    infos_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },

    infos_text: {
        fontFamily: 'ScopeOne',
        fontSize: 20,
    },

    dateLiv: {
        alignItems: 'center',
    },

    part_container: {
        flex: 1,
        alignItems: 'center',
    },

    details_container: {
        flex: 1.5,
        alignItems: 'center',
    },

    titledetails_text: {
        fontFamily: 'ScopeOne',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
    },

    lorem_text: {
        fontFamily: 'OpenSansItalic',
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
    }
})

export default Request