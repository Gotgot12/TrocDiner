import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class TopHeader extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', marginTop: 20, paddingBottom: 10, alignItems: 'flex-end', backgroundColor: '#008037'}}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Icon name="page-layout-sidebar-left" size={30} color='white'/>
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontFamily: 'OpenSansItalic', color: 'white'}}>Troc Diner</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Icon name="account" size={30} color='white'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default TopHeader