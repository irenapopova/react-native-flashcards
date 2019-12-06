import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default class AddDeck extends React.Component {
    
    static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


    constructor (props) {
        super(props)
        this.state = {
          input: ''
        }
     }
     onChange=(event)=>{
         this.setState({input: event.target.value})
     }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>What will you learn in this Deck?</Text>
        <TextInput style={styles.input} value={this.state.input} onChange={this.onChange}></TextInput>
        <Button underlayColor='red' style={styles.button} title="Submit"></Button>

            </View> 
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    button: {
    borderWidth:5,
    borderColor: 'red',
      width: 50,
      height: 10,
      backgroundColor: "blue"

    },
    text: {
        fontSize: 22,
        color: 'black',

    },

input: {

    marginLeft: 40,
    marginRight: 40,
    borderWidth:5,
    borderColor: 'red',
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: "green"

        

}
  });