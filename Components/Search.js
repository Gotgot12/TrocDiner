// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Icon name="search-outline" size={15} color="#008037"/>
                <TextInput style={styles.textinput} placeholder="Recherche de plat"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    textinput: {
        height: 30,
        width: 200,
        borderColor: '#000000',
        borderWidth: 1, 
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: '#008037',
        marginLeft: 5,
    }
})

export default Search