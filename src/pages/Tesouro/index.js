import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonSmall from '../../components/ButtonSmall';

export default function Tesouro({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": "CaracteristicasTesouro",
            "textRight": "Definição",
            "navigationRight": "DefinicaoTesouro"
        },
        {
            "key": "2",
            "textLeft": "Desvantagens",
            "navigationLeft": "IndicadoresFii",
            "textRight": "Tipos de Tesouro",
            "navigationRight": "TiposTesouro"
        },
        {
            "key": "3",
            "textLeft": "Tributação",
            "navigationLeft": "ListaFiis",
            "textRight": "Vantagens",
            "navigationRight": "VantagensProdutoFiis"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Tesouro Nacional</Text>
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
