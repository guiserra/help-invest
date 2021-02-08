import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>
      
      <Animatable.View
        animation="bounceIn"
        useNativeDriver>

        <ScrollView>
          <Text style={styles.title}>Help Invest</Text>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.img}
              source={require('./assets/buttons/retangulo_verde.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/buttons/retangulo_azul.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/buttons/retangulo_vermelho.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/buttons/retangulo_roxo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./assets/buttons/retangulo_amarelo.png')}
            />
          </TouchableOpacity>

        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  title: {
    textAlign: 'left',
    fontSize: 25,
    color: '#FFF',
    backgroundColor: '#000',
    padding: 15
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 15,
    padding: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    padding: 5
  },
  textButton: {
    fontSize: 55,
    color: '#FFF',
    position: 'absolute',
    textAlign: 'left'
  },
  img: {
    width: 378,
    height: 130,
    borderRadius: 10
  }
});
