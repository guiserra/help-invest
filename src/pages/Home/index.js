import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsHome from '../../components/ButtonsHome';

export default function Home({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>

      <Animatable.View animation="bounceIn" useNativeDriver>
        <ScrollView>

          <ButtonsHome
            text={'Ações/Stocks'}
            onPress={() => navigation.navigate('Acoes')}
          />

          <ButtonsHome
            text={'Brazilian Depositary Receipts'}
            onPress={() => navigation.navigate('Bdrs')}
          />

          <ButtonsHome
            text={'Fundos de Investimento\nImobiliário'}
            onPress={() => navigation.navigate('Fiis')}
          />

          <ButtonsHome
            text={'Tesouro'}
            onPress={() => { }}
          />

          <ButtonsHome
            text={'Certificado de Depósito\nBancário'}
            onPress={() => { }}
          />

          <ButtonsHome
            text={'Exchange Traded\nFunds'}
            onPress={() => { }}
          />

          <ButtonsHome
            text={'Criptomoedas'}
            onPress={() => { }}
          />

        </ScrollView>
      </Animatable.View>

    </SafeAreaView>
  );
}