import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/indicadoresGlobal';

export default function Caracteristicas() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Características</Text>
            <ScrollView>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tipos de Dívida Pública</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> dívida pública </Text>
                            é o valor devido por todos os estados, municípios, estatais e pela própria União em empréstimos e financiamentos.
                            {"\n"}{"\n"}
                            Essa dívida pode ser classificada em:
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Dívida Interna</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Pode ser paga em moeda nacional e vem de financiamento de gastos com educação, saúde e infraestrutura, pagamentos
                            de juros sobre dívida e manutenção da política monetária e cambial.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Dívida pública externa</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            É o somatório dos débitos do país, resultantes de empréstimos tomados no exterior pelo governo e empresas estatais e
                            privadas. {"\n"}{"\n"}Pode ser paga em moeda estrangeira.{"\n"}{"\n"}Esses recursos podem vir de governos, instituições financeiras como
                            Banco Mundial e FMI e empresas privadas.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Títulos da dívida pública</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A emissão desses títulos tem a finalidade de captar recursos para financiar a dívida pública, a educação, a saúde e a infraestrutura do país.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Investir no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tesouro Direto </Text>
                            quer dizer que você, pessoa física, empresta dinheiro para o governo ao comprar títulos da dívida pública federal pela
                            internet, com garantia de ter o valor desse empréstimo de volta somando o valor dos juros e ainda
                            auxiliando nos aportes em saúde, educação e segurança.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}