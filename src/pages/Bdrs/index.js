import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';

export default function Bdrs({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View />
            <ScrollView>

                <Text style={styles.text}>Brazilian Depositary Receipts</Text>
                <ButtonsInLine
                    textLeft='Características'
                    onPressLeft={() => navigation.navigate('CaracteristicasBDR')}
                    textRight='Definição'
                    onPressRight={() => navigation.navigate('DefinicaoBdrs')}
                />
                <ButtonsInLine
                    textLeft='Indicadores'
                    onPressLeft={() => navigation.navigate('Indicadores')}
                    textRight='Lista de BDRs'
                    onPressRight={() => navigation.navigate('ListaBDR')}
                />
                <ButtonsInLine
                    textLeft='Tipos de BDRs'
                    onPressLeft={() => navigation.navigate('TiposBDR')}
                    textRight='Vantagens do Produto'
                    onPressRight={() => navigation.navigate('VantagensProdutoBDR')}
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
