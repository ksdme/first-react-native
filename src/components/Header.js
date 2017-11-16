/*
    @author ksdme
    Header Component. Props:
     - headerText

    Stateless Component
*/
import React from "react";
import { StyleSheet, View, Text, StatusBar, } from "react-native";

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,

        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        },

        backgroundColor: '#FFF',
        elevation: 1,
    },

    textStyle: {
        fontSize: 23,
    },
});

export default Header;
