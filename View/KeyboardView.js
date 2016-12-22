import React, { Component } from 'react';
import { 
	View, 
	Text,
	StyleSheet
	 } from 'react-native';
import KeyButton from './KeyButton';
import mainViewStyles from '../const/Const';
export default class KeyboardView extends Component {
	render(){
		return(
			<View style={mainViewStyles.keyboardView}>
				<View style={keyboardViewStyles.keyboardRow}>
					<KeyButton number='1' buttonPress={this.props.buttonPress}/>
					<KeyButton number='2' buttonPress={this.props.buttonPress}/>
					<KeyButton number='3' buttonPress={this.props.buttonPress}/>
					<KeyButton number='删' buttonPress={this.props.buttonPress}/>
				</View>
				<View style={keyboardViewStyles.keyboardRow}>
					<KeyButton number='4' buttonPress={this.props.buttonPress}/>
					<KeyButton number='5' buttonPress={this.props.buttonPress}/>
					<KeyButton number='6' buttonPress={this.props.buttonPress}/>
					<KeyButton number='0' buttonPress={this.props.buttonPress}/>
				</View>
				<View style={keyboardViewStyles.keyboardRow}>
					<KeyButton number='7' buttonPress={this.props.buttonPress}/>
					<KeyButton number='8' buttonPress={this.props.buttonPress}/>
					<KeyButton number='9' buttonPress={this.props.buttonPress}/>
					<KeyButton number='.' buttonPress={this.props.buttonPress}/>
				</View>
				<View style={keyboardViewStyles.keyboardRow}>
					<KeyButton number='C' buttonPress={this.props.buttonPress}/>
					<KeyButton number='-' buttonPress={this.props.buttonPress}/>
					<KeyButton number='+' buttonPress={this.props.buttonPress}/>
					<KeyButton number='=' buttonPress={this.props.buttonPress}/>
				</View>
			</View>
		);
	}
}
const keyboardViewStyles = StyleSheet.create({
	keyboardRow:{
		flex:1,
		backgroundColor:'black',
		flexDirection:'row'
	}
});


