import React from 'react';
import { StyleSheet, View, } from 'react-native';

import Header from "./src/components/Header";

export default class App extends React.Component {
    render() {
        const { appStyling, } = styles;

        return (
            <View style={appStyling}>
                <Header headerText={"ALBUMS"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appStyling: {

    },
}); 
