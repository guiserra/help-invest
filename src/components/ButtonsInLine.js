import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ButtonsIndicators(props) {
  return (
      <View style={styles.lineButtons}>
        <TouchableOpacity style={styles.buttonLeft} onPress={props.onPressLeft}>
          <Image style={styles.img}
            source={props.coverLeft}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight} onPress={props.onPressRight}>
          <Image style={styles.img}
            source={props.coverRight}
          />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  buttonLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  buttonRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  img: {
    width: '90%',
    height: 100,
    borderRadius: 10
  },
  lineButtons: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15
  }
});