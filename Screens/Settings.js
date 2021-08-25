import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';
import FetchGet from '../Functions/FetchGet';
import { TokenContext } from '../Navigation/SideNav';

function Settings() {
  const token = useContext(TokenContext);
  FetchGet(token, 'http://localhost:8000/api/users');

  return (
    <View style={styles.global_container}>
      <TopHeader />
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>Paramètres</Text>
          <Text>Wesh</Text>
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

export default Settings;
