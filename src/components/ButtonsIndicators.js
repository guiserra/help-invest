import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ButtonsIndicators(props) {
  return (
    <View style={styles.lineButtons}>
      <TouchableOpacity style={styles.button} onPress={props.onPressLeft}>
        <Image style={styles.img}
          source={props.coverLeft}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onPressRight}>
        <Image style={styles.img}
          source={props.coverRight}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 3,
    padding: 3,
    width: '50%'
  },
  img: {
    width: 180,
    height: 100,
    borderRadius: 10
  },
  lineButtons: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  }
});