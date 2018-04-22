//import libraries for making a component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//make a component
const Header = props => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {props.title} </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8', 
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 20,
    }
});

//make the component available to other parts of the app

export { Header };
