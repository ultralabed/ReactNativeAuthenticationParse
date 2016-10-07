import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

let Parse = require('parse/react-native')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: null
    }
  },
  componentWillMount: function() {
    Parse.User.currentAsync().then((user) => {
      this.setState({ user: user });
    });
  },
  render: function() {
    if (!this.state.user) {
      return <Text>Loading....</Text>;
    }
    
    let username = this.state.user.get('username');
    return (
      <View style={ styles.container }>
        <Text>Wellcome Back, { username }</Text>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
