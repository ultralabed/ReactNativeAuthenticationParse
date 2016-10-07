import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';
let Parse = require('parse/react-native');
let Signin = require('./components/authentication/signin');
let Signup = require('./components/authentication/signup');
let Tweets = require('./components/tweets/tweets');

const ROUTES = {
  signin: Signin,
  signup: Signup,
  tweets: Tweets
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("epHqnJOxMHEKGloGBgZCpn6SIKHdxX5q97a5iVMj", "uZXxWDuXj9msgTzSQAtPKYmWnBWooKGPsU5k7Bp4");
  },
  renderScene: function(route, navigator) {
    let Component = ROUTES[route.name];
    return <Component route={ route } navigator={ navigator }/>
  },
  render: function() {
    return (
      <Navigator 
        style={ styles.container }
        initialRoute={ {name: 'signin'} }
        renderScene={ this.renderScene }
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromBottom; } }
        />
    )
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
