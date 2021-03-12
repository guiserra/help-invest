import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {

    const dados = [{ textLeft: `Área Bruta \nLocável (ABL)`, navigationLeft: 'AreaBrutaLocavel', textRight: 'Dividend Yield', navigationRight: 'DividendYield' },
    { textLeft: 'IFIX', navigationLeft: 'Ifix', textRight: 'Liquidez Média Diária', navigationRight: 'LiquidezDiaria' }];

    function renderButtons() {
        return (
            dados.map((dado, index) =>
                <ButtonsInLine key={index}
                    textLeft={dado.textLeft}
                    onPressLeft={() => navigation.navigate(dado.navigationLeft)}

                    textRight={dado.textRight}
                    onPressRight={() => navigation.navigate(dado.navigationRight)}
                />
            )
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <ScrollView>
                    <Text style={styles.text}>Indicadores</Text>

                    {renderButtons()}

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