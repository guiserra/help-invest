import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonSmall from '../../components/ButtonSmall';

export default function Criptomoedas({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": "CaracteristicasCriptomoedas",
            "textRight": "Definição",
            "navigationRight": "DefinicaoCriptomoedas"
        },
        {
            "key": "2",
            "textLeft": "Indicadores",
            "navigationLeft": "Indicadores",
            "textRight": "Lista de Criptomoedas",
            "navigationRight": "ListaCriptomoedas"
        },
        {
            "key": "3",
            "textLeft": "Tipos de Criptomoedas",
            "navigationLeft": "TiposETFs",
            "textRight": "Vantagens e Desvantagens",
            "navigationRight": "VantagensDesvantagensCriptomoedas"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Criptomoedas</Text>
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
                    onPress={() => navigation.navigate('TributacaoCriptomoedas')}
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
