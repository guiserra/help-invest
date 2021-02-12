import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function DividaLiquida() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   A
                  <Text style={[styles.contentBold, styles.shadow]}> Dívida Líquida</Text> está ligada às obrigações
                  financeiras que as empresas adquirem, sejam elas para expandir as atividades empresariais ou para
                  alavancar o capital de giro da empresa.
                  </Text>
                        <Text style={[styles.content, styles.shadow]}>   Dado que, a
                        <Text style={[styles.contentBold, styles.shadow]}> Dívida Líquida</Text> pode revelar o grau de endividamento
                        das empresas e o quanto ela possui em relação a patrimônio, para realizar a quitação de dívidas como, contas a
                        pagar aos fornecedores, empréstimos e dívidas com investidores.
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>   Assim, o conceito de dívida líquida é considerado mediante o
                        volume de empréstimos que são retirados do caixa e equivalentes de caixa. Ou seja, <Text style={[styles.contentBold, styles.shadow]}>a dívida líquida refere-se
                        a quantidade de capital que a instituição precisa para encerrar seu endividamento.</Text>
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar a Dívida Líquida?</Text>
                        <Text style={[styles.content, styles.shadow]}>   A dívida líquida é usada, geralmente, para verificar o endividamento
                        de uma empresa. Assim, <Text style={[styles.contentBold, styles.shadow]}>quanto menor for o índice, mais saudável está a instituição empresarial.</Text>
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Ou seja, <Text style={[styles.contentBold, styles.shadow]}>quanto maior o volume de dívidas possuídas pela empresa,
                        maiores serão os riscos</Text>. Visto que, uma empresa endividada, possui mais dívidas, em comparação, as disponibilidades
                        financeiras empresariais.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Entretanto, as aquisições de dívidas, para impulsionar operações da
                        empresa, pode ser considerada saudável, lembrando que, antes de adquirir dívidas, recomenda-se realizar análises, para
                        verificar se o caixa da empresa conseguirá quitar as dívidas adquiridas.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Além disso, os investidores poderão utilizar o resultado obtido através
                        do cálculo da dívida líquida, para interpretar se a empresa é solvente, como também para julgar o valor da organização
                        antes de investir.
                     </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular a Dívida Líquida?</Text>
                        <Text style={[styles.content, styles.shadow]}>   O cálculo da dívida líquida é realizado mediante a subtração do volume
                        de dívidas obtidas pela empresa,  pelas disponibilidades, que é o volume de dinheiro possuído em caixa pela empresa e
                        que possuem livre circulação.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Para facilitar, vamos atribuir da seguinte forma:{"\n"}{"\n"}
                        VD = Volume de dívidas; {"\n"}
                        D = Disponibilidades. {"\n"}
                            {"\n"}
                        Sendo assim:
                        </Text>


                        <Text style={[styles.title, styles.shadow]}>   Dívida líquida = VD – D </Text>

                        <Text style={[styles.content, styles.shadow]}>    Após descobrir a dívida líquida da empresa é importante se atentar a
                        interpretação do resultado obtido, visto que, para uma interpretação mais assertiva das empresas, através da dívida
                        líquida, podem ser utilizados outros indicadores importantes para tal finalidade.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Exemplos de Dívida Líquida</Text>
                        <Text style={[styles.content, styles.shadow]}>   A dívida líquida representa o grau de endividamento de uma empresa
                        e o quanto de capital ela possui em caixa para quitar suas dívidas.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Por exemplo, caso a empresa X possua uma dívida de 700 milhões e detém em
                        caixa, uma média de 400 milhões de reais, sua dívida bruta será de 700 milhões, entretanto, a dívida líquida é de 300 milhões.
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