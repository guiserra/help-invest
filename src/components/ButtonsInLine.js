import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width
export default function ButtonsIndicators(props) {
  return (
    <View style={styles.content}>
      <View style={styles.lineButtons}>
        <TouchableOpacity style={[styles.button, {backgroundColor: props?.backgroundColorLeft}]} onPress={props.onPressLeft}>
          <Text style={styles.text}>{props.textLeft}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: props?.backgroundColorRight}]} onPress={props.onPressRight}>
          <Text style={styles.text}>{props.textRight}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    width: '50%',
    justifyContent: 'center',
    height: 90,
    borderRadius: 20,
    margin: 7
  },
  lineButtons: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: deviceWidth * 0.9,
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