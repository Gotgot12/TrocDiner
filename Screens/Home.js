import * as React from 'react';
import { Text, View } from 'react-native';
import TopHeader from '../Components/TopHeader';
import Search from '../Components/Search'

function Home() {
    return (
      <View style={{ flex: 1 }}>
        <TopHeader/>
        <Search/>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home !</Text>
        </View>
      </View>
    );
  }

export default Home