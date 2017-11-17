/*
	@author ksdme
	Album Component. Props:
	 - album

	Stateless Component
*/
import React from "react";
import { StyleSheet, Text, Image, View, Linking, } from "react-native";

import Card from "./Card";
import Button from "./Button";
import CardSection from "./CardSection";

const Album = (props) => {
    const { album, } = props;
    
    const {
        coverSection,
        coverImage,
        headerSection,
        headerDetails,
        headerThumbnail,
    } = styles;

    return (
        <Card>
            <CardSection style={headerSection}>
                <Image source={{ uri: album.thumbnail, }} style={headerThumbnail}/>
                <View style={headerDetails}>
                    <Text>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>

            <CardSection style={coverSection}>
                <Image source={{ uri: album.cover, }} style={coverImage} />
            </CardSection>

            <CardSection>
                <Button text={"P L A Y"} onClick={() => Linking.openURL(album.link)}/>
            </CardSection>            
        </Card>
    );
};

const styles = StyleSheet.create({
    coverSection: {
        padding: 0,
    },

    coverImage: {
        width: 340,
        height: 340,
    },

    headerSection: {
        flexDirection: 'row',
    },

    headerDetails: {
        alignSelf: 'center',
        marginLeft: 8,
    },

    headerThumbnail: {
        width: 45,
        height: 45,
        borderRadius: 45,
    }
});

export default Album;
