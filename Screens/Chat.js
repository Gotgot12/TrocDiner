import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';
import DecodeTokenJWT from '../Functions/DecodeTokenJWT';
import FetchGet from '../Functions/FetchGet';
import { token } from '../Navigation/SideNav';

function Chat() {

    console.log(DecodeTokenJWT(token))
    console.log(FetchGet(token, 'http://127.0.0.1:8000/api/commandes'));
    
    return (
      <View style={{ flex: 1 }}>
        <TopHeader/>
        <View style={styles.main_container}>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Vos messages</Text>
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
export default Chat