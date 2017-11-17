/*
	@author ksdme
	Button Component. Props:
	 - text
	 - style
	 - onClick

	Stateless Component
*/
import React from "react";
import { StyleSheet, TouchableOpacity, Text, } from "react-native";

const Button = (props) => {
	const { buttonStyle, buttonTextStyle, } = styles;

	// maintain extensivility
	let style = props.style?props.style:{};
	style = StyleSheet.flatten([buttonStyle, style,]);

	// dummy onClick
	let onClick = props.onClick?props.onClick:() => {};

	return (
		<TouchableOpacity style={style} onPress={() => onClick()}>
			<Text style={buttonTextStyle}>{props.text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		height: 40,
		borderRadius: 3,
		backgroundColor: '#558588',
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonTextStyle: {
		fontSize: 15,
		color: "#FFFFFF",
	},
});

export default Button;
