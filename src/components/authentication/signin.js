import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={ styles.container }>
        <Text>SIGN IN</Text>
        <Text style={ styles.label }>Username:</Text>
        <TextInput style={ styles.input } />
        <Text style={ styles.label }>Password:</Text>
        <TextInput 
          style={ styles.input } 
          secureTextEntry={ true }
          />
      </View>
    )
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 15,
  }
});
