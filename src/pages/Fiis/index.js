import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';

export default function Fiis({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View />
            <ScrollView>

                <Text style={styles.text}>Fundos de Investimento Imobiliário</Text>

                <ButtonsInLine
                    textLeft='Definição'
                    onPressLeft={() => navigation.navigate('DefinicaoFiis')}
                    textRight='Tipos de BDRs'
                    onPressRight={() => navigation.navigate('TiposFiis')}
                />
                <ButtonsInLine
                    textLeft='Indicadores'
                    onPressLeft={() => navigation.navigate('Indicadores')}
                    textRight='Lista de BDRs'
                    onPressRight={() => navigation.navigate('ListaFiis')}
                />
                <ButtonsInLine
                    textLeft='Características'
                    onPressLeft={() => navigation.navigate('CaracteristicasFiis')}
                    textRight='Vantagens do Produto'
                    onPressRight={() => navigation.navigate('VantagensProdutoFiis')}
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
