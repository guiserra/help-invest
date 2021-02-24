import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../components/ButtonsInLine';

export default function Acoes({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <View style={{ marginTop: 10 }} />
            <Animatable.View useNativeDriver>
                <ScrollView>

                    <ButtonsInLine
                        coverLeft={require('../../../assets/buttons/acoes/indicadores.png')}
                        onPressLeft={() => navigation.navigate('Indicadores')}
                        coverRight={require('../../../assets/buttons/acoes/indicadores/divida-bruta.png')}
                        onPressRight={() => navigation.navigate('DividaBruta')}
                    />

                    <ButtonsInLine
                        coverLeft={require('../../../assets/buttons/acoes/indicadores.png')}
                        onPressLeft={() => navigation.navigate('Indicadores')}
                        coverRight={require('../../../assets/buttons/acoes/indicadores/divida-bruta.png')}
                        onPressRight={() => navigation.navigate('DividaBruta')}
                    />

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}