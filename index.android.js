import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import {
  MainViewController
} from './Controller/MainViewController';

class News extends Component {
  render() {
    let controller = new MainViewController();
    return controller.view();
  }
}

AppRegistry.registerComponent('News', () => News);