import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styled.viewStyle}>
        <View style={styled.textStyle1}></View>
        <View style={styled.textStyle2}></View>
        <View style={styled.textStyle3}></View>
    </View>
};

const styled = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle1: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    },
    textStyle2: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-end'
    },
    textStyle3: {
        height: 100,
        width: 100,
        backgroundColor: 'green'
    }
});


export default BoxScreen;