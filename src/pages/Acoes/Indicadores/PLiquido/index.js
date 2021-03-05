import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function PLiquido() {

    const url = "https://www.btgpactualdigital.com/blog/investimentos/patrimonio-liquido-o-que-e-para-que-serve-e-como-calcular";

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>Patrimônio Líquido</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido (PL), equity</Text> ou
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> capital próprio </Text>
                            representa os valores que os sócios ou acionistas têm na
                            empresa em um determinado momento, ou seja, <Text style={[globalStyles.contentBold, globalStyles.shadow]}>é o
                            resultado da diferença entre os valores do ativo e do passivo de uma entidade.</Text>
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular Patrimônio Líquido?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O cálculo dos lançamentos contábeis da
                        operação da empresa. Ele pode mudar a cada aporte de valores no seu negócio, por exemplo,
                        quando existe um acréscimo de capital social. Em caso de apuração de lucros, também, o
                        patrimônio líquido sofre alterações.
                        </Text>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Patrimônio Líquido = Ativo – Passivo</Text>

                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Explicando a fórmula</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}><Text style={[globalStyles.contentBold, globalStyles.shadow]}>  Ativo: </Text>
                            O ativo é constituído por todos os bens, direitos e valores que uma entidade
                            (empresa, por exemplo) possui ou tem a receber. Uma máquina nova, por exemplo,
                            representa um ativo. Um prédio próprio onde funciona a fábrica também é exemplo
                            de um ativo patrimonial.{"\n"}
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}> <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Mais exemplos que constituem Ativos: {"\n"}</Text>
                            • Duplicatas (a receber das vendas);{"\n"}
                            • Imóveis;{"\n"}
                            • Veículos;{"\n"}
                            • Máquinas;{"\n"}
                            • Patentes de produtos.{"\n"}
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}><Text style={[globalStyles.contentBold, globalStyles.shadow]}>  Passivo: </Text>
                            O passivo de uma empresa engloba todas as obrigações financeiras que o negócio tem com terceiros.
                            Todas as dívidas estão aqui. A compra de um caminhão financiado, por exemplo, representa uma
                            obrigação, um passivo exigível (e por outro, a posse é um ativo).{"\n"}
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}> <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Mais exemplos que constituem Passivos: {"\n"}</Text>
                            • Salários dos funcionários;{"\n"}
                            • Impostos;{"\n"}
                            • Duplicatas a pagar;{"\n"}
                            • Máquinas;{"\n"}
                            • Aluguéis a pagar.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Exemplo Simples</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Digamos que você invista em um imóvel para uma fábrica. O valor investido na entrada é
                        de <Text style={[globalStyles.subtitle, globalStyles.shadow]}>R$ 100.000,00</Text> e o financiado, <Text style={[globalStyles.subtitle, globalStyles.shadow]}>R$ 200.000,00</Text>.
                        Nesse caso, você possui um patrimônio de <Text style={[globalStyles.subtitle, globalStyles.shadow]}>R$ 300.000,00</Text>, mas ainda precisa pagar 2/3
                        desse valor, correto?</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>PL = R$ 200.000,00 - R$ 100.000,00</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>  Aplicando a equação temos o resultado liquido de <Text style={[globalStyles.subtitle, globalStyles.shadow]}>R$ 100.000,00</Text>.</Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginBottom: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Deseja saber mais?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]} onPress={() => Linking.openURL(url)}>Clique Aqui </Text>
                                para mais informações.
                            </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
