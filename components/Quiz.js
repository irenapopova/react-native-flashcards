import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'
import FlipCard from 'react-native-flip-card';


const Quiz = (props) => {
    console.log(props)

    return (
        <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
            <View style={{ height: 350 }}>
                <FlipCard flipVertical={false} flipHorizontal={true} style={{ flex: 1, }}>
                    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "green", marginTop: 10, marginBottom: 20, borderRadius: 10 }}>
                        <Text style={{ textAlign: "center" }}>What is a javascript loop?</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "blue", marginTop: 10, marginBottom: 20, borderRadius: 10 }}>
                        <Text style={{ textAlign: "center" }}>True</Text>
                    </View>
                </FlipCard>
            </View>




            <View>

                <Button text="correct" textStyle={{ fontSize: 30 }} color="blue" buttonStyle={styles.button} />
                <Button text="incorrect" textStyle={{ fontSize: 30 }} buttonStyle={styles.button} />
            </View>
        </View>
    )
}

Quiz.navigationOptions = {
    title: 'Quiz',
}

export default Quiz


const styles = {
    button: {

        height: 50,
        backgroundColor: "red",
        alignSelf: "stretch",
        borderRadius: 10,
        /* marginLeft: 30,
        marginRight: 30, */
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {

        textAlign: "center",
        fontSize: 30,
    }

}