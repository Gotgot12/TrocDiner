// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Icon name="search-outline" size={15} color="#008037"/>
                <TextInput style={styles.textinput} placeholder={this.props.placeholder}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    textinput: {
        height: 30,
        width: 180,
        borderColor: '#000000',
        borderWidth: 1, 
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: '#008037',
        marginLeft: 5,
        paddingRight: 5,
    }
})

export default Search