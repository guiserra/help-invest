import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width
const deviceHeight = Dimensions.get("window").height
export default function ButtonsSmall(props) {
  return (
    <View style={styles.content}>
        <TouchableOpacity style={[styles.button, {backgroundColor: props.backgroundColor}]} onPress={props.onPress}>
          <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: deviceWidth * 0.93,
    justifyContent: 'center',
    height: 90,
    borderRadius: 20,
    margin: 7
  },
  text: {
    justifyContent: 'center',
    fontFamily: 'Righteous_400Regular',
    color: 'white',
    fontSize: 21,
    textAlign: 'center',
    textAlignVertical: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0.2
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});