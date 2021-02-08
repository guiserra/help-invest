import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Indicadores( { navigation } ){
    return(
        <SafeAreaView style={styles.container}>
            <Animatable.View useNativeDriver>
                <ScrollView>


                    <View style={styles.lineButtons}>
                        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('PLiquido')}>
                            <Image style={styles.img}
                            source={require('../../../assets/buttons/indicadores/patrimonio-liquido.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.button}>
                            <Image style={styles.img}
                            source={require('../../../assets/buttons/indicadores/ebitda.png')}/>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.lineButtons}>
                        <TouchableOpacity 
                        style={styles.button}>
                            <Image style={styles.img}
                            source={require('../../../assets/buttons/indicadores/ebitda.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.button}>
                            <Image style={styles.img}
                            source={require('../../../assets/buttons/indicadores/ebitda.png')}/>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151515'      
    },
    button: {
      margin: 3,
      padding: 5,
    },
    img: {
      width: 180,
      height: 100,
      borderRadius: 10
    },
    buttonRight: {
      margin: 3,
      padding: 5
    },
    lineButtons: {
        flexDirection: 'row'
    }
  });