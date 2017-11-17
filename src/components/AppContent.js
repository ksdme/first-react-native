/*
	@author ksdme
	AppContents Component. Props:
		- @nil

	Stateful Component
*/
import React from "react";
import { StyleSheet, ScrollView, } from "react-native";
import axios from "axios";

import Album from "./Album";

export default class AppContent extends React.Component {
    constructor() {
        super();

        this.state = {
            albums: [],
        };
    }

    componentWillMount() {
        axios.get("https://raw.githubusercontent.com/ksdme/first-react-native/master/data/sample.json")
            .then(response => {
                let dataResponse = response.data;
                this.setState({ albums: dataResponse, });
            });
    }

    render() {
        const { contentContainerStyle, } = styles;

        return (
            <ScrollView style={contentContainerStyle}>
                {this.state.albums.map((album) => <Album key={album.id} album={album}/>)}
            </ScrollView>
        );   
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {

    },
});
