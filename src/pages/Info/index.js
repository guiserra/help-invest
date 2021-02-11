import React from 'react';
import { ScrollView, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';

const urlDonate = "https://www.paypal.com/donate?hosted_button_id=EAMF7WY7HY2SQ";

export default function Info() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151515" }}>
      <Animatable.View useNativeDriver>

        <ScrollView>

          <View style={[styles.cardBoard, styles.shadow, { marginTop: 10, marginBottom: 10 }]}>
            <View style={styles.cardContent}>
              <Text style={[styles.content, styles.shadow]}>   Primeiramente, me chamo Guilherme, fiz esse projeto juntamente com meu amigo Kevin,
              somos apaixonados por tecnologia e investimentos no geral, decidimos juntar os dois fundando o projeto Help Invest.{"\n"}   Falando um pouco sobre o Help Invest,
              ao longo da nossa jornada de investidores, percebemos que o acesso a informação é bem dificil para quem esta começando nesse mundo, e muitas das
              vezes as pessoas desistem de investir por falta de acesso às informações básicas, percebemos esse problema e aqui estamos.{"\n"}   Estamos abertos para propostas, e
              sujestões funcionais no app, fique à vontade para mandar um email para nós.</Text>

              <Text style={[styles.subtitle, styles.shadow]} onPress={() => Linking.openURL('mailto:serra.guilherme@gmail.com?subject=Ola')}>serra.guilherme@gmail.com  <Feather name="send" size={20} color="white" />
                {"\n"}{"\n"}<Text onPress={() => Linking.openURL('mailto:kevin.rafael98@hotmail.com?subject=Ola')}>kevin.rafael98@hotmail.com  <Feather name="send" size={20} color="white" /></Text>
              </Text>

              <Text style={[styles.content, styles.shadow]}>   Somos um projeto sem nenhum investimento externo, e atualmente estamos apenas com um tipo de anúncio, caso você queira contribuir conosco,
              sinta-se à vontade para enviar a quantia que desejar, qualquer valor sera bem-vindo. Muito obrigado.</Text>
            </View>

            <View style={styles.buttonPaypal}>
              <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(urlDonate)}>
                <Image style={styles.img}
                  source={require('../../../assets/buttons/paypal/paypal.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

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
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#a6a6a6',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 8,
    marginVertical: 5
  },
  hyperlink: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 14,
    color: '#ff0000'
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 17,
    color: '#FFF'
  },
  subtitle: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 14,
    color: '#FFF'
  },
  content: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'left',
    fontSize: 15,
    marginTop: 10,
    color: '#FFF'
  },
  contentBold: {
    fontFamily: 'Montserrat_500Medium',
    color: '#FFF',
    fontSize: 16
  },
  cardBoard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#2f3c6f'
  },
  cardContent: {
    marginHorizontal: 18
  },
  button: {
    margin: 3,
    padding: 5,
  },
  img: {
    width: 300,
    height: 99
  },
  buttonPaypal: {
    marginHorizontal: 35
  }
});