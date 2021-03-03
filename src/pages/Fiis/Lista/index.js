import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

const url = "http://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/bdrs/bdrs-nao-patrocinados/bdrs-nao-patrocinados-listados/";

export default function Lista() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={globalStyles.text}>Lista de BDRs</Text>

        <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.title, globalStyles.shadow]}>Listagem de todos os BDR's disponíveis</Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>Abaixo temos um link direto para o site da <Text style={[globalStyles.contentBold, globalStyles.shadow]}>B3</Text> (Bolsa de Valores), que leva a listagem de todos os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDR's</Text> disponíveis
            no nosso mercado.
            </Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>Lembrando que são dividídos por seguimentos: </Text>
            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>(DR1) BDR Nível 1;{"\n"}
              (DR2) BDR Nível 2;{"\n"}
              (DR3) BDR Nível 3;{"\n"}
              (DRN) BDR Não Patrocinado.{"\n"}
            </Text>
            <View style={globalStyles.containerButton}>
              <TouchableOpacity onPress={() => Linking.openURL(url)} style={[globalStyles.button, globalStyles.shadow]}>
                <Text style={globalStyles.textButton}>Clique aqui e veja a lista</Text>
              </TouchableOpacity>
            </View>
            <Text style={[globalStyles.content, globalStyles.shadow]}>{"\n"}No site você encontrará uma lista nesse padrão, por exemplo: </Text>
          </View>
          <View style={globalStyles.imgContent}>
            <Image style={[globalStyles.img, globalStyles.shadow]} source={require('../../../../assets/buttons/bdr/exemplo-lista-bdr.png')} />
          </View>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.content, globalStyles.shadow]}>Clicando em qualquer empresa (3M Company, por exemplo), você encontrará mais informações sobre, como o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Ticker</Text> (Códigos de Negociação),<Text style={[globalStyles.contentBold, globalStyles.shadow]}> MMMC34</Text>: </Text>
          </View>
          <View style={globalStyles.imgContent}>
            <Image style={[globalStyles.img, globalStyles.shadow]} source={require('../../../../assets/buttons/bdr/exemplo-bdr.png')} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}