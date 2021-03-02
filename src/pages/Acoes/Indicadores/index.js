import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <View/>
            <Animatable.View useNativeDriver>
                <ScrollView>

                <Text style={styles.text}>Indicadores</Text>

                    <ButtonsInLine
                        textLeft='Patrimônio Líquido'
                        onPressLeft={() => navigation.navigate('PLiquido')}
                        textRight='Dívida Bruta'
                        onPressRight={() => navigation.navigate('DividaBruta')}
                    />

                    <ButtonsInLine
                        textLeft='Fluxo de Caixa'
                        onPressLeft={() => navigation.navigate('FluxoCaixa')}
                        textRight='Dívida Líquida'
                        onPressRight={() => navigation.navigate('DividaLiquida')}
                    />

                    <ButtonsInLine
                        textLeft='ROE'
                        onPressLeft={() => navigation.navigate('Roe')}
                        textRight='ROA'
                        onPressRight={() => navigation.navigate('Roa')}
                    />

                    <ButtonsInLine
                        textLeft='ROIC'
                        onPressLeft={() => navigation.navigate('Roic')}
                        textRight='EBIT'
                        onPressRight={() => navigation.navigate('Ebit')}
                    />

                    <ButtonsInLine
                        textLeft='EBITDA'
                        onPressLeft={() => navigation.navigate('Ebitda')}
                        textRight='Preço/VPA'
                        onPressRight={() => navigation.navigate('PrecoVpa')}
                    />

                    <ButtonsInLine
                        textLeft='Preço/Lucro'
                        onPressLeft={() => navigation.navigate('PLucro')}
                        textRight='Dividend Yield'
                        onPressRight={() => navigation.navigate('DividendYield')}
                    />

                </ScrollView>
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