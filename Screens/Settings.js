import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';
import FetchGet from '../Functions/FetchGet';
import { token } from '../Navigation/SideNav';

function Settings() {

    console.log(token)
    FetchGet(token, 'http://localhost:8000/api/users')

    return (
        <View style={{ flex: 1 }}>
            <TopHeader/>
            <View style={styles.main_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_text}>Paramètres</Text>
                    <Text>Wesh</Text>
                </View>
            </View>
      </View>
    );
}

export default Settings