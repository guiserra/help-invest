import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Vantagens() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Vantagens do Produto</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR's Patrocinados</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Vantagens do Produto</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Acesso facilitado aos valores mobiliários de companhias estrangeiras sem ter que pagar os custos relacionados
              à remessa de recursos para o Exterior.{"\n"}{"\n"}Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem com ativos locais
              e estrangeiros.{"\n"}{"\n"}Apesar de o investidor ficar exposto às variações de preços de um ativo estrangeiro, as operações são realizadas no Brasil e a
              liquidação é feita em reais.{"\n"}
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR's Não Patrocinados</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Vantagens do Produto</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Acesso facilitado aos valores mobiliários de companhias estrangeiras sem a necessidade de pagamento dos custos relacionados
              à remessa de recursos e manutenção de conta no Exterior.{"\n"}{"\n"}Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem com ativos
              locais e estrangeiros.{"\n"}{"\n"}Apesar do investidor ficar exposto às variações de preços de um ativo estrangeiro, as operações são realizadas no Brasil e a liquidação
              é feita em reais.{"\n"}
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR de ETF</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Vantagens do Produto</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Acesso facilitado aos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ETFs</Text> estrangeiros sem ter que pagar os custos relacionados à remessa de recursos para o
              Exterior.{"\n"}{"\n"}Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem com ativos locais e estrangeiros.{"\n"}{"\n"}Apesar de o
              investidor ficar exposto às variações de preços de um ativo estrangeiro, as operações são realizadas no Brasil e a liquidação é feita em reais.{"\n"}
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}