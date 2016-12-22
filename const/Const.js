import React, { Component } from 'react';
import { 
	StyleSheet
	 } from 'react-native';


export default mainViewStyles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
		backgroundColor:'black'
	},
	screenView:{
		flex:3,
		backgroundColor:'#f06d30'
	},
	keyboardView:{
		flex:7,
		backgroundColor:'#323637'
	}
});