import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function DividaBruta() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   A
                            <Text style={[styles.contentBold, styles.shadow]}> Dívida Bruta</Text> é um valor composto pela
                            soma de todas as obrigações financeiras da empresa, isto é, todas as dívidas da instituição que
                            estão em aberto para serem devidamente quitadas. Ressaltando que, devem ser levadas em consideração
                            as dívidas de curto e longo prazo.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Utilizado para verificar a saúde financeira e o grau de
                        endividamento das empresas, o conceito de <Text style={[styles.contentBold, styles.shadow]}> dívida bruta</Text>,
                        também pode ser relacionado às dívidas que são adquiridas pela empresa para financiar o capital de giro da
                        instituição ou expandir seus negócios e operações.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Sendo assim, a empresa pode formar um inventário contábil
                        do quantitativo de dívidas que devem ser geridas, buscando um planejamento financeiro empresarial, para
                        quitar tanto dívidas já realizadas, como obrigações futuras.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular a Dívida Bruta?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Para calcular a dívida bruta é preciso coletar informações 
                        relacionadas ao balanço patrimonial da empresa. Dessa forma, a dívida bruta é calculada mediante a soma das 
                        dívidas da empresa durante um curto período de tempo, com as dívidas adquiridas para longo prazo.

                        Sendo assim, será possível verificar o endividamento da empresa sobre seu patrimônio, através da seguinte fórmula:
                        </Text>
                        <Text style={[styles.title, styles.shadow]}>Dívida bruta = Dívidas da empresa (Curto prazo) + Dívidas da empresa (Longo prazo) </Text>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
    },
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    hyperlink: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#ff0000'
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#FFF'
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#FFF'
    },
    topicContent: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF'
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF'
    },
    contentBold: {
        fontFamily: 'Montserrat_500Medium',
        color: '#FFF',
        fontSize: 16
    },
    cardBoard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#2f3c6f'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});