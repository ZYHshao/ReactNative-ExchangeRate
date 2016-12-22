import React, { Component } from 'react';
import { 
	View, 
	Text,
	StyleSheet,
	TouchableHighlight,
	Image
	 } from 'react-native';
import mainViewStyles from '../const/Const';
export default class ScreenView extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	transUS:true,
	  	USMoney:'0',
		CHMoney:'0'
	  };
	  let __this = this;
	  this.change = function(){
		__this.setState({transUS:!__this.state.transUS});
	  };
	  //数字类按钮被点击触发的方法
	  this.buttonClick = function(count){
	  	var us=__this.state.USMoney,ch=__this.state.CHMoney;
	  	if (__this.state.transUS) {
	  			if (us=='0') {us=count;}else{us=__this.state.USMoney+count;};
	  		}else{
	  			if (ch=='0') {ch=count;}else{ch=__this.state.CHMoney+count;};
	  		};
	  	__this.setState({
	  		USMoney:us,
	  		CHMoney:ch
	  	});
	  };
	  //清除按钮被点击触发的方法
	  this.clear = function(){
	  	__this.setState({
	  		USMoney:'0',
	  		CHMoney:'0'
	  	});
	  };
	  //回退按钮被点击触发的方法
	  this.delete = function(){
		if (__this.state.transUS) {
			if (__this.state.USMoney.length>1) {
				let newUS = __this.state.USMoney.substring(0,__this.state.USMoney.length-1);
				__this.setState({USMoney:newUS});
			}else if(__this.state.USMoney>'0'){
				__this.setState({USMoney:'0'});
			}
		}else{
			if (__this.state.CHMoney.length>1) {
				let newCH = __this.state.CHMoney.substring(0,__this.state.CHMoney.length-1);
				__this.setState({CHMoney:newCH});
			}else if(__this.state.CHMoney>'0'){
				__this.setState({CHMoney:'0'});
			}
		}
	  };
	  //减号触发的方法
	  this.sub = function(){
	  	if (__this.state.transUS) {
		   if(__this.state.USMoney>'0'){
		   		let newUS = (parseInt(__this.state.USMoney)-1).toString();
				__this.setState({USMoney:newUS});
			}
		}else{
			if(__this.state.CHMoney>'0'){
				let newCH = (parseInt(__this.state.CHMoney)-1).toString();
				__this.setState({CHMoney:newCH});
			}
		}
	  };
	  //加号触发的方法
	  this.add = function(){
	  	if (__this.state.transUS) {
		   let newUS = (parseFloat(__this.state.USMoney)+1).toString();
			__this.setState({USMoney:newUS});
		}else{
			let newCH = (parseFloat(__this.state.CHMoney)+1).toString();
			__this.setState({CHMoney:newCH});
		}
	  };
	  //进行汇率转换
	  this.trans = function(){
	  	if (__this.state.transUS) {
		   let us = parseFloat(__this.state.USMoney);
		   __this.setState({CHMoney:(us*6.7).toFixed(2).toString()});
		}else{
			let ch = parseFloat(__this.state.CHMoney);
		   __this.setState({USMoney:(ch/6.7).toFixed(2).toString()});
		}
	  }
	}

	render(){
		let transText = this.state.transUS?"从美元":"从人民币";
		let transToText = this.state.transUS?"到人民币":"到美元";
		let topText = this.state.transUS?this.state.USMoney+'$':this.state.CHMoney+'￥';
		let bottomText = this.state.transUS?this.state.CHMoney+'￥':this.state.USMoney+'$';
		return(
			<View style={mainViewStyles.screenView}>
				<Text style={{
					color:'white',
					textAlign:'right',
					marginRight:20,
					marginTop:20,
					fontSize:17
				}}>{transText}</Text>
				<Text style={{
					color:'white',
					textAlign:'right',
					fontSize:37,
					marginRight:20,
				}}>{topText}</Text>
				<View style={{
					flexDirection:'row',
					zIndex:100,
					marginTop:-7.5
				}}>
				<TouchableHighlight 
				 underlayColor='#f06d30'
				 style={{
					left:50,
					marginTop:0,
				}} onPress={this.change}>
					<Image source={require('../image/exchange.png')}/>
				</TouchableHighlight>
				<View style={{
					marginLeft:70,
					height:1,
					backgroundColor:'white',
					marginTop:10,
					flex:1
				}}></View>
				</View>
				<Text style={{
					marginTop:10,
					color:'white',
					textAlign:'right',
					fontSize:17,
					marginRight:20,
					marginTop:-3,
					zIndex:99
				}}>{transToText}</Text>
				<Text style={{
					color:'white',
					textAlign:'right',
					fontSize:37,
					marginRight:20
				}}>{bottomText}</Text>
			</View>
		);
	}
}