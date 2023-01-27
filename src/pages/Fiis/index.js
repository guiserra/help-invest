import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonSmall from '../../components/ButtonSmall';

export default function Fiis({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": () => navigation?.navigate("CaracteristicasFiis"),
            "colorLeft": "#d1286d",
            "textRight": "Definição",
            "navigationRight": () => navigation?.navigate("DefinicaoFiis"),
            "colorRight": "#d1286d"
        },
        {
            "key": "2",
            "textLeft": "Indicadores",
            "navigationLeft": () => navigation?.navigate("IndicadoresFii"),
            "colorLeft": "#d1286d",
            "textRight": "Lista de FII",
            "navigationRight": () => navigation?.navigate("ListaFiis"),
            "colorRight": "#d1286d"
        },
        {
            "key": "3",
            "textLeft": "Tipos de FII",
            "navigationLeft": () => navigation?.navigate("TiposFiis"),
            "colorLeft": "#d1286d",
            "textRight": "Vantagens do Produto",
            "navigationRight": () => navigation?.navigate("VantagensProdutoFiis"),
            "colorRight": "#d1286d"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Fundos de Investimento Imobiliário</Text>
            <View style={{ flexDirection: 'column' }}>
                <FlatList
                    style={{ marginBottom: 53 }}
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) =>
                        <ButtonsInLine
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
                <ButtonSmall
                    backgroundColor={"#d1286d"}
                    text='Tributação'
                    onPress={() => navigation.navigate('TributacaoFii')}
                />
            </View>
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
