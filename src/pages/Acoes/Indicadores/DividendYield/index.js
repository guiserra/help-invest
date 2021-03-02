import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function DividendYield() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   Dividend Yield (DY), que pode ser traduzido 
                        para o português como Rendimento de Dividendo, é um indicador que mede a performance da empresa 
                        de acordo com os proventos pagos aos seus acionistas. Ele mostra a relação entres os dividendos 
                        distribuídos e o preço atual da ação da empresa.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Esse indicador, como você verá logo mais, mensura 
                        o retorno da ação de acordo com o provento pago.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular o Dividend Yield?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Para saber como calcular o Dividend Yield é bem fácil: 
                        você deve dividir o valor de dividendos pagos em determinado período pelo preço individual da ação antes 
                        dessa distribuição de dividendos. Depois, basta multiplicar esse resultado por 100.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Que tal entender isso na prática? Veja a fórmula abaixo:
                        </Text>
                        <Text style={[styles.title, styles.shadow]}>   DY = Dividendos pagos por ação / Valor da ação x 100
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Para facilitar ainda mais o entendimento sobre a fórmula de DY, veja um exemplo:
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Imagine que um investidor tenha ações do Itaú em carteira e, neste ano, a empresa 
                        tenha pago R$5,00 de proventos por cada ação. Suponha que o preço do ativo estivesse em R$45. Neste caso, o DY seria de 11,1%.
                        </Text>
                        <Text style={[styles.title, styles.shadow]}>   R$5,00 dividido por R$45 = 0,111 vezes 100 = 11,1
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Esse percentual mostra que, nesse exemplo, cada ação  retornou 11,1% em dividendos 
                        Itaú neste período. É claro que este é apenas um exemplo para mostrar o potencial de investimento dos dividendos. E é importante 
                        lembrar que resultados do passado não são garantia de um resultado futuro.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Encontrar o valor do DY possibilita a comparação do rendimento dos dividendos entre 
                        empresas que um investidor esteja interessado em investir. Se busca por aquelas que pagam bons proventos, atente-se às empresas que 
                        possuam os maiores valores de Dividend Yield.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Mas não se esqueça: se o preço de uma ação estiver muito desvalorizado, o seu DY pode 
                        aparentar ser melhor do que realmente é.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Como o indicador varia inversamente à cotação do papel, os baixos valores podem dar à 
                        empresa a falsa impressão de boa pagadora de dividendos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   É fundamental ter muita atenção quando for analisar esse indicador. Ele deve ser utilizado 
                        para complementar uma análise muito mais profunda, isto é, não deve ser o único fator considerado na hora de decidir em quais ações investir.
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
