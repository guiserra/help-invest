import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from "react-native-animatable";

export default function ButtonsHome(props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'relative',
    width: '95%',
    justifyContent: 'center',
    height: 80,
    borderRadius: 50,
    margin: 7,
    backgroundColor: '#d1286d'
  },
  text: {
    justifyContent: 'center',
    fontFamily: 'Righteous_400Regular',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0.2
  }
});