import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonSmall from '../../components/ButtonSmall';

export default function Criptomoedas({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": () => { },
            "colorLeft": "#8d8d8d",
            "textRight": "Definição",
            "navigationRight": () => { },
            "colorRight": "#8d8d8d"
        },
        {
            "key": "2",
            "textLeft": "Indicadores",
            "navigationLeft": () => navigation?.navigate("Indicadores"),
            "colorLeft": "#d1286d",
            "textRight": "Lista de Criptomoedas",
            "navigationRight": () => navigation?.navigate("ListaCriptomoedas"),
            "colorRight": "#d1286d"
        },
        {
            "key": "3",
            "textLeft": "Tipos de Criptomoedas",
            "navigationLeft": () => { },
            "colorLeft": "#8d8d8d",
            "textRight": "Vantagens dos Produto",
            "navigationRight": () => { },
            "colorRight": "#8d8d8d"
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
                    backgroundColor={"#8d8d8d"}
                    text='Tributação'
                    onPress={() => { }}
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
