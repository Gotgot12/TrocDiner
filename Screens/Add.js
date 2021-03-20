import * as React from 'react';
import { Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';

function Add() {
    return (
      <View style={{ flex: 1 }}>
        <TopHeader/>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Add !</Text>
        </View>
      </View>
    );
  }

export default Add