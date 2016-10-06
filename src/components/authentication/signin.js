import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

let Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <Text>SIGN IN</Text>

        <Text style={ styles.label }>Username:</Text>
        <TextInput 
          style={ styles.input }
          value={ this.state.username }
          onChangeText={ (text) => { this.setState({ username: text }) } }
          />

        <Text style={ styles.label }>Password:</Text>
        <TextInput 
          style={ styles.input } 
          secureTextEntry={ true }
          value={ this.state.password }
          onChangeText={ (text) => {this.setState({ password: text })} }
          />

        <Button text={ 'Sign In' } onPress={ this.onPress }/>
      </View>
    )
  },
  onPress: function() {
    this.setState({
      password: ''
    })
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
