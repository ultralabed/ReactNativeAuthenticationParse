import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

let Button = require('../common/button');
let Parse = require('parse/react-native');

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
        <Text>{ this.state.errorMessage }</Text>
        <Button text={ 'Sign In' } onPress={ this.onPress }/>
        <Button text={ 'I need an account' } onPress={ this.onSignupPress }/>
      </View>
    )
  },
  onPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => { console.log(user); },
      error: (data, error) => { this.setState({ errorMessage: error.message }); }
    });
  },
  onSignupPress: function() {
    this.props.navigator.push( {name: 'signup'} )
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
