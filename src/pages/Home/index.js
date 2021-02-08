import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Home( { navigation } ) {

  return (
    <SafeAreaView style={styles.container}>

      <Animatable.View
        animation="bounceIn"
        useNativeDriver>
        
        <ScrollView>

          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Indicadores')}>
            <Image style={styles.img}
              source={require('../../../assets/buttons/retangulo_verde.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/buttons/retangulo_azul.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/buttons/retangulo_roxo.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/buttons/retangulo_amarelo.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/buttons/retangulo_vermelho.png')}
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
