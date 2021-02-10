import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsIndicators from '../../components/ButtonsIndicators';

export default function Indicadores( { navigation } ){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"#151515"}}>
            <Animatable.View useNativeDriver>
                <ScrollView>

                    <ButtonsIndicators
                    coverLeft={require('../../../assets/buttons/indicadores/patrimonio-liquido.png')}
                    onPressLeft = { () => navigation.navigate('PLiquido') }
                    coverRight={require('../../../assets/buttons/indicadores/ebitda.png')}
                    onPressRight = { () => navigation.navigate('DividaBruta') }
                    />

                    <ButtonsIndicators
                    coverLeft={require('../../../assets/buttons/indicadores/fluxo-caixa.png')}
                    onPressLeft = { () => {} }
                    coverRight={require('../../../assets/buttons/indicadores/ebitda.png')}
                    onPressRight = { () => {} }
                    />

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}