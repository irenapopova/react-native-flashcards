import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class AddCards extends React.Component{
    render(){
        return <View style={styles.card}><Text>AddCard</Text></View>

    }
}


const styles = StyleSheet.create({
    card: {
      padding: 20,
      borderColor: 'red',
      borderWidth: 4,
      height: 10,
      color: 'green',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
  });