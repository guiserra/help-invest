import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonsInLine from '../../../components/ButtonsInLine';
import ButtonSmall from '../../../components/ButtonSmall';

export default function IndicadoresCriptomoedas({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Acumulado de Agressão",
            "navigationLeft": "AcumuladoAgressao",
            "textRight": "Bandas de Bollinger",
            "navigationRight": "BandasBollinger"
        },
        {
            "key": "2",
            "textLeft": "Índice de Força Relativa (IFR)",
            "navigationLeft": "IFR",
            "textRight": "Média Móvel",
            "navigationRight": "MediaMovel"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores de Criptomoedas</Text>
                <ScrollView>
                    <View style={{ flexDirection: 'column', marginBottom: 150 }}>
                        <FlatList
                            data={dados}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => <ButtonsInLine
                                textLeft={item.textLeft}
                                onPressLeft={() => navigation.navigate(item.navigationLeft)}
                                textRight={item.textRight}
                                onPressRight={() => navigation.navigate(item.navigationRight)}
                            />
                            }
                            scrollEnabled={false}
                        />
                        <ButtonSmall
                            text='Volume'
                            onPress={() => navigation.navigate('Volume')}
                        />
                    </View>
                </ScrollView>
            </Animatable.View>
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