import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <View style={{ marginTop: 10 }}/>
            <Animatable.View useNativeDriver>
                <ScrollView>

                    <ButtonsInLine
                        coverLeft={require('../../../../assets/buttons/acoes/indicadores/patrimonio-liquido.png')}
                        onPressLeft={() => navigation.navigate('PLiquido')}
                        coverRight={require('../../../../assets/buttons/acoes/indicadores/divida-bruta.png')}
                        onPressRight={() => navigation.navigate('DividaBruta')}
                    />

                    <ButtonsInLine
                        coverLeft={require('../../../../assets/buttons/acoes/indicadores/fluxo-caixa.png')}
                        onPressLeft={() => navigation.navigate('FluxoCaixa')}
                        coverRight={require('../../../../assets/buttons/acoes/indicadores/divida-liquida.png')}
                        onPressRight={() => navigation.navigate('DividaLiquida')}
                    />

                    <ButtonsInLine
                        coverLeft={require('../../../../assets/buttons/acoes/indicadores/roe.png')}
                        onPressLeft={() => navigation.navigate('Roe')}
                        coverRight={require('../../../../assets/buttons/acoes/indicadores/roa.png')}
                        onPressRight={() => navigation.navigate('Roa')}
                    />

                    <ButtonsInLine
                        coverLeft={require('../../../../assets/buttons/acoes/indicadores/roic.png')}
                        onPressLeft={() => navigation.navigate('Roic')}
                        coverRight={require('../../../../assets/buttons/acoes/indicadores/ebit.png')}
                        onPressRight={() => navigation.navigate('Ebit')}
                    />

                    <ButtonsInLine
                        coverLeft={require('../../../../assets/buttons/acoes/indicadores/ebitda.png')}
                        onPressLeft={() => navigation.navigate('Ebitda')}
                        coverRight={require('../../../../assets/buttons/acoes/indicadores/preco-vpa.png')}
                        onPressRight={() => navigation.navigate('PrecoVpa')}
                    />

                    <ButtonsInLine
                        coverLeft={require('../../../../assets/buttons/acoes/indicadores/ebitda.png')}
                        onPressLeft={() => navigation.navigate('PLucro')}
                        coverRight={require('../../../../assets/buttons/acoes/indicadores/preco-vpa.png')}
                        onPressRight={() => navigation.navigate('DividendYield')}
                    />

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}