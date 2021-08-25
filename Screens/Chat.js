import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';
import DecodeTokenJWT from '../Functions/DecodeTokenJWT';
import useFetchGet from '../Functions/useFetchGet';
import { TokenContext } from '../Navigation/SideNav';

function Chat() {
  const token = useContext(TokenContext);
  console.log(DecodeTokenJWT(token));
  console.log(useFetchGet(token, 'http://127.0.0.1:8000/api/commandes'));

  return (
    <View style={styles.global_container}>
      <TopHeader />
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>Vos messages</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
  },

  title_container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
  },

  title_text: {
    fontFamily: 'ScopeOne',
    fontSize: 25,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
export default Chat;
