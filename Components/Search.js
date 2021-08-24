// Components/Search.js

import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Search({ placeholder }) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.main_container}>
      <Icon name="search-outline" size={15} color="#008037" />
      <TextInput
        style={styles.textinput}
        placeholder={placeholder}
        onChangeText={() => setSearchText(searchText)}
        defaultValue={searchText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  textinput: {
    borderColor: '#008037',
    borderRadius: 10,
    borderWidth: 1,
    height: 30,
    marginLeft: 5,
    paddingLeft: 10,
    paddingRight: 5,
    width: 180,
  },
});

export default Search;
