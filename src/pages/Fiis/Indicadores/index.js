import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Área Bruta \nLocável (ABL)",
            "navigationLeft": "AreaBrutaLocavel",
            "textRight": "Dividend Payout Ratio",
            "navigationRight": "DividendPayoutRatio"
        },
        {
            "key": "2",
            "textLeft": "Dividend Yield",
            "navigationLeft": "DividendYield",
            "textRight": "IFIX",
            "navigationRight": "Ifix"
        },
        {
            "key": "3",
            "textLeft": "Liquidez Média \nDiária",
            "navigationLeft": "LiquidezDiaria",
            "textRight": "P/VP",
            "navigationRight": "PrecoValorPatrimonial"
        },
        {
            "key": "4",
            "textLeft": "Patrimônio Líquido",
            "navigationLeft": "PatrimonioLiquido",
            "textRight": "Rentabilidade",
            "navigationRight": "Rentabilidade"
        },
        {
            "key": "5",
            "textLeft": "Taxa de \nOcupação",
            "navigationLeft": "TaxaOcupacao",
            "textRight": "Vacância",
            "navigationRight": "Vacancia"
        },
        {
            "key": "6",
            "textLeft": "IPO",
            "navigationLeft": "IPO",
            "textRight": "Vacância",
            "navigationRight": "Vacancia"
        }];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores</Text>

                <FlatList
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <ButtonsInLine
                        textLeft={item.textLeft}
                        onPressLeft={() => navigation.navigate(item.navigationLeft)}
                        textRight={item.textRight}
                        onPressRight={() => navigation.navigate(item.navigationRight)}
                    />
                    }
                    scrollEnabled={false}
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