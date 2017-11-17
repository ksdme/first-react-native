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

    // provide an overrideable style
    let style = props.style?props.style:{};
    style = StyleSheet.flatten([cardSectionStyle, style,]);

    return (
        <View style={style}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        padding: 10,
        borderColor: '#F8F8F8',
        borderBottomWidth: 1,
    },
});

export default CardSection;
