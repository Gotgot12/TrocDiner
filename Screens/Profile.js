import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


function Profile ({ route }) {
    const { prenom, nom, adresse, dateNaissance, email, note, plat, dateLiv, part, details } = route.params;
    const dateSplit = dateLiv.split(" "); 
    return (
        <View style={styles.main_container}>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Profil de l'utilisateur</Text>
            </View>
            <View style={styles.infoUser_container}>
                <View style={styles.infoPerso_container}>
                    <Icon name="account" size={35} color="black" />
                    <Text style={styles.infoPerso_text}>{prenom} {nom}</Text>
                    <Text style={styles.infoPerso_text}>Date de naissance : {dateNaissance}</Text>
                    <Text style={styles.infoPerso_text}>Adresse : {adresse}</Text>
                    <Text style={styles.infoPerso_text}>E-Mail : {email}</Text>
                    <Text style={styles.infoPerso_text}>Moyenne de ses notes : {note}</Text>
                </View>
                <View style={styles.histoInfoPlat_container}>
                    <Text style={styles.histo_text}>Historique des plats :</Text>
                    <ScrollView>
                        <View style={styles.infoPlat_container}>
                            <Text style={styles.infoPerso_text}>{plat}</Text>
                            <Text style={styles.infoPerso_text}>Le {dateSplit[0].split("-")[2] + "/" + dateSplit[0].split("-")[1] + "/" + dateSplit[0].split("-")[0]} à {dateSplit[1].split(":")[0] + "h" + dateSplit[1].split(":")[1]}</Text>
                            <Text style={styles.infoPerso_text}>{part} {(part > 1) ? 'parts' : 'part'}</Text>
                            <Text style={[styles.infoPerso_text,{textAlign: 'center'}]}>Détails du plat : {details}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
    },

    title_container: {
        flex: 1,
        marginTop: 10,
    },

    title_text: {
        fontFamily: "ScopeOne",
        fontSize: 25,
        textDecorationLine: "underline",
    },

    infoUser_container: {
        flex: 10,
    },

    infoPerso_container: {
        flex: 1.1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#008037',
        marginLeft: 20,
        marginRight: 20,
    },

    infoPerso_text: {
        fontFamily: 'ScopeOne',
        fontSize: 17
    },

    histoInfoPlat_container: {
        flex: 2,
        alignItems: 'center',
        marginTop: 10,
    },

    histo_text: {
        fontFamily: 'ScopeOne',
        fontSize: 21,
    },

    infoPlat_container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#008037',
        marginTop: 3,
        paddingTop: 5,
        paddingRight: 3,
        paddingLeft: 3,
        paddingBottom: 5,
        marginLeft: 15,
        marginRight: 15,
    }

})

export default Profile