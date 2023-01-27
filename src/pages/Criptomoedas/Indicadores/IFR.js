import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function IFR() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Índice de Força Relativa</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFR </Text>
                            é outro indicador técnico muito utilizados pelos traders. A sua facilidade de interpretação leva a uma
                            análise rápida do contexto do mercado. Ele é utilizado para identificar a volatilidade do mercado.{"\n"}{"\n"}

                            Porém, há uma particularidade em relação ao
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFR</Text>.
                            Em momentos de tendência altista ou baixista, ele apresenta grandes oportunidades para o trader.{"\n"}{"\n"}

                            Quando uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda </Text>
                            está em alta, a tendência é o preço subir, com topos e fundos ascendentes. Foi comentado
                            que o trader deve evitar operar comprando em topos e vendendo em fundos. Mas o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFR </Text>
                            confirma ainda mais essa afirmação: ele mostra quando movimento está esticado, mesmo em tendência.{"\n"}{"\n"}
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como Interpretar o IFR?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Entende-se que caso o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFR </Text>
                            esteja abaixo de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 30</Text>,
                            o mercado está sobrecomprado. Se está acima de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 70</Text>,
                            está sobrevendido. Assim, se há tendência de alta e você está na dúvida se é o momento de comprar ou não, acompanhe o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFR</Text>!
                            Ele mostra se o movimento, naquele momento em questão, está em exaustão.{"\n"}{"\n"}

                            Assim, se há exaustão, o correto é aguardar o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFR </Text>
                            identificar uma volta do preço para patamares abaixo de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 70 </Text>
                            em uma tendência de alta para realizar a compra.{"\n"}{"\n"}
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Referência</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() => Linking.openURL("https://blog.vectorcrypto.com.br/5-indicadores-tecnicos-mais-usados-para-operar-criptomoedas/")}>Clique
                                aqui</Text> para saber mais.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}