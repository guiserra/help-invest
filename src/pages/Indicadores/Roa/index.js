import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function Roa() {

    const url = "https://statusinvest.com.br/termos/d/dre";

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>
                            <Text style={[styles.contentBold, styles.shadow]}> ROA (Return on Assets)</Text> ou Retorno sobre o Ativo, é um índice
                            de rentabilidade de ativos que demonstra o quanto uma empresa é rentável em relação ao seu conjunto de ativos, é possível analisar a
                            qualidade da gestão financeira da empresa e sua eficiência no uso de ativos.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar o ROA?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Encontrar o ROA de uma empresa é muito importante para quem analisa ações
                        e precisa tomar decisões de investimento. Com ele, é possível entender como a margem de lucro aumenta ou diminui, além de
                        avaliar a gestão de capital de giro de uma companhia
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Para a gestão, esse indicador oferece informações para o controle de custos e despesas.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   É importante destacar que o ROA tem uma forte relação com a alavancagem financeira, já que
                        ela se refere à dívida na estrutura de capital da empresa para a compra de mais ativos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Uma empresa com grande alavancagem é aquela que recorre a bastante endividamento externo
                        para financiar seus ativos. Nesse sentido, saber qual é o Retorno sobre o Ativo nesse caso é extremamente importante para entender o grau
                        de alavancagem e, consequentemente, o lucro da empresa sobre cada um desses ativos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Quanto maior o ROA, mais a empresa está ganhando em seus ativos. Um baixo percentual, por
                        sua vez, significa que os ativos da empresa não são geridos eficientemente.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Vale destacar que, quando se fala em ativos que compõe o ROA, é
                        incluído tudo aquilo que compõe o patrimônio da empresa, como:
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>
                            •  Bens;{"\n"}
                        •  Créditos;{"\n"}
                        •  Direitos.
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>   É comum que o Retorno sobre Ativos seja utilizado tanto por empresas,
                        quanto por investidores da bolsa de valores para a análise fundamentalista de ações.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular o ROA?</Text>
                        <Text style={[styles.content, styles.shadow]}>   O cálculo do ROA depende de alguns componentes que fazem parte das
                        demonstrações financeiras das empresas.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   A fórmula para calcular o ROA é:
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>
                            <Text style={[styles.title, styles.shadow]}>   Retorno sobre o Ativo = Lucro Operacional / Ativo Total </Text>
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Para encontrar o Lucro Operacional, é preciso verificar o Demonstrativo do Resultado de
                        Exercício (DRE). Ao encontrar o Resultado Antes dos Resultados Financeiros e Tributos, é preciso subtrair esse valor do Imposto de Renda
                        e Contribuição Social sobre o Lucro.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Já para encontrar o valor do Ativo Total Médio, basta conferir o Balanço Patrimonial.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   O resultado do ROA é dado em porcentagem e deve ser comparado com valores anteriores da
                        empresa ou com percentuais de companhias do mesmo setor.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Exemplos de utilização do ROA</Text>
                        <Text style={[styles.content, styles.shadow]}>   Supondo que a soma total de ativos de uma empresa seja de R$20 milhões e que sua
                        receita seja de R$3 milhões com despesas de R$800 mil, sobrando R$2,2 milhões. Para encontrar o ROA nesse caso, basta preencher
                        os valores na fórmula:
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   ROA = 2.200.000 / 20.000.000 = 0,11
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Com um resultado de 11%, é possível concluir que esta empresa tem uma boa rentabilidade
                        dos seus ativos. Isso apenas comparando o resultado se todo o seu capital estivesse investido em um ativo de renda fixa com rentabilidade
                        líquida de 5,0% ao ano.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Limitações do ROA</Text>
                        <Text style={[styles.content, styles.shadow]}>   Apesar de ser um indicador de rentabilidade bastante eficiente, o ROA não é uma ferramenta
                        completa para a avaliação de investimentos. Isso porque, por utilizar os ativos fixos de uma empresa, ou seja, apenas fatores demonstrados
                        no balanço, ele não é suficiente para comparar as perspectivas de duas empresas, por exemplo.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Enquanto uma empresa “X” pode ter seu valor baseado em outros fatores, como sua marca, uma
                        empresa “Y” pode se destacar por suas informações contábeis. Nesse sentido, o ROA continua sendo um indicador útil para a avaliação de desempenho
                        de uma empresa a cada ano, mas para fins de comparação entre companhias, uma boa análise precisa de informações mais aprofundadas.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginBottom: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Deseja saber mais sobre DRE?</Text>
                        <Text style={[styles.content, styles.shadow]}>
                            <Text style={[styles.hyperlink, styles.shadow]} onPress={() => Linking.openURL(url)}>   Clique Aqui </Text>
                                para mais informações.
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