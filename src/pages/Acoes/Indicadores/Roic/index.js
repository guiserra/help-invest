import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function Roic() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ROIC (Return Over Invested Capital),</Text> ou Retorno sobre o Capital
                            Investido, é uma métrica utilizada para informar, em termos percentuais, quanto dinheiro uma empresa consegue gerar em razão do capital investido, é possível
                            ter uma visão geral sobre a performance financeira de um negócio.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o ROIC?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Quando o retorno sobre investimento de uma empresa é analisado, é possível entender o
                        lucro que ela consegue gerar a partir do capital próprio e de terceiros que foi investido.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Nessa perspectiva, um ROIC elevado acaba sendo um sinal bastante positivo, indicando um
                        retorno maior e um bom trabalho de gestão financeira dentro da empresa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Por avaliar a empresa de forma geral, o ROIC considera retornos derivados de qualquer parte
                        do negócio. Portanto, ele representa o resultado do conjunto de atividades no lucro líquido, não permitindo a descoberta dos investimentos
                        com maior ou menor retorno.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o ROIC?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Seja para uma análise interna ou avaliação de empresa para investimento, fazer o cálculo
                        do ROIC não representa uma grande complexidade.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>  Para calcular o ROIC, são utilizados dois conceitos: o NOPAT e o Valor Contábil do Capital Investido.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Enquanto o NOPAT representa o lucro operacional após a distribuição de dividendos entre os acionistas,
                        o Valor Contábil é a soma de todo capital investido na empresa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Com essas informações, basta utilizar a seguinte fórmula do ROIC:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.title, globalStyles.shadow]}>                ROIC = NOPAT / Valor contábil </Text>
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Exemplos de utilização do ROIC</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para entender a aplicação do ROIC na análise de uma empresa, basta imaginar uma companhia
                        que, após uma estimativa de seus resultados financeiros, apresenta as seguintes informações:
                       </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            •  Lucro Operacional: R$20 milhões;{"\n"}
                        •  Valor Contábil do Capital Investido: R$80 milhões;{"\n"}
                        •  Dividendos: R$5 milhões..
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Com esses dados, é possível identificar que o NOPAT dessa empresa é igual a R$15 milhões.
                        Assim, basta dividi-lo pelo Valor Contábil investido no negócio.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   15.000.000 / 80.000.000 = 18,75%
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>  O parâmetro para avaliar se esse percentual é elevado ou não será o histórico da empresa e
                        de suas concorrentes do mesmo setor.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Vale ressaltar que esse é um dado bem relevante pois demonstra o retorno sobre capital
                        investido na empresa, mostrando muitas vezes qual companhia pode utilizar de forma mais eficiente o capital captado através de empréstimos,
                        financiamentos ou acionistas. Por isso, muitos investidores acabam utilizando esse indicador na decisão sobre qual empresa realizar um investimento.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Limitações do ROIC</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Apesar de ser um indicador bastante eficiente para a análise de Retorno sobre Capital Investido,
                        o ROIC possui suas limitações.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A principal delas é a sua abordagem geral dentro dos resultados financeiros da empresa, o que acaba
                        dificultando a identificação de investimentos que está aumentando ou diminuindo o percentual final.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para a gestão, essa característica do ROIC acaba dificultando a avaliação da geração de caixa do negócio.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Vale lembrar também que esse é apenas um indicador isolado. Por isso, o ROIC deve ser analisado junto com
                        outras informações relevantes sobre a empresa.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}