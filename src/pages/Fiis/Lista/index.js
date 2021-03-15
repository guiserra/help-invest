import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

const url = "https://fiis.com.br/wp/lista-por-segmento-anbima/";

export default function Lista() {
  return (
    <SafeAreaView style={globalStyles.container}>

      <Text style={globalStyles.text}>Lista de FII</Text>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.title, globalStyles.shadow]}>Listagem de todos os FII disponíveis</Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>Abaixo temos um link direto que leva a listagem de todos os
            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text> disponíveis no nosso mercado.
            </Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>Lembrando que são dividídos por seguimentos: </Text>
            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Híbrido;{"\n"}
            Hospital;{"\n"}
            Hotel;{"\n"}
            Lajes Corporativas;{"\n"}
            Logística;{"\n"}
            Não Informado;{"\n"}
            Outros;{"\n"}
            Residencial;{"\n"}
            Shoppings;{"\n"}
            Títulos e Valores Mobiliários.{"\n"}
            </Text>
            <View style={globalStyles.containerButton}>
              <TouchableOpacity onPress={() => Linking.openURL(url)} style={[globalStyles.button, globalStyles.shadow]}>
                <Text style={globalStyles.textButton}>Clique aqui e veja a lista</Text>
              </TouchableOpacity>
            </View>
            <Text style={[globalStyles.content, globalStyles.shadow]}>{"\n"}No site você encontrará uma lista nesse padrão, por exemplo: </Text>
          </View>
          <View style={globalStyles.imgContent}>
            <Image style={[globalStyles.img, globalStyles.shadow]} source={require('../../../../assets/buttons/fii/exemplo-lista-fii.jpg')} />
          </View>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.content, globalStyles.shadow]}>Clicando em qualquer fundo (
              <Text style={[globalStyles.contentBold, globalStyles.shadow]}>AFCR11</Text>, por exemplo), você encontrará mais
            informações sobre, como o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Ultimo Rendimento</Text>: </Text>
          </View>
          <View style={globalStyles.imgContent}>
            <Image style={[globalStyles.img, globalStyles.shadow]} source={require('../../../../assets/buttons/fii/exemplo-fii.png')} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}