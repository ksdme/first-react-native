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
	var style = props.style?props.style:{};
	style = StyleSheet.flatten(cardContainer, style);

	return (
		<View style={style}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		borderRadius: 2,
	},
});

export default Card;
