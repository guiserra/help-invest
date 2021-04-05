import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function TributacaoETFs() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Tributação do ETF</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tributos e custos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Os custos de negociar ETFs são semelhantes aos que existem para comprar e vender ações na bolsa de valores. {"\n"}
                            É preciso pagar uma taxa de corretagem para a corretora que intermediar a operação e, além disso, algumas taxas de
                            negociação à
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3 </Text>
                            (conhecidas como emolumentos). Até aqui, nada de novo em relação à renda variável de maneira geral.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A primeira diferença está na cobrança de taxa de administração que é paga ao gestor do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF</Text>.
                            {"\n"}Essa taxa remunera o trabalho
                            realizado pelo gestor, que é o responsável por definir que papéis serão comprados ou vendidos, quando e em que quantidade.{"\n"}
                            A taxa de administração dos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            costuma ser bem menor do que a do mercado em geral.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            estão sujeitos ainda à incidência de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Imposto de Renda</Text>.
                            A alíquota é a mesma aplicada sobre o mercado de ações em geral:
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 15% </Text>
                            sobre os ganhos.
                            A diferença é que, no caso dos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs</Text>,
                            não há isenção de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IR </Text>
                            para quem realiza vendas na bolsa de valores em valor até
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$20 mil </Text>
                            mensais.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Embora os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            sejam fundos, o recolhimento do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Imposto de Renda </Text>
                            no caso dos produtos de renda variável não acontece na fonte.{"\n"}
                            É responsabilidade do investidor calcular o valor do tributo devido em caso de ganhos no momento da venda das cotas e realizar o
                            pagamento por meio de um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Documento de Arrecadação da Receita Federal (DARF) </Text>
                            até o último dia útil do mês seguinte à operação.
                            {"\n"}{"\n"}
                            Já nos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            de renda fixa, o imposto de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 15% </Text>
                            é retido na fonte, com recolhimento pela corretora intermediadora.
                    </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}