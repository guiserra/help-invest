import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsHome from '../../components/ButtonsHome';

const deviceHeight = Dimensions.get("window").height
export default function Home({ navigation }) {

  const dados = [
    {
      "key": "1",
      "text": "Ações/Stocks",
      "navigation": () => navigation?.navigate("Acoes"),
      "color": "#d1286d"
    },
    {
      "key": "2",
      "text": "Brazilian Depositary Receipts \n(BDR)",
      "navigation": () => navigation?.navigate("Bdrs"),
      "color": "#d1286d"
    },
    {
      "key": "3",
      "text": "Fundos de Investimento Imobiliário \n(FII)",
      "navigation": () => navigation?.navigate("Fiis"),
      "color": "#d1286d"
    },
    {
      "key": "4",
      "text": "Tesouro",
      "navigation": () => { },
      "color": "#8d8d8d"
    },
    {
      "key": "5",
      "text": "Certificado de Depósito Bancário \n(CDB)",
      "navigation": () => { },
      "color": "#8d8d8d"
    },
    {
      "key": "6",
      "text": "Exchange Traded Funds \n(ETF)",
      "navigation": () => navigation?.navigate("Etfs"),
      "color": "#d1286d"
    },
    {
      "key": "7",
      "text": "Criptomoedas",
      "navigation": () => navigation?.navigate("Criptomoedas"),
      "color": "#d1286d"
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
              backgroundColor={item.color}
              text={item.text}
              onPress={item.navigation}
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