import React, { Component } from 'react';
import { 
	View, 
	Text,
	StyleSheet
	 } from 'react-native';
import KeyboardView from './KeyboardView';
import mainViewStyles from '../const/Const';
import ScreenView from './ScreenView';
// 汇率换算器主界面视图

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let __this = this;
    return (
      <View style={mainViewStyles.container}>
        <ScreenView ref="screenView"/>
        <KeyboardView buttonPress={function(title){
          __this.buttonPress(title);
        }}/>
      </View>
    )
  }
  buttonPress(title){
    if (title=='删') {
      this.refs.screenView.delete();
    }else if(title=='C'){
      this.refs.screenView.clear();
    }else if(title=='-'){
      this.refs.screenView.sub();
    }else if(title=='+'){
      this.refs.screenView.add();
    }else if(title=='='){
      this.refs.screenView.trans();
    }else{
      this.refs.screenView.buttonClick(title);
    }
    
  }

}


