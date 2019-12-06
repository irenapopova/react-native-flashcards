import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableWithoutFeedback } from 'react-native';


const Card = ({ text, navigate }) => {

    return (
        <TouchableWithoutFeedback onPress={() => navigate('Quiz', { name: 'Jane' })}>
            <View style={styles.card}><Text style={styles.text}>{text}</Text></View>
        </TouchableWithoutFeedback>
    )
}

export default Card


const styles = {
    card: {

        height: 160,
        backgroundColor: "red",
        alignSelf: "stretch",
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {

        textAlign: "center",
        fontSize: 30,
    }

}