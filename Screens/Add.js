import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';

function Add() {
    return (
      <View style={styles.main_container}>
        <TopHeader/>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Add !</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  main_container: { 
    flex: 1,   
  },


});

export default Add