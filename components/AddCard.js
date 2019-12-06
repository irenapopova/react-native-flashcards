import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class AddCards extends React.Component{
    render(){
        return (
            <View style={styles.card}>
                
            </View>
        )

    }
}



const styles = StyleSheet.create({
    card: {
      borderColor: 'red',
      borderWidth: 4,
      /* flex: 3, */
      color: 'green',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 10
    },
    text: {
        fontSize: 16,
        color: 'black',

    }
  });