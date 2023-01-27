import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../components/ButtonsInLine';

export default function Acoes({ navigation }) {


    const dados = [
        {
            "key": "1",
            "textLeft": "Definição",
            "navigationLeft": () => navigation?.navigate("DefinicaoAcao"),
            "colorLeft": "#d1286d",
            "textRight": "Indicadores",
            "navigationRight": () => navigation?.navigate("Indicadores"),
            "colorRight": "#d1286d"
        },
        {
            "key": "2",
            "textLeft": "Dividendos",
            "navigationLeft": () => { },
            "colorLeft": "#8d8d8d",
            "textRight": "Tipos",
            "navigationRight": () => { },
            "colorRight": "#8d8d8d"
        }];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores</Text>

                <FlatList
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <ButtonsInLine
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
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Righteous_400Regular',
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.1,
        padding: 10
    }
});