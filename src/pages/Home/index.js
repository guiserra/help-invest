import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsHome from '../../components/ButtonsHome';

export default function Home( { navigation } ) {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#151515"}}>

      <Animatable.View animation="bounceIn" useNativeDriver>
        <ScrollView>

          <ButtonsHome
            cover={require('../../../assets/buttons/retangulo_verde.png')}
            onPress = { () => navigation.navigate('Indicadores') }
          />

          <ButtonsHome
            cover={require('../../../assets/buttons/retangulo_azul.png')}
            onPress = { () => navigation.navigate('Bdrs') }
          />

          <ButtonsHome
            cover={require('../../../assets/buttons/retangulo_roxo.png')}
            onPress = { () => navigation.navigate('Fiis') }
          />

          <ButtonsHome
            cover={require('../../../assets/buttons/retangulo_amarelo.png')}
            onPress = { () => {} }
          />

          <ButtonsHome
            cover={require('../../../assets/buttons/retangulo_vermelho.png')}
            onPress = { () => {} }
          />

        </ScrollView>
      </Animatable.View>

    </SafeAreaView>
  );
}