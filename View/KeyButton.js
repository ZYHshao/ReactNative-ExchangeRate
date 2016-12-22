import React, { Component,PropTypes } from 'react';
import { 
	TouchableHighlight,
	Text,
	StyleSheet,
	Image
} from 'react-native';

export default class KeyButton extends Component{
	render(){
		if (this.props.number == '删') {
			return(
			<TouchableHighlight 
			underlayColor='#f06d30' 
			style={[keyButtonStyles.buttonStyleNormal,{alignItems:'center'}]}
			onPress={this.props.buttonPress.bind(this,this.props.number)}>
				<Image source={require('../image/delete.png')}/>
			</TouchableHighlight>
			);
		};
		//特殊按钮需要状态来判断
		var buttonStyle;
		if(this.props.number == 'C' || this.props.number == '='){
            buttonStyle = keyButtonStyles.buttonStyleSpecial;
		}else{
			buttonStyle =  keyButtonStyles.buttonStyleNormal;
		}
		return(
			<TouchableHighlight 
			underlayColor='#f06d30' 
			style={buttonStyle}
			onPress={this.props.buttonPress.bind(this,this.props.number)}>
				<Text style={keyButtonStyles.textStyle}>{this.props.number}</Text>
			</TouchableHighlight>
		);
	}
}
const keyButtonStyles = StyleSheet.create({
	buttonStyleNormal:{
		flex:1,
		backgroundColor:'#323637',
		justifyContent: 'center',
	},
	buttonStyleSpecial:{
		flex:1,
		backgroundColor:'#f06d30',
		justifyContent: 'center',
	},
	textStyle:{
		color:'white',
		textAlign:'center',
		fontSize:30
	}
});