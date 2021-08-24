import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TopHeader() {
  return (
    <View style={styles.main_container}>
      <View style={styles.iconSidebar_container}>
        <Icon name="page-layout-sidebar-left" size={30} color="white" />
      </View>
      <View style={styles.titre_container}>
        <Text style={styles.titre_text}>Troc Dîner</Text>
      </View>
      <View style={styles.iconProfile_container}>
        <Icon name="account" size={35} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconProfile_container: {
    alignItems: 'flex-end',
    flex: 1,
  },

  iconSidebar_container: {
    alignItems: 'flex-start',
    flex: 1,
  },

  main_container: {
    alignItems: 'center',
    backgroundColor: '#008037',
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 10,
  },

  titre_container: {
    alignItems: 'center',
    flex: 2,
  },

  titre_text: {
    color: 'white',
    fontFamily: 'DancingScript',
    fontSize: 40,
  },
});

export default TopHeader;
