import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function DividendYield() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Dividend Yield</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            É um indicador que mede a performance de um investimento de acordo com os
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> proventos </Text>
                            pagos aos seus cotistas. Ele mostra a relação entre os
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> dividendos </Text>
                            distribuídos e o preço atual da cota.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o Dividend Yield? </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            As métricas podem se modificar radicalmente de fundo para fundo. Isso por conta de fatores como vacância, inadimplências, ou, principalmente,
                            por conta da variação de preços das cotas desses ativos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Quanto maior o
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> dividend yield </Text>
                        para dado preço da cota, melhor, pois é um sinal de que o investimento trouxe um belo retorno naquele período.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            É importante lembrar também que a rentabilidade de um
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundo imobiliário </Text>
                            deve ser considerada de uma forma geral:{"\n"}{"\n"}
                            • Dividendos recebidos;{"\n"}
                            • Valorização das cotas.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o Dividend Yield?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Para calcular o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Dividend Yield </Text>
                            é simples, você precisa dividir o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor pago em dividendos </Text>
                            pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> preço individual da ação </Text>
                            antes da distribuição dos dividendos. Depois, é só multiplicar esse resultado por
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 100</Text>,
                            e você terá a relação entre dividendos e o valor da ação.
                            {"\n"}{"\n"}
                            - Dividend Yield (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>DY</Text>
                            );{"\n"}
                            - Dividendos pagos por ação (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>DPA</Text>
                            );{"\n"}
                            - Valor da ação (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>VA</Text>
                            ).
                        </Text>
                        <Text style={[globalStyles.recipe, globalStyles.shadow]}>DY = DPA / VA x 100</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}