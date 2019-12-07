import React from 'react'
import { Text, TouchableOpacity, } from 'react-native';


const Button = ({ color, text, buttonStyle, textStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...buttonStyle, backgroundColor: color || "red" }}>
            <Text style={{ textAlign: "center", ...textStyle }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button
