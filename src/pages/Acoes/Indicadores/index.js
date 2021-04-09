import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

export default function Indicadores({ navigation }) {


    const dados = [
        {
            "key": "1",
            "textLeft": "Absenteísmo e turnover",
            "navigationLeft": () => navigation?.navigate("AbsTurnover"),
            "colorLeft": "#d1286d",
            "textRight": "ADX",
            "navigationRight": () => navigation?.navigate("Adx"),
            "colorRight": "#d1286d"
        },
        {
            "key": "2",
            "textLeft": "Divida Bruta",
            "navigationLeft": () => navigation?.navigate("DividaBruta"),
            "colorLeft": "#d1286d",
            "textRight": "Divida Liquida",
            "navigationRight": () => navigation?.navigate("DividaLiquida"),
            "colorRight": "#d1286d"
        },
        {
            "key": "3",
            "textLeft": "Dividend Yield",
            "navigationLeft": () => navigation?.navigate("DividendYield"),
            "colorLeft": "#d1286d",
            "textRight": "Ebit",
            "navigationRight": () => navigation?.navigate("Ebit"),
            "colorRight": "#d1286d"
        },
        {
            "key": "4",
            "textLeft": "Ebitda",
            "navigationLeft": () => navigation?.navigate("Ebitda"),
            "colorLeft": "#d1286d",
            "textRight": "Fluxo de Caixa",
            "navigationRight": () => navigation?.navigate("FluxoCaixa"),
            "colorRight": "#d1286d"
        },
        {
            "key": "5",
            "textLeft": "Patrimonio Liquido",
            "navigationLeft": () => navigation?.navigate("PatrimonioLiquido"),
            "colorLeft": "#d1286d",
            "textRight": "Preço / Valor Patrimonial",
            "navigationRight": () => navigation?.navigate("PrecoValorPatrimonial"),
            "colorRight": "#d1286d"
        },
        {
            "key": "6",
            "textLeft": "ROA",
            "navigationLeft": () => navigation?.navigate("Roa"),
            "colorLeft": "#d1286d",
            "textRight": "Roic",
            "navigationRight": () => navigation?.navigate("Roic"),
            "colorRight": "#d1286d"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores</Text>
                    <View style={{ flexDirection: 'column', marginBottom: 150 }}>
                        <FlatList
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
                            scrollEnabled={true}
                        />
                        <Text style={styles.title}>Em breve mais indicadores.</Text>
                    </View>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313e6a'
    },
    text: {
        fontFamily: 'Righteous_400Regular',
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.2,
        padding: 10
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#FFF',
        marginTop: 15
    }
});