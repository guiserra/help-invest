import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function AcumuladoAgressao() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Acumulado de Agressão</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> acumulado de agressão </Text>
                            permite o acompanhamento do saldo de agressão entre compradores e vendedores. Se
                            o saldo é
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> positivo</Text>,
                            isso significa que os compradores estão vencendo a briga contra os vendedores. Se
                            o saldo é
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> negativo</Text>,
                            os vendedores estão vencendo a briga.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o Acumulado de Agressão?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O grande ponto do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> acumulado de agressão </Text>
                            é entender que é de fato a agressão que move o mercado: compras a preços cada
                            vez maiores empurram uma criptomoeda para cima. Vendas a preços cada vez menores, empurram uma criptomoeda pra baixo.{"\n"}{"\n"}
                            Assim, se o saldo acumulado está aumentando, significa que, comparando as duas agressões, a tendência é que o mercado
                            suba. Ou seja: as agressões de compras são maiores que as agressões de venda.{"\n"}{"\n"}
                            Esses indicador é um excelente validado de tendências: acompanhe-o e veja se a agressão tem seguido o movimento do
                            preço. Assim, você pode buscar alvos mais longos no trading.
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