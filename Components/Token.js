import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

class Token extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.text}>
                    Vos jetons: 1000
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 0.7,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 20,
    },

    text: {
        fontFamily: 'ScopeOne',
        fontSize: 16,
    }
})

export default Token