import React from 'react';
import { StyleSheet, View, } from 'react-native';

import Header from "./src/components/Header";
import AppContent from "./src/components/AppContent";

export default class App extends React.Component {
    render() {
        const { appStyling, } = styles;

        return (
            <View style={appStyling}>
                <Header headerText={"ALBUMS"}/>
                <AppContent style={{ flex: 1, }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appStyling: {

    },
}); 
