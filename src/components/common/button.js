import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHightlight
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHightlight 
        style={ styles.button }
        underlayColor={ 'gray' }
        onPress={ this.props.onPress }
        >
        <Text style={ styles.buttonText }>{ this.props.text }</Text>
      </TouchableHightlight>
    );
  }
});

let styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});
