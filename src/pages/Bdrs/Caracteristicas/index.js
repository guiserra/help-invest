import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

export default function Caracteristicas() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>BDR's Patrocinados</Text>
                        <Text style={[styles.subtitle, styles.shadow]}>Código de Negociação</Text>
                        <Text style={[styles.content, styles.shadow]}>
                            XXXXYY {"\n"}
                            XXXX = 04 letras maiúsculas que representam o nome da empresa{"\n"}
                            YY = número que representa o BDR P Nível I{"\n"}
                            {"\n"}
                            XXXX32{"\n"}
                            XXXX = 04 letras maiúsculas que representam o nome da empresa{"\n"}
                            32 = número que representa o BDR P Nível II{"\n"}
                            {"\n"}
                            XXXX33{"\n"}
                            XXXX = 04 letras maiúsculas que representam o nome da empresa{"\n"}
                            33 = número que representa o BDR P Nível III{"\n"}
                            {"\n"}
                        </Text>
                        <Text style={[styles.subtitle, styles.shadow]}>Características Técnicas</Text>
                        <Text style={[styles.content, styles.shadow]}>  A cotação é feita da seguinte maneira, Reais por BDR P, com 02 casas decimais.
                            A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                            padrão é de 1 BDR.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>BDR's Não Patrocinados</Text>
                        <Text style={[styles.subtitle, styles.shadow]}>Código de Negociação</Text>
                        <Text style={[styles.content, styles.shadow]}>
                            XXXX34 ou 35 {"\n"}
                            XXXX = 04 letras maiúsculas que representam o nome da empresa{"\n"}
                            34 ou 35 = número que representa o BDR Não Patrocinado Nível I{"\n"}
                            {"\n"}
                        </Text>
                        <Text style={[styles.subtitle, styles.shadow]}>Características Técnicas</Text>
                        <Text style={[styles.content, styles.shadow]}>  A cotação é feita da seguinte maneira, Reais por BDR NP, com 02 casas decimais.
                            A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                            padrão é de 1 BDR.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>BDR de ETF</Text>
                        <Text style={[styles.subtitle, styles.shadow]}>Código de Negociação</Text>
                        <Text style={[styles.content, styles.shadow]}>
                            XXXX39{"\n"}
                            XXXX = 04 letras maiúsculas que representam o nome da empresa{"\n"}
                            39 = número que representa o BDR de ETF{"\n"}
                            {"\n"}
                        </Text>
                        <Text style={[styles.subtitle, styles.shadow]}>Características Técnicas</Text>
                        <Text style={[styles.content, styles.shadow]}>  A cotação é feita da seguinte maneira, Reais por BDR de ETF, com 02 casas decimais.
                            A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                            padrão é de 1 BDR.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#FFF'
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF'
    },
    cardBoard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#2f3c6f'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#FFF'
    }
});