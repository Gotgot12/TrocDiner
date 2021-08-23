import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopHeader from '../Components/TopHeader';
import RequestNav from '../Navigation/RequestNav';

function Home() {
    return (
      <View style={styles.main_container}>
        <TopHeader/>
        <RequestNav/>
      </View>
    );
  }

const styles = StyleSheet.create({
  main_container: { 
    flex: 1,
  },
  
  
});

export default Home;