import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from 'react-native';
import Card from './Card.js'


const dataArr = [{ key: 1, title: "js" }, { key: 2, title: "react" }, { key: 3, title: "history" }, { key: 4, title: "geography" }, { key: 5, title: "js" }]

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export default ({ navigation, screenProps }) => {
    const { categories } = screenProps;
    console.log(screenProps)
    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={categories || []}
                renderItem={({ item }) => <Card navigate={navigation.navigate} text={item.title} />}
                keyExtractor={item => item.key}
            />
        </SafeAreaView>

    )
}

const styles = {
    container: {
        marginTop: 80,
    },
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
