import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function TopHeader() {
  return (
    <View style={styles.main_container}>
      <View style={styles.titre_container}>
        <Text style={styles.titre_text}>Troc Dîner</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center',
    backgroundColor: '#008037',
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 10,
  },

  titre_container: {
    alignItems: 'center',
    flex: 1,
  },

  titre_text: {
    color: 'white',
    fontFamily: 'DancingScript',
    fontSize: 40,
  },
});

export default TopHeader;
