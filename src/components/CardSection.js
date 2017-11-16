/*
	@author ksdme
	CardSection Component. Props:
	 - style
	 - @children

    Stateless Component
*/
import React from "react";
import { StyleSheet, View, } from "react-native";

const CardSection = (props) => {
    const { cardSectionStyle, } = styles;

    return (
        <View style={cardSectionStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle: {

    },
});

export default CardSection;
