import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonsSmall from '../../components/ButtonSmall';

export default function Fiis({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View />
            <ScrollView>

                <Text style={styles.text}>Fundos de Investimento Imobiliário</Text>

                <ButtonsInLine
                    textLeft='Características'
                    onPressLeft={() => navigation.navigate('CaracteristicasFiis')}
                    textRight='Definição'
                    onPressRight={() => navigation.navigate('DefinicaoFiis')}
                />
                <ButtonsInLine
                    textLeft='Indicadores'
                    onPressLeft={() => navigation.navigate('IndicadoresFii')}
                    textRight='Lista de FII'
                    onPressRight={() => navigation.navigate('ListaFiis')}
                />
                <ButtonsInLine
                    textLeft='Tipos de FII'
                    onPressLeft={() => navigation.navigate('TiposFiis')}
                    textRight='Vantagens do Produto'
                    onPressRight={() => navigation.navigate('VantagensProdutoFiis')}
                />
                <ButtonSmall
                    text='Tributação'
                    onPress={() => navigation.navigate('TributacaoFii')}
                />
            </ScrollView>
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
