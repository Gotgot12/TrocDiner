// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Recherche de plat"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30,
    },

    textinput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50, 
        borderColor: '#000000',
        borderWidth: 1, 
        paddingLeft: 5
    }
})

export default Search