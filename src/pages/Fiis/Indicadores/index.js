import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <ScrollView>
                    <Text style={styles.text}>Indicadores</Text>
                    <ButtonsInLine
                        textLeft={`Área Bruta \nLocável (ABL)`}
                        onPressLeft={() => navigation.navigate('AreaBrutaLocavel')}
                        textRight='Dividend Yield'
                        onPressRight={() => navigation.navigate('DividendYield')}
                    />
                    <ButtonsInLine
                        textLeft='IFIX'
                        onPressLeft={() => navigation.navigate('Ifix')}
                        textRight='Liquidez Média Diária'
                        onPressRight={() => navigation.navigate('LiquidezDiaria')}
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