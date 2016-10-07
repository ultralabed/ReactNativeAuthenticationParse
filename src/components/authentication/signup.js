import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={ styles.container }>
        <Text>You can sign up here</Text>
      </View>
    )
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});
