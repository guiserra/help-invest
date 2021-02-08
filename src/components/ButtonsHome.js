import React from "react";
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ButtonsHome(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={ props.onPress}>
            <Image style={styles.img}
              source={props.cover}
            />
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
      padding: 5
    },
    img: {
      width: 378,
      height: 130,
      borderRadius: 10
    }
  });