import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      part: 1,
    };
  }

  minus = () => {
    if (this.state.part > 1) {
      this.setState({
        part: this.state.part - 1,
      });
    }
  };

  plus = () => {
    if (this.state.part < this.props.part) {
      this.setState({
        part: this.state.part + 1,
      });
    }
  };

  render() {
    return (
      <View style={styles.main_container}>
        <TouchableHighlight underlayColor="#DDDDDD" onPress={this.minus}>
          <Icon name="minus-circle" color="#008037" size={50} />
        </TouchableHighlight>
        <Text style={styles.text}>{this.state.part}</Text>
        <TouchableHighlight underlayColor="#DDDDDD" onPress={this.plus}>
          <Icon name="plus-circle" color="#008037" size={50} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
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
