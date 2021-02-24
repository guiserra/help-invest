import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function Roe() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   O
                            <Text style={[styles.contentBold, styles.shadow]}> ROE (Return on Equity)</Text> ou Retorno sobre Patrimônio Líquido,
                            é um indicador de rentabilidade que serve para determinar o quão eficiente é uma empresa na geração de lucro a partir
                            dos seus recursos levando em conta o patrimônio líquido e os valores investidos no negócio, inclusive o de acionistas.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar o ROE?</Text>
                        <Text style={[styles.content, styles.shadow]}>   O ROE serve para a empresa e seus investidores como um demonstrativo
                        de eficiência na aplicação de seus recursos próprios. Isso porque as informações interpretadas por ele contribuem para
                        a identificação da qualidade da gestão financeira da empresa.
                       </Text>
                        <Text style={[styles.contentBold, styles.shadow]}>   Quando um ROE é alto, é possível interpretar que a empresa tem utilizado
                        seus recursos de forma produtiva.  Já quando é baixo, pode existir um sinal negativo sobre como a gestão lida com as
                        decisões financeiras do negócio.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular o ROE?</Text>
                        <Text style={[styles.content, styles.shadow]}>   O cálculo do ROE é bastante simples. Para fazê-lo, é preciso obter algumas
                        informações cedidas pela empresas. Dentre elas, é necessário consultar o DRE, onde consta os resultados financeiros que a
                        empresa obteve dentro de um certo período.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   O balanço patrimonial é outro documento importante, já que demonstra o
                        patrimônio líquido da companhia.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Com isso em mãos, basta utilizar a seguinte fórmula do ROE para encontrar
                        seu resultado:
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>
                            <Text style={[styles.subtitle, styles.shadow]}>   ROE = Lucro Líquido / Patrimônio Líquido </Text>
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Exemplos de utilização do ROE</Text>
                        <Text style={[styles.content, styles.shadow]}>   Para entender a importância do ROE para a análise de investimentos, basta
                        imaginar uma situação de comparação entre duas empresas com ações na bolsa de valores.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Comparando duas empresas, “X” e “Y”, caso a primeira apresente um ROE mais
                        elevado do que o de sua concorrente, é possível afirmar que a empresa “X” tem maior lucro em relação a seu patrimônio líquido.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Vale ressaltar que além de ser um indicador utilizado na análise de ações por
                        investidores, pode também ser utilizado de forma interna na empresa ao decidir sobre a alocação de investimentos. Um gestor pode
                        comparar diversos projetos e optar pela atividade que traga um maior retorno sobre patrimônio líquido para a empresa.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Limitações do ROE</Text>
                        <Text style={[styles.content, styles.shadow]}>   Apesar de ser um indicador de rentabilidade altamente relevante dentro da análise
                        fundamentalista, o ROE possui algumas limitações.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Como todo indicador financeiro, ele não deve ser analisado de maneira isolada, já
                        que suas informações fazem parte de um conjunto de fatores que determinam a qualidade de uma empresa.
                        </Text>
                        <Text style={[styles.contentBold, styles.shadow]}>   É possível que uma empresa possua uma empresa com um percentual de ROE elevado, mas
                        tenha dívidas que comprometam a eficiência de suas atividades.<Text style={[styles.content, styles.shadow]}> Por isso, uma análise completa de indicadores é mais indicada.</Text>
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Além disso, quando utilizado para fins comparativos, é necessário que o ROE seja de
                        empresas de um mesmo setor, o que resulta em uma análise mais eficiente.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Quando bem utilizado e aliado a outras informações, o ROE contribui para uma análise
                        de empresas bastante eficiente.
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