import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Vantagens() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Vantagens do Produto</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Fundos de Investimento Imobiliário (FII)</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Permite ao investidor aplicar em ativos relacionados ao
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>mercado imobiliário </Text>
                            sem, de fato, precisar comprar um imóvel.{"\n"}{"\n"}
                            • Não há a necessidade de desembolsar todo o valor normalmente exigido para investimento em um imóvel.{"\n"}{"\n"}
                            • Diversificação em diferentes tipos de ativos do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>mercado imobiliário</Text>
                            (ex.: shopping centers, hotéis, residências etc.).{"\n"}{"\n"}
                            • As receitas geradas pelos imóveis ou ativos detidos pelo fundo são periodicamente distribuídas para os cotistas.{"\n"}{"\n"}
                            • Aumento nos preços dos imóveis do fundo gera aumento do patrimônio do fundo e, consequentemente, valorização do valor das suas cotas.{"\n"}{"\n"}
                            • Todo o conjunto de tarefas ligadas à administração de um imóvel fica a cargo dos profissionais responsáveis pelo fundo: busca dos imóveis,
                            trâmites de compra e venda, procura de inquilinos, manutenção, impostos etc.{"\n"}{"\n"}
                            • As pessoas físicas estão isentas de imposto de renda distribuídos pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>,
                            desde:{"\n"}

                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>I- </Text>
                            As cotas do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundo de Investimento Imobiliário </Text>
                            sejam admitidas à negociação exclusivamente em bolsas de valores ou no mercado de balcão organizado;{"\n"}

                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>II- </Text>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundo de Investimento Imobiliário </Text>
                            possua, no mínimo, 50 (cinqüenta) quotistas;{"\n"}

                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>III- </Text>
                            Não será concedido ao quotista pessoa física titular de quotas que representem 10% (dez por cento) ou
                            mais da totalidade das quotas emitidas pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundo de Investimento Imobiliário </Text>
                            ou cujas quotas lhe derem direito ao recebimento de rendimento superior a 10% (dez por cento) do total
                            de rendimentos auferidos pelo fundo.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}