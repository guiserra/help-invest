import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsHome from '../../components/ButtonsHome';

const deviceHeight = Dimensions.get("window").height
export default function Home({ navigation }) {

  const dados = [
    {
      "key": "1",
      "text": "Ações/Stocks",
      "navigation": "Acoes"
    },
    {
      "key": "2",
      "text": "Brazilian Depositary Receipts \n(BDR)",
      "navigation": "Bdrs"
    },
    {
      "key": "3",
      "text": "Fundos de Investimento Imobiliário \n(FII)",
      "navigation": "Fiis"
    },
    {
      "key": "4",
      "text": "Tesouro",
      "navigation": "Fiis"
    },
    {
      "key": "5",
      "text": "Certificado de Depósito Bancário \n(CDB)",
      "navigation": "Fiis"
    },
    {
      "key": "6",
      "text": "Exchange Traded Funds \n(ETF)",
      "navigation": "Etfs"
    },
    {
      "key": "7",
      "text": "Criptomoedas",
      "navigation": "Fiis"
    }];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>

      <Animatable.View animation="bounceIn" useNativeDriver>

        <Text style={styles.text}>Início</Text>

        <FlatList
          style={{ marginBottom: deviceHeight * 0.065, paddingBottom: deviceHeight * 0.065 }}
          data={dados}
          keyExtractor={item => item.key}
          renderItem={({ item }) =>
            <ButtonsHome
              text={item.text}
              onPress={() => navigation.navigate(item.navigation)}
            />
          }
          scrollEnabled={true}
        />

      </Animatable.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Righteous_400Regular',
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0.2,
    padding: 10
  }
});