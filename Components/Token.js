import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Token() {
  return (
    <View style={styles.main_container}>
      <Text style={styles.text}>Vos jetons: 1000</Text>
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

export default Token;
