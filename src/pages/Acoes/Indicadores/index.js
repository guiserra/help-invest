import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <ScrollView>
                    <Text style={styles.text}>Indicadores</Text>
                    <ButtonsInLine
                        textLeft='Dívida Bruta'
                        onPressLeft={() => navigation.navigate('DividaBruta')}
                        textRight='Dívida Líquida'
                        onPressRight={() => navigation.navigate('DividaLiquida')}
                    />

                    <ButtonsInLine
                        textLeft='Dividend Yield'
                        onPressLeft={() => navigation.navigate('DividendYield')}
                        textRight='DL/Ebitda'
                        onPressRight={() => navigation.navigate('DlEbitda')}
                    />

                    <ButtonsInLine
                        textLeft='DL/PL'
                        onPressLeft={() => navigation.navigate('Dlpl')}
                        textRight='EBIT'
                        onPressRight={() => navigation.navigate('Ebit')}
                    />

                    <ButtonsInLine
                        textLeft='EBITDA'
                        onPressLeft={() => navigation.navigate('Ebitda')}
                        textRight='Fluxo de Caixa'
                        onPressRight={() => navigation.navigate('FluxoCaixa')}
                    />

                    <ButtonsInLine
                        textLeft='Indice de Distribuição'
                        onPressLeft={() => navigation.navigate('IndiceDistribuicao')}
                        textRight='Indice de Liquidez'
                        onPressRight={() => navigation.navigate('IndiceLiquidez')}
                    />

                    <ButtonsInLine
                        textLeft='Margem Bruta'
                        onPressLeft={() => navigation.navigate('MargemBruta')}
                        textRight='Margem Ebitda'
                        onPressRight={() => navigation.navigate('MargemEbitda')}
                    />

                    <ButtonsInLine
                        textLeft='Margem Liquida'
                        onPressLeft={() => navigation.navigate('MargemLiquida')}
                        textRight='NPS'
                        onPressRight={() => navigation.navigate('Nps')}
                    />

                    <ButtonsInLine
                        textLeft='Patrimônio Líquido'
                        onPressLeft={() => navigation.navigate('PLiquido')}
                        textRight='Preço/Lucro'
                        onPressRight={() => navigation.navigate('PLucro')}
                    />

                    <ButtonsInLine
                        textLeft='Preço/VPA'
                        onPressLeft={() => navigation.navigate('PrecoVpa')}
                        textRight='ROA'
                        onPressRight={() => navigation.navigate('Roa')}
                    />

                    <ButtonsInLine
                        textLeft='ROE'
                        onPressLeft={() => navigation.navigate('Roe')}
                        textRight='ROIC'
                        onPressRight={() => navigation.navigate('Roic')}
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