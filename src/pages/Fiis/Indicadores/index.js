import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Área Bruta \nLocável (ABL)",
            "navigationLeft": () => navigation?.navigate("AreaBrutaLocavel"),
            "colorLeft": "#d1286d",
            "textRight": "Dividend Payout Ratio",
            "navigationRight": () => navigation?.navigate("DividendPayoutRatio"),
            "colorRight": "#d1286d"
        },
        {
            "key": "2",
            "textLeft": "Dividend Yield",
            "navigationLeft": () => navigation?.navigate("DividendYield"),
            "colorLeft": "#d1286d",
            "textRight": "IFIX",
            "navigationRight": () => navigation?.navigate("Ifix"),
            "colorRight": "#d1286d"
        },
        {
            "key": "3",
            "textLeft": "Liquidez Média \nDiária",
            "navigationLeft": () => navigation?.navigate("LiquidezDiaria"),
            "colorLeft": "#d1286d",
            "textRight": "P/VP",
            "navigationRight": () => navigation?.navigate("PrecoValorPatrimonial"),
            "colorRight": "#d1286d"
        },
        {
            "key": "4",
            "textLeft": "Patrimônio Líquido",
            "navigationLeft": () => navigation?.navigate("PatrimonioLiquido"),
            "colorLeft": "#d1286d",
            "textRight": "Rentabilidade",
            "navigationRight": () => navigation?.navigate("Rentabilidade"),
            "colorRight": "#d1286d"
        },
        {
            "key": "5",
            "textLeft": "Taxa de \nOcupação",
            "navigationLeft": () => navigation?.navigate("TaxaOcupacao"),
            "colorLeft": "#d1286d",
            "textRight": "Vacância",
            "navigationRight": () => navigation?.navigate("Vacancia"),
            "colorRight": "#d1286d"
        },
        {
            "key": "6",
            "textLeft": "IPO",
            "navigationLeft": () => navigation?.navigate("IPO"),
            "colorLeft": "#d1286d",
            "textRight": "Valor Patrimonial",
            "navigationRight": () => navigation?.navigate("ValorPatrimonial"),
            "colorRight": "#d1286d"
        }];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores</Text>

                <FlatList
                    style={{ paddingBottom: 70 }}
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <ButtonsInLine
                        textLeft={item.textLeft}
                        onPressLeft={item.navigationLeft}
                        backgroundColorLeft={item.colorLeft}
                        textRight={item.textRight}
                        onPressRight={item.navigationRight}
                        backgroundColorRight={item.colorRight}
                    />
                    }
                />
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