import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';

export default function Bdrs({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": () => navigation?.navigate("CaracteristicasBDR"),
            "colorLeft": "#d1286d",
            "textRight": "Definição",
            "navigationRight": () => navigation?.navigate("DefinicaoBdrs"),
            "colorRight": "#d1286d"
        },
        {
            "key": "2",
            "textLeft": "Indicadores",
            "navigationLeft": () => navigation?.navigate("Indicadores"),
            "colorLeft": "#d1286d",
            "textRight": "Lista de BDR",
            "navigationRight": () => navigation?.navigate("ListaBDR"),
            "colorRight": "#d1286d"
        },
        {
            "key": "3",
            "textLeft": "Tipos de BDR",
            "navigationLeft": () => navigation?.navigate("TiposBDR"),
            "colorLeft": "#d1286d",
            "textRight": "Vantagens do Produto",
            "navigationRight": () => navigation?.navigate("VantagensProdutoBDR"),
            "colorRight": "#d1286d"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <View />
            <Text style={styles.text}>Brazilian Depositary Receipts</Text>

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
                scrollEnabled={false}
            />

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
    }
});
