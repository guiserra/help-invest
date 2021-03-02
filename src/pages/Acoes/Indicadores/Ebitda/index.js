import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function Ebitda() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> EBITDA, ou Earnings Before Interest, Taxes, Depreciation and Amortization,</Text>  ou, em português, LAJIDA
                            (Lucro antes de Juros, Impostos, Depreciação e Amortização), é um indicador que demonstra o potencial de geração de caixa de uma empresa.
                            Para isso, ele descarta informações como a depreciação e a amortização da empresa, que são despesas relacionadas a parte intangível da companhia.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Dessa forma, é possível entender o verdadeiro resultado das atividades de uma empresa.
                        O indicador EBITDA ganhou ainda mais relevância em 2012, quando a CVM (Comissão de Valores Mobiliários) uniformizou o seu cálculo.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o EBITDA?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O <Text style={[globalStyles.contentBold, globalStyles.shadow]}> EBITDA</Text> é um dos indicadores que pode ser utilizado
                        tanto por investidores quanto pelos próprios empresários para avaliar a rentabilidade da empresa.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Com ele, é possível medir com precisão a eficiência e a produtividade da empresa a partir da mensuração dos seus resultados.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Isso ocorre, pois seu cálculo desconsidera variáveis complexas como financiamentos e alavancagens financeiras, que acabam
                        dificultando uma análise mais assertiva sobre a performance operacional do negócio.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   No entanto, é importante lembrar que o EBITDA não é o único indicador a ser analisado na hora de descobrir se uma empresa é lucrativa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Outras informações, como seu endividamento, lucro líquido, modelo de gestão, perspectivas e histórico de faturamento também são
                        importantes em qualquer análise fundamentalista.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o EBITDA?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para fazer o cálculo do <Text style={[globalStyles.contentBold, globalStyles.shadow]}> EBITDA</Text> é
                        preciso somar ao resultado líquido da empresa outras informações financeiras, como: juros, impostos, depreciações e amortizações dentro do período.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>  Entendendo que o valor do EBITDA é encontrado com a dedução desses valores do lucro operacional,
                        é necessário chegar a essa informação.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Sendo assim, o cálculo do lucro operacional é feito da seguinte forma:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        LO  = Lucro Operacional{'\n'}
                        RL  = Receita Líquida{'\n'}
                        CMC  = Custos das Mercadorias Comercializadas{'\n'}
                        DO  = Despesas Operacionais{'\n'}
                        DFL  = Despesas Financeiras Líquidas

                        </Text>

                        <Text style={[globalStyles.title, globalStyles.shadow]}>    LO = RL – CMC – DO – DFL. </Text>
   
                        <Text style={[globalStyles.content, globalStyles.shadow]}>  Dessa forma, basta fazer a subtração entre os valores obtidos para encontrar o resultado do EBITDA da empresa em questão.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Exemplos de utilização do EBITDA</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Supondo que uma empresa possua um Lucro Operacional Líquido de R$150 milhões em um ano, para chegar no EBITDA é preciso somar as
                        Depreciações e Amortizações a esse valor.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Considerando valores hipotéticos de R$11 milhões em depreciação em R$17 milhões em amortização, chega-se no seguinte cálculo:.
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>   EBITDA = 150 + 11 +17 = R$ 178 milhões
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Vale lembrar que nem sempre é preciso calcular EBITDA, já que algumas empresas já apresentam essa informação em seus resultados.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Vantagens do EBIT</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A maior vantagem do
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> EBITDA</Text>é encontrar o potencial de geração de caixa da empresa. Isso pode contribuir para uma análise de quanto dinheiro 
                        a empresa consegue colocar no bolso. Em caso de empresas com grande maquinário, ao desconsiderar a depreciação, o resultado das atividades da empresa se torna muito mais positivo, 
                        já que não há influência direta no caixa da empresa.
                       </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}