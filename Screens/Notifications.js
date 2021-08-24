import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopHeader from '../Components/TopHeader';

function Notifications() {
  return (
    <View style={styles.global_container}>
      <TopHeader />
      <View style={styles.main_container}>
        <Text>Notifications !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global_container: {
    alignItems: 'center',
    flex: 1,
  },

  main_container: {
    alignItems: 'center',
    flex: 8,
    justifyContent: 'center',
  },
});

export default Notifications;
