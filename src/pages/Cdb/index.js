import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import ButtonsInLine from '../../components/ButtonsInLine';

export default function Cdb({ navigation }) {

    const dados = [
        {
            "key": "1",
            "textLeft": "Características",
            "navigationLeft": "CaracteristicasCdb",
            "textRight": "Definição",
            "navigationRight": "DefinicaoCdb"
        },
        {
            "key": "2",
            "textLeft": "Desvantagens",
            "navigationLeft": "DesvantagensCdb",
            "textRight": "Lista de CDB",
            "navigationRight": "ListaCdb"
        },
        {
            "key": "3",
            "textLeft": "Tributação",
            "navigationLeft": "TributacaoCdb",
            "textRight": "Vantagens",
            "navigationRight": "VantagensCdb"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Certificado de Deposito Bancário</Text>
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
