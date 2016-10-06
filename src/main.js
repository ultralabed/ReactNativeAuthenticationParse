import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
let Signin = require('./components/authentication/signin');

module.exports = React.createClass({
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
