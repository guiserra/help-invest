import React from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

const url = "https://www.btgpactualdigital.com/blog/investimentos/tesouro-nacional";

export default function Tipos() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Tipos de Tesouro Direto</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Há uma lista de opções quando se fala em investir no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Direto</Text>.
                            {"\n"}Para que você possa avaliar qual se encaixa mais no seu perfil e nos seus objetivos, reunimos as principais delas abaixo.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tesouro IPCA+ (NTNB Princ)</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A rentabilidade é definida em um percentual de juros ao ano mais a variação do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPCA </Text>
                            do período. {"\n"}{"\n"}A remuneração e o desconto do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Imposto de Renda </Text>
                            ocorrem apenas no vencimento.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tesouro IPCA+ com Juros Semestrais (NTNB)</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A rentabilidade é definida com um juros anual mais a variação do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPCA </Text>
                            do período. {"\n"}{"\n"}A diferença está em sua remuneração, que oferece pagamentos a cada semestre (com incidência do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Imposto de Renda </Text>
                            a cada seis meses, impactando no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> rendimento líquido</Text>).
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tesouro Prefixado</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O rendimento desse tipo de título é predefinido, e você pode calcular exatamente o valor a ser resgatado no seu vencimento.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tesouro Selic</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O rendimento é completamente vinculado à
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Selic</Text>,
                            a taxa de juros básicos da economia. {"\n"}{"\n"}Um aumento da
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Meta Selic </Text>
                            eleva o rendimento, e uma redução na meta desfavorece a rentabilidade.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Fonte</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Para saber mais e/ou investir, acesse o site da BTG Pactual abaixo.{"\n"}
                        </Text>
                        <View style={globalStyles.containerButton}>
                            <TouchableOpacity onPress={() => Linking.openURL(url)} style={[globalStyles.button, globalStyles.shadow]}>
                                <Text style={globalStyles.textButton}>Clique aqui</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}