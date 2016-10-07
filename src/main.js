import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
let Parse = require('parse/react-native');
let Signin = require('./components/authentication/signin');

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("epHqnJOxMHEKGloGBgZCpn6SIKHdxX5q97a5iVMj", "uZXxWDuXj9msgTzSQAtPKYmWnBWooKGPsU5k7Bp4");
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <Signin/>
      </View>
    )
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
