
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';

function History() {
    return (
      <View style={{ flex: 1 }}>
        <TopHeader/>
        <View style={styles.main_container}>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Votre historique de plat</Text>
                <Text>Wesh</Text>
            </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
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
export default History