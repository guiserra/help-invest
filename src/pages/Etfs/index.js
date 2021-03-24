import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonSmall from '../../components/ButtonSmall';

export default function Etfs({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": "CaracteristicasFiis",
            "textRight": "Definição",
            "navigationRight": "DefinicaoFiis"
        },
        {
            "key": "2",
            "textLeft": "Indicadores",
            "navigationLeft": "IndicadoresFii",
            "textRight": "Lista de ETF",
            "navigationRight": "ListaFiis"
        },
        {
            "key": "3",
            "textLeft": "Tipos de ETF",
            "navigationLeft": "TiposETFs",
            "textRight": "Vantagens do Produto",
            "navigationRight": "VantagensProdutoFiis"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Exchange Traded Funds</Text>
            <View style={{ flexDirection: 'column' }}>
                <FlatList
                    style={{ marginBottom: 53 }}
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) =>
                        <ButtonsInLine
                            textLeft={item.textLeft}
                            onPressLeft={() => navigation.navigate(item.navigationLeft)}
                            textRight={item.textRight}
                            onPressRight={() => navigation.navigate(item.navigationRight)}
                        />
                    }
                    scrollEnabled={false}
                />
                <ButtonSmall
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
