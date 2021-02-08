import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function PLiquido() {

    const url="https://www.btgpactualdigital.com/blog/investimentos/patrimonio-liquido-o-que-e-para-que-serve-e-como-calcular";

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.cardBoard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Definição</Text>
                        <Text style={styles.content}>   O 
                            <Text style={styles.contentBold}> patrimônio líquido (PL), equity</Text> ou 
                            <Text style={styles.contentBold}> capital próprio </Text>
                            representa os valores que os sócios ou acionistas têm na 
                            empresa em um determinado momento. 
                        </Text>
                        <Text style={styles.content}>   Faz referência às contas que apontam o valor contábil 
                            de uma entidade. Para isso, leva em consideração capital social, lucros acumulados, 
                            fluxo de caixa, entre outros.
                        </Text>
                        <Text style={styles.content}>   Simplificando um pouco, <Text style={styles.contentBold}>é o 
                            resultado da diferença entre os valores do ativo e do passivo de uma entidade.</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.cardBoard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Como calcular Patrimônio Líquido?</Text>
                        <Text style={styles.content}>   O cálculo dos lançamentos contábeis da 
                        operação da empresa. Ele pode mudar a cada aporte de valores no seu negócio, por exemplo, 
                        quando existe um acréscimo de capital social. Em caso de apuração de lucros, também, o 
                        patrimônio líquido sofre alterações.
                        </Text>
                        <Text style={styles.title}>Patrimônio Líquido = Ativo – Passivo</Text>
                        
                    </View>
                </View>

                <View style={styles.cardBoard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Explicando a fórmula</Text>
                        <Text style={styles.content}><Text style={styles.contentBold}>  Ativo: </Text>
                            O ativo é constituído por todos os bens, direitos e valores que uma entidade 
                            (empresa, por exemplo) possui ou tem a receber. Uma máquina nova, por exemplo, 
                            representa um ativo. Um prédio próprio onde funciona a fábrica também é exemplo 
                            de um ativo patrimonial.{"\n"}
                        </Text>
                        <Text style={styles.topicContent}> <Text style={styles.subtitle}>Mais exemplos que constituem Ativos: {"\n"}</Text>
                            • Duplicatas (a receber das vendas);{"\n"}
                            • Imóveis;{"\n"}
                            • Veículos;{"\n"}
                            • Máquinas;{"\n"}
                            • Patentes de produtos.{"\n"}
                        </Text>

                        <Text style={styles.content}><Text style={styles.contentBold}>  Passivo: </Text>
                            O passivo de uma empresa engloba todas as obrigações financeiras que o negócio tem com terceiros. 
                            Todas as dívidas estão aqui. A compra de um caminhão financiado, por exemplo, representa uma 
                            obrigação, um passivo exigível (e por outro, a posse é um ativo).{"\n"}
                        </Text>
                        <Text style={styles.topicContent}> <Text style={styles.subtitle}>Mais exemplos que constituem Passivos: {"\n"}</Text>
                            • Salários dos funcionários;{"\n"}
                            • Impostos;{"\n"}
                            • Duplicatas a pagar;{"\n"}
                            • Máquinas;{"\n"}
                            • Aluguéis a pagar.
                        </Text>

                        <Text style={styles.title}>Exemplo</Text>
                        <Text style={styles.content}>   Digamos que você invista em um imóvel para uma fábrica. O valor investido na entrada é 
                        de <Text style={styles.subtitle}>R$ 100.000,00</Text> e o financiado, <Text style={styles.subtitle}>R$ 200.000,00</Text>. 
                        Nesse caso, você possui um patrimônio de <Text style={styles.subtitle}>R$ 300.000,00</Text>, mas ainda precisa pagar 2/3 
                        desse valor, correto?</Text>
                        <Text style={styles.subtitle}>PL = R$ 200.000,00 - R$ 100.000,00</Text>
                        <Text style={styles.content}>Aplicando a equação temos o resultado liquido de <Text style={styles.subtitle}>R$ 100.000,00</Text>.</Text>
                    </View>
                    
                </View>

                <View style={styles.cardBoard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Deseja saber mais?</Text>
                            <Text style={styles.content}> 
                                <Text style={styles.hyperlink} onPress={() => Linking.openURL(url)}>Clique Aqui </Text>
                                para mais informações.
                            </Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#151515',
    },
    hyperlink: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#903950',
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
        color: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    topicContent: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    contentBold: {
        fontFamily: 'Montserrat_500Medium',
        color: '#FFF',
        fontSize: 16,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    cardBoard : {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#32443c',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    cardContent : {
        marginHorizontal: 18,
        marginVertical: 10
    }
});
