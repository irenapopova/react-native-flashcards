import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';



const Card = ({ text, navigate, ...props }) => {

    return (
        <TouchableOpacity onPress={() => navigate('Quiz', { questions: ["asd", "be"] })}>
            <View style={styles.card}><Text style={styles.text}>{text}</Text></View>
        </TouchableOpacity>


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