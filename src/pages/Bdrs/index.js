import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';

export default function Bdrs({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ButtonsInLine
                    coverLeft={require('../../../assets/buttons/bdr/definicao.png')}
                    onPressLeft={() => navigation.navigate('Definicao')}
                    coverRight={require('../../../assets/buttons/bdr/tipos-disponiveis.png')}
                    onPressRight={() => navigation.navigate('TiposBDR')}
                />
                <ButtonsInLine
                    coverLeft={require('../../../assets/buttons/bdr/indicadores.png')}
                    onPressLeft={() => navigation.navigate('Indicadores')}
                    coverRight={require('../../../assets/buttons/bdr/lista-bdrs.png')}
                    onPressRight={() => navigation.navigate('ListaBDR')}
                />
                <ButtonsInLine
                    coverLeft={require('../../../assets/buttons/bdr/caracteristicas-tecnicas.png')}
                    onPressLeft={() => navigation.navigate('Caracteristicas')}
                    coverRight={require('../../../assets/buttons/bdr/vantagens-produto.png')}
                    onPressRight={() => navigation.navigate('VantagensProduto')}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
});
