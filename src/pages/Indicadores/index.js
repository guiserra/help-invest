import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsIndicators from '../../components/ButtonsIndicators';

export default function Indicadores({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <Animatable.View useNativeDriver>
                <ScrollView>

                    <ButtonsIndicators
                        coverLeft={require('../../../assets/buttons/indicadores/patrimonio-liquido.png')}
                        onPressLeft={() => navigation.navigate('PLiquido')}
                        coverRight={require('../../../assets/buttons/indicadores/divida-bruta.png')}
                        onPressRight={() => navigation.navigate('DividaBruta')}
                    />

                    <ButtonsIndicators
                        coverLeft={require('../../../assets/buttons/indicadores/fluxo-caixa.png')}
                        onPressLeft={() => navigation.navigate('FluxoCaixa')}
                        coverRight={require('../../../assets/buttons/indicadores/divida-liquida.png')}
                        onPressRight={() => navigation.navigate('DividaLiquida')}
                    />

                    <ButtonsIndicators
                        coverLeft={require('../../../assets/buttons/indicadores/roe.png')}
                        onPressLeft={() => navigation.navigate('Roe')}
                        coverRight={require('../../../assets/buttons/indicadores/roa.png')}
                        onPressRight={() => navigation.navigate('Roa')}
                    />

                    <ButtonsIndicators
                        coverLeft={require('../../../assets/buttons/indicadores/roic.png')}
                        onPressLeft={() => navigation.navigate('Roic')}
                        coverRight={require('../../../assets/buttons/indicadores/ebit.png')}
                        onPressRight={() => navigation.navigate('Ebit')}
                    />

                    <ButtonsIndicators
                        coverLeft={require('../../../assets/buttons/indicadores/ebitda.png')}
                        onPressLeft={() => { }}
                        coverRight={require('../../../assets/buttons/indicadores/preco-vpa.png')}
                        onPressRight={() => { }}
                    />

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}