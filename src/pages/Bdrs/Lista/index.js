import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

const url = "http://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/bdrs/bdrs-nao-patrocinados/bdrs-nao-patrocinados-listados/";

export default function Lista() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
            <Text style={[styles.title, styles.shadow]}>Listagem de todos os BDR's disponíveis</Text>
            <Text style={[styles.content, styles.shadow]}>  Abaixo temos um link direto para o site da B3 (Bolsa de Valores), que leva a listagem de todos os BDR's disponíveis
            no nosso mercado.
            </Text>
            <Text style={[styles.content, styles.shadow]}>Lembrando que são dividídos por seguimentos: </Text>
            <Text style={[styles.contentBold, styles.shadow]}>(DR1) BDR Nível 1;{"\n"}
              (DR2) BDR Nível 2;{"\n"}
              (DR3) BDR Nível 3;{"\n"}
              (DRN) BDR Não Patrocinado. 
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)} style={[styles.button, styles.shadow]}>
              <Image style={[styles.imgFundo, styles.shadow]} source={require('../../../../assets/buttons/bdr/fundo.png')} />
              <Text style={[styles.contentImg, styles.shadow]}>Confira aqui a lista</Text>
            </TouchableOpacity>
            <Text style={[styles.content, styles.shadow]}>No site você encontrará uma lista nesse padrão, por exemplo: </Text>
          </View>
          <View style={styles.imgContent}>
            <Image style={[styles.img, styles.shadow]} source={require('../../../../assets/buttons/bdr/exemplo-lista-bdr.png')} />
          </View>
          <View style={styles.cardContent}>
            <Text style={[styles.content, styles.shadow]}>Clicando em qualquer empresa (3M Company), você encontrará mais informações sobre, como o Ticker (Códigos de Negociação), MMMC34: </Text>
          </View>
          <View style={styles.imgContent}>
            <Image style={[styles.img, styles.shadow]} source={require('../../../../assets/buttons/bdr/exemplo-bdr.png')} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentImg: {
    position: 'absolute',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 22,
    color: '#FFF'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgFundo: {
    width: 350,
    height: 60,
    borderRadius: 10
  },
  img: {
    width: 360,
    height: 200,
    borderRadius: 10
  },
  imgContent: {
    alignItems: 'center',
    marginBottom: 10
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
    marginHorizontal: 18,
    marginVertical: 10
  }
});