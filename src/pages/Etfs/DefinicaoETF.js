import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function DefinicaoETF() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Definição</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que é?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Um
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                        nada mais é do que um
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundo de investimentos </Text> –
                        ou seja,
                        representa uma espécie de “condomínio” de investidores que aplicam seus recursos em conjunto.
                        {"\n"}{"\n"}
                        Ele possui, no entanto, algumas características específicas que o distingue dos fundos tradicionais. São duas, principalmente:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>1) </Text>
                            Os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            sempre são atrelados a um índice de referência, também chamado de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> subjacente</Text>.
                            {"\n"}Significa que o gestor ajusta a composição do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                            de modo que ela seja a mais parecida possível com a do indicador. Imagine um fundo de índice ligado ao Ibovespa. {"\n"}O papel do
                            gestor, nesse caso, será usar os recursos dos investidores para comprar as mesmas ações incluídas na carteira do índice, e na mesma
                            proporção.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>2) </Text>
                                As cotas dos
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                                são negociadas no pregão da bolsa de valores como se fossem ações. Seu desempenho oscila conforme a
                                performance dos papéis contemplados pela sua carteira, e também responde à oferta e à demanda pelas cotas no mercado.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Rentabilidade</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O objetivo de um gestor de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            sempre é manter a carteira o mais próximo possível da composição do seu índice de referência. {"\n"}{"\n"}Por consequência, a
                            rentabilidade de um fundo de índice bem sucedido nessa tarefa será a mesma (ou quase a mesma) apresentada pelo indicador.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}