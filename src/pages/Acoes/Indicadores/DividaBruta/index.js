import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width
export default function DividaBruta() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles.text}>Dívida Bruta</Text>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>A
                            <Text style={[styles.contentBold, styles.shadow]}> Dívida Bruta</Text> é um valor composto pela
                            soma de todas as obrigações financeiras da empresa, isto é, todas as dívidas da instituição que
                            estão em aberto para serem devidamente quitadas. Devem ser levadas em consideração
                            as dívidas de curto e longo prazo.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar a dívida bruta? </Text>
                        <Text style={[styles.content, styles.shadow]}>A dívida bruta pode ser interpretada como um valor utilizado
                        para verificar o grau de endividamento de uma empresa. Assim, para conseguir interpretar a dívida bruta será
                        necessário somar todos os compromissos e obrigações da instituição.
                        {"\n"}
                            {"\n"}
                            <Text style={[styles.content, styles.shadow]}>Desse modo, será possível ter uma visão ampliada do modelo financeiro utilizado pela empresa que detém o
                            endividamento, como também, o analista conseguirá verificar as dívidas de curto, médio e longo prazo, que
                            foram adquiridas pela empresa. </Text>
                            {"\n"}
                            {"\n"}

                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular a Dívida Bruta?</Text>
                        <Text style={[styles.content, styles.shadow]}>Para calcular a dívida bruta é preciso coletar informações
                        relacionadas ao balanço patrimonial da empresa. Dessa forma, a dívida bruta é calculada mediante a soma das
                        dívidas da empresa durante um curto período de tempo, com as dívidas adquiridas para longo prazo.{"\n"}{"\n"}
                            <Text style={[styles.content, styles.shadow]}>Sendo assim, será possível verificar o endividamento da
                        empresa sobre seu patrimônio, através da seguinte fórmula: </Text>
                            {"\n"}
                            {"\n"}
                        DB = Divida Bruta; {"\n"}
                        DE = Divida da Empresa. {"\n"}

                        </Text>
                        <Text style={[styles.title, styles.shadow]}>DB = DE (Curto prazo) + DE (Longo prazo) </Text>

                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Limitações da Dívida Bruta</Text>
                        <Text style={[styles.content, styles.shadow]}>A dívida bruta possibilita que o analista consiga
                        avaliar o grau de endividamento da empresa, verificando o compromisso e as obrigações possuídas pela instituição.
                        {"\n"}
                            {"\n"}
                            <Text style={[styles.content, styles.shadow]}>Sendo assim, a dívida bruta está entre os principais valores no mercado financeiro utilizados para
                            verificar a saúde financeira da empresa de maneira mais assertiva. </Text>
                            {"\n"}
                            {"\n"}
                            <Text style={[styles.content, styles.shadow]}>Porém, a dívida bruta possui limitações, dessa forma, não é recomendado analisar esse valor de forma isolada,
                            e sim utilizar diversas ferramentas de análise, de forma simultânea e complementar. </Text>
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
        backgroundColor: '#313e6a',
        alignItems: 'center'
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
        color: '#000'
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#000'
    },
    topicContent: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#000'
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'justify',
        fontSize: 15,
        marginTop: 10,
        color: '#000'
    },
    contentBold: {
        fontFamily: 'Montserrat_500Medium',
        color: '#000',
        fontSize: 16
    },
    cardBoard: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#FFF',
        width: deviceWidth * 0.95,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
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
