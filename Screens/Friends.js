import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../Components/Card';
import Search from '../Components/Search';
import TopHeader from '../Components/TopHeader';
import bdd from "../Assets/Data/bdd.json";


function Friends({ navigation }) {
    return (
        <View>
            <TopHeader/>
            <ScrollView>
                <View style={styles.main_container}>
                    <View style={styles.title_container}>
                        <Text style={styles.title_text}>Vos amis</Text>
                        <Search placeholder="Rechercher une personne"/>
                    </View>
                    <View>
                    {bdd.map(m => (
                        <View key={m.id} style={{width: 350, height: 100}}>
                            <Card profile={m} navigation={navigation}/>
                        </View>
                    ))}
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    main_container: {
        alignItems: "center",
    },

    title_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    title_text: {
        fontFamily: "ScopeOne",
        fontSize: 25,
        textDecorationLine: "underline",
        marginBottom: 10,
    },

})

export default Friends