import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function Definicao() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Definição</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que é?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Nacional </Text>
                            ou
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Direto </Text>
                            é o responsável por um dos programas de investimento em
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> renda fixa </Text>
                            mais interessantes do mercado financeiro brasileiro.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Nacional </Text>
                            é uma secretaria do Governo Federal, responsável por administrar os recursos financeiros que entram
                            nos cofres públicos, ou seja, é o caixa-forte do Brasil.{"\n"}{"\n"}Esses recursos vêm, principalmente, dos impostos
                            pagos por você, como cidadão.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por causa disso, o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Nacional </Text>
                            também administra os programas de saneamento financeiro de Estados e municípios e controla a dívida pública
                            da União. {"\n"}{"\n"}Além da tributação, o Governo Federal recorre a títulos de dívida pública federal, emitidos pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Nacional</Text>,
                            para financiar suas atividades.{"\n"}{"\n"}E são esses títulos que você compra ao investir no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Direto</Text>.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}