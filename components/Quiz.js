import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



const Quiz = () => {
    return (
        <View>
            <View>
                <Text>What is a javascript loop?</Text>
            </View>


            <View>

                <Button style={styles.button} title="Correct" />
                <Button style={styles.button} title="Incorrect" color="#f194ff" />
            </View>
        </View>
    )
}

export default Quiz


const styles = {
    button: {

        height: 50,
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