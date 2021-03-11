import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

const url = "http://www.b3.com.br/pt_br/market-data-e-indices/servicos-de-dados/market-data/cotacoes/cotacoes/";

export default function LiquidezDiaria() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Liquidez Média Diária</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Liquidez média diária </Text>
                            é o valor financeiro médio da empresa negociada em bolsa. Este indicador permite que
                            você avalie em quanto tempo poderá comprar ou vender uma quantidade de ações de uma empresa.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar a liquidez média diária?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Suponha que você decida comprar
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$ 50 mil </Text>
                            em ações de uma empresa, e que o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> volume médio diário </Text>
                            negociado desta ação seja
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$ 10 mil</Text>.
                            {"\n"}{"\n"}
                            Isso significa dizer que, em média, você deverá demorar
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> cinco dias </Text>
                            para comprar ou vender os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$ 10 mil </Text>
                            que deseja operar nesta empresa
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Volume de negócios</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Quanto maior é a quantidade de negócios de compra e venda de um determinado ativo, mais líquido ele é.
                            {"\n"}{"\n"}
                            Na hora de montar sua estratégia de investimentos, é interessante levar em consideração a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> liquidez média diária</Text>.
                            Isso porque a agilidade com que você poderá resgatar o dinheiro está diretamente ligada a este conceito.
                            {"\n"}{"\n"}
                            Para verificar a quantidade de negócios de uma ação, você pode fazer uma consulta no site da bolsa de valores (
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]} onPress={() => Linking.openURL(url)}>B3</Text>
                            ).
                            {"\n"}{"\n"}
                            Além do preço, você poderá verificar a quantidade de negócios realizados ao longo dos dias.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}