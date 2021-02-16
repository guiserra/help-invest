import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function Ebit() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   O
                            <Text style={[styles.contentBold, styles.shadow]}> EBIT, ou Earnings Before Interest and Taxes,</Text>  é um indicador que 
                            demonstra o lucro da empresa antes do reconhecimento de suas despesas com juros e impostos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Em português, o
                            <Text style={[styles.contentBold, styles.shadow]}> EBIT</Text>  é chamado de LAJIR, ou Lucro Antes de Juros e Impostos. Através dele, 
                            é possível entender melhor os resultados operacionais informados no Demonstrativo de Resultados de exercício (DRE) de uma companhia.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar o EBIT?</Text>
                        <Text style={[styles.content, styles.shadow]}>   O <Text style={[styles.contentBold, styles.shadow]}> EBIT</Text> pode ser uma métrica 
                        bastante útil para quem deseja avaliar uma companhia listada na bolsa de valores. A partir dos seus valores, é possível identificar o 
                        real lucro da empresa em seus resultados operacionais.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Isso porque esse indicador traduz os ganhos e perdas da empresa para que ela consiga 
                        exercer sua atividade principal. Sendo assim, fica mais fácil entender qual o verdadeiro lucro da empresa em seus resultados operacionais, 
                        sem considerar juros ou imposto de renda a serem pagos, mas incluindo depreciações e amortizações no cálculo.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular o EBIT?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Para fazer o cálculo do <Text style={[styles.contentBold, styles.shadow]}> EBIT</Text> é 
                        necessário lembrar que esse indicador representa o lucro da empresa antes do pagamento de juros e impostos. Portanto, basta somar os encargos 
                        líquidos, impostos sobre lucros e encargos financeiros de financiamento, a partir da seguinte fórmula:
                        </Text>                        
                        <Text style={[styles.content, styles.shadow]}>
                            <Text style={[styles.title, styles.shadow]}>    EBIT = Lucro Líquido + Resultado Financeiro + Impostos </Text>
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Para encontrar essas informações, basta consultar o Demonstrativo de Resultados do Exercício (DRE) da 
                        empresa em questão. Esse documento contábil é divulgado trimestralmente pelas companhias de capital aberto na bolsa de valores.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Exemplos de utilização do EBIT</Text>
                        <Text style={[styles.content, styles.shadow]}>   Vamos supor que, ao analisar o DRE de uma empresa “X”, um investidor encontra os seguintes dados 
                        relacionados ao 4º trimestre:
                       </Text>

                        <Text style={[styles.content, styles.shadow]}>
                        •  Lucro Líquido: 343.143;{"\n"}
                        •  Impostos: -98.448;{"\n"}
                        •  Despesas Financeiras: – 61.836;{"\n"}
                        •  Receitas Financeiras: 31.387.
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>   Com isso, deve-se encontrar o resultado financeiro líquido da empresa a partir da soma entre as despesas 
                        financeiras a receita financeira (juros que a empresa recebe).
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Assim, obtém-se o seguinte resultado:
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Resultado Financeiro = – 61.836 + 31.387
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Resultado Financeiro = – 30.449
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Nesse momento, com o resultado financeiro líquido em mãos, basta fazer o cálculo do EBIT da seguinte forma:
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   EBIT = 343.143 + 30.449 + 98.448
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   EBIT = 472.040
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Vantagens do EBIT</Text>
                        <Text style={[styles.content, styles.shadow]}>   Após entender como analisar e calcular o indicador 
                        <Text style={[styles.contentBold, styles.shadow]}> EBIT</Text>, é necessário saber quais as vantagens que esse 
                        múltiplo oferece para a análise de resultados de uma empresa. Inicialmente, é possível destacar que o 
                        <Text style={[styles.contentBold, styles.shadow]}> EBIT</Text> serve para medir a eficiência operacional de uma companhia.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Isso porque ele desconsidera efeitos que não têm ligação direta com a atividade principal da companhia, como seus 
                        resultados financeiros. E com isso, o LAJIR é capaz de mostrar com precisão ao investidor como a companhia está lucrando em relação às suas operações como um todo.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Outro ponto positivo é que o 
                        <Text style={[styles.contentBold, styles.shadow]}> EBIT</Text> torna mais fácil para os investidores a análise comparativa. Por desconsiderar o 
                        efeito dos juros e dos impostos, ele permite que empresas semelhantes sejam comparadas mesmo que sejam de países diferentes.
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