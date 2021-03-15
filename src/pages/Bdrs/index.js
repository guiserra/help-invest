import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';

export default function Bdrs({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": "CaracteristicasBDR",
            "textRight": "Definição",
            "navigationRight": "DefinicaoBdrs"
        },
        {
            "key": "2",
            "textLeft": "Indicadores",
            "navigationLeft": "Indicadores",
            "textRight": "Lista de BDR",
            "navigationRight": "ListaBDR"
        },
        {
            "key": "3",
            "textLeft": "Tipos de BDR",
            "navigationLeft": "TiposBDR",
            "textRight": "Vantagens do Produto",
            "navigationRight": "VantagensProdutoBDR"
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
                    onPressLeft={() => navigation.navigate(item.navigationLeft)}
                    textRight={item.textRight}
                    onPressRight={() => navigation.navigate(item.navigationRight)}
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
