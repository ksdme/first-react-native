/*
	@author ksdme
	AppContents Component. Props:
		- @nil

	Stateful Component
*/
import React from "react";
import { StyleSheet, Image, Text, View, } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";

export default class AppContent extends React.Component {
    getInitialState() {
        return {};
    }

    componentWillMount() {

    }

    _makeAlbumCard(album) {

    }

    render() {
        const { contentContainerStyle, } = styles;

        return (
            <View style={contentContainerStyle}>
                {}
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {

    }
});
