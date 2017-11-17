/*
	@author ksdme
	Card Component. Props:
	 - style
	 - @children

	Stateless Component
*/
import React from "react";
import { StyleSheet, View, } from "react-native";

const Card = (props) => {
	const { cardContainer, } = styles;

	// provide an overrideable style
	let style = props.style?props.style:{};
	style = StyleSheet.flatten([cardContainer, style,]);

	return (
		<View style={style}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
		borderRadius: 2,
	},
});

export default Card;
