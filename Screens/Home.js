import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';
import Search from '../Components/Search';
import Token from '../Components/Token';

function Home() {
    return (
      <View style={styles.main_container}>
        <TopHeader/>
        <Token/>
        <Search/>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home !</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  main_container: { 
    flex: 1,   
  },
  
  
});
export default Home