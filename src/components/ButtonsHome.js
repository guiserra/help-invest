import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from "react-native-animatable";

export default function ButtonsHome(props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={props.onPress} />
      <Text style={styles.text}>{props.text}</Text>
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
    height: 80,
    borderRadius: 50,
    margin: 7,
    backgroundColor: '#d1286d'
  },
  text: {
    position: 'absolute',
    fontFamily: 'Montserrat_500Medium',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});