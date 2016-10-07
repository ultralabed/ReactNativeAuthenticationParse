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
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <Text>SIGN UP</Text>
        <Text style={ styles.label }>Username: </Text>
        <TextInput 
          style={ styles.input } 
          value={ this.state.username }
          onChangeText={ (text) => {this.setState({ username: text })} }
          />
        <Text style={ styles.label }>Password: </Text>
        <TextInput 
          style={ styles.input } 
          value={ this.state.password }          
          secureTextEntry={ true }
          onChangeText={ (text) => {this.setState({ password: text })} }
          />
        <Text style={ styles.label }>Confirm Password: </Text>
        <TextInput 
          style={ styles.input } 
          value={ this.state.passwordConfirmation }
          secureTextEntry={ true }
          onChangeText={ (text) => {this.setState({ passwordConfirmation: text })} }
          />
        <Text>{ this.state.errorMessage }</Text>
        <Button text={ 'Sign Up' } onPress={ this.onSignupPress }/>
        <Button text={ 'I have an account ....' } onPress={ this.onSignPress }/>
      </View>
    )
  },
  onSignPress: function() {
    this.props.navigator.pop({ name: 'signin' })
  },
  onSignupPress: function() {
    if(this.state.password != this.state.passwordConfirmation) {
      return this.setState({ errorMessage: 'Your passwords does not match' });
    }
    let that = this;
    let user = new Parse.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);

    user.signUp(null, {
      success: (user) => { 
        this.props.navigator.immediatelyResetRouteStack([{ name: 'tweets' }]);
       },
      error: (user, error) => { 
        console.log(error);
        this.setState({ errorMessage: error.message }) }
    });
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
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
  }
});
