import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { UserContext } from '../Screens/UserProvider';

function Coin() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.main_container}>
      <Text style={styles.text}>Votre nombre de pièce: {user.Coin}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    marginBottom: 10,
    marginLeft: 20,
  },

  text: {
    fontFamily: 'ScopeOne',
    fontSize: 16,
  },
});

export default Coin;
