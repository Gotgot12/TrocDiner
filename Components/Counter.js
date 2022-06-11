import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Counter({ nbrPartMax }) {
  const [count, setCount] = useState(1);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    if (count < nbrPartMax) {
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.counter_container}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => minus()}>
        <Icon name="minus-circle" color="#008037" size={50} />
      </TouchableHighlight>
      <Text style={styles.text}>{count}</Text>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => plus()}>
        <Icon name="plus-circle" color="#008037" size={50} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  counter_container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'ScopeOne',
    fontSize: 40,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Counter;
