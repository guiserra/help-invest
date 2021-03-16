import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function Rentabilidade() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Rentabilidade</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Rentabilidade de Fundos Imobiliários </Text>
                            é um conjunto de fatores que leva o investidor a ter segurança nos investimentos e bons rendimentos.
                            Além de seu ganho ser isento de imposto de renda nos rendimentos, seus valores podem ser distribuídos
                            mensalmente, e a maioria dos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FIIs </Text>
                            tem apresentado uma média de lucro líquido bem acima de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 100% do CDI </Text>
                            todos os anos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>CDI (Certificado de Depósito Interbancário) </Text>
                            é a base média dos juros cobrados em operações realizadas diariamente entre os bancos.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Rendimento em Fundos Imobiliários</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> rentabilidade dos fundos imobiliários </Text>
                            varia. Afinal, os lucros dependem de diversos fatores como, situação do setor, da composição do
                            patrimônio e do valor das cotas.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Geralmente, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FIIs </Text>
                            que possuem imóveis bem localizados tendem a gerar retornos mais atrativos do que aqueles que estão em
                            regiões mais afastadas.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Outro ponto é o ganho de capital através da
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valorização </Text>
                            das cotas no mercado. Imóveis tendem a se valorizar ao longo do tempo.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como Calcular a Rentabilidade do Fundo Imobiliário?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Vamos supor que o valor da cota está
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$100,00 </Text>
                            e os proventos gerados por seus ativos foram de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$1,00 </Text>
                            por cota.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>
                                R$1,00 / R$100,00 = R$0,01 * 100 (%) = 1%
                            </Text>
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Logo, ao dividir,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 1/100</Text>,
                            a sua rentabilidade será, portanto, de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 1%</Text>.{"\n"}{"\n"}
                            Porém, como o valor da cotação está sujeito à volatilidade do mercado, o ideal é fazer essa conta em um
                            período maior, ou seja, ao analisar o rendimento dos 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FIIs</Text>, 
                            é necessário checar o histórico completo do fundo desejado.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>
                                Bons fundos imobiliários costumam ter rentabilidade de 0,5% até 1% ao mês em sua média.
                            </Text>
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}