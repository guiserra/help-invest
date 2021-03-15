import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function Ifix() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Índice de Fundos de Investimentos Imobiliários</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O Índice de Fundos de Investimentos Imobiliários (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>IFIX</Text>
                            ) indica o desempenho médio das cotações de fundos imobiliários listados na bolsa.
                            Os ativos que compõe este índice são definidos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3</Text>.{"\n"}{"\n"}
                            Este índice representa uma carteira teórica dos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundos imobiliários </Text>
                            mais negociados e de maior liquidez da bolsa brasileira.
                            A carteira é revista pela
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3 </Text>
                            a cada quatro meses e atualizada com aqueles fundos que ainda estão dentro dos parâmetros necessários para
                            fazer parte do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFIX</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como funciona o IFIX na prática?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O cálculo do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFIX </Text>
                            leva em consideração alguns critérios. São eles.{"\n"}{"\n"}

                            <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Critério de Inclusão</Text>{"\n"}{"\n"}
                            Esse critério escolhe quais
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FIIs </Text>
                            entrarão no cálculo do índice. Para ser incluído, o fundo deve cumprir alguns parâmetros definidos pela
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3</Text>,
                            que são:{"\n"}{"\n"}
                            • Participar de negociações em
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 60% </Text>
                            dos pregões realizados em um período de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 1 ano</Text>.{"\n"}
                            • Ter preço unitário de cota que não seja inferior a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$1 real</Text>.{"\n"}
                            • Sua participação não pode ser superior a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 20% </Text>
                            dentro da carteira.{"\n"}{"\n"}
                            No entanto, é possível que um fundo de investimento listado não esteja cumprindo com esses critérios.
                            Quando isso ocorre, ele deixa de fazer parte da metodologia de cálculo do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFIX</Text>.
                            Porém, os fundamentos de inclusão do índice são muito amplos.{"\n"}{"\n"}

                            <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Critério de Ponderação</Text>{"\n"}{"\n"}
                            Este critério determina o peso de cada
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FIIs </Text>
                            no índice
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFIX</Text>.
                            A análise é baseada no valor de mercado de cada
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundo imobiliário</Text>.
                            Ou seja, fundos com maior valor de mercado têm representação superior no cálculo do indicador.{"\n"}{"\n"}

                            Nesse sentido, quanto maior o valor de mercado do fundo, maior será a sua representação no índice. No entanto, vale a observação
                            citada nos critérios de inclusão, de que a participação de um fundo no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IFIX </Text>
                            não pode superar
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 20% </Text>
                            do índice.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}