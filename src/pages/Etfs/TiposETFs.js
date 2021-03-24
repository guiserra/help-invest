import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function TiposETFs() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Tipos de ETF</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tipos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Exchange Traded Funds (ETF) </Text>
                            podem ser classificados em cinco tipos:
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Renda Variável</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Internacional</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Opções</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Termo</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Opções Flexiveis</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>ETF de Renda Variável</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF de Ações</Text>,
                            também conhecido como
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Exchange Traded Fund (ETF)</Text>,
                            é fundo negociado em Bolsa que representa uma comunhão de recursos destinados à aplicação em uma carteira de ações que busca
                            retornos que correspondam, de forma geral, à performance, antes de taxas e despesas, de um índice de referência.

                            {"\n"}{"\n"}

                            Como índice de referência do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF de Ações </Text>
                            admite-se qualquer índice de ações reconhecido pela
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Comissão de Valores Mobiliários (CVM)</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>ETF Internacional</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF Internacional</Text>,
                            também conhecido como
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Exchange Traded Fund (ETF)</Text>,
                            é um fundo negociado em Bolsa considerado investimento em renda variável.

                            {"\n"}{"\n"}

                            O produto representa uma comunhão de recursos destinados à aplicação em carteira de ativos estrangeiros que busca retornos que
                            correspondam, de forma geral, à performance, antes de taxas e despesas, de um índice de referência.

                            {"\n"}{"\n"}

                            Como índice de referência do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                            admite-se qualquer índice internacional reconhecido pela
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Comissão de Valores Mobiliários (CVM)</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Opções sobre ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Os contratos de opções sobre
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “Exchange Traded Fund” (ETF) </Text>
                            são instrumentos derivativos criados para mitigar riscos de oscilação de preço, além de servir para criar estratégias especulativas
                            em relação a trajetória de preço e a ampliação a exposição e do potencial de retorno de um investidor, já que o capital inicialmente
                            investido para comprar uma opção é relativamente pequeno.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Termo de ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF (Exchange Traded Funds ou Fundo de Índice) </Text>
                            é um fundo de investimento, que pode ser comprado ou vendido como uma ação na
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3</Text>.
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                            oferece a você a oportunidade de diversificação de recursos dos fundos e facilidade na negociação de ações.

                            {"\n"}{"\n"}

                            Ao adquirir cotas de um determinado Fundo, o investidor passa a deter todas as ações componentes do índice a ele relacionado, sem
                            ter de comprar separadamente os papéis de cada empresa.

                            {"\n"}{"\n"}

                            Desta forma, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundos de Índices </Text>
                            podem proporcionar maior praticidade, rapidez e eficiência no momento de investir, além de facilidade para acompanhar seu
                            desempenho, que está associado ao do respectivo índice.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Opções Flexíveis sobre ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            As
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> opções flexíveis </Text>
                            são opções negociadas em ambiente de balcão organizado, que possuem regras e funcionalidades não padronizadas,
                            ficando a critério das partes da operação a sua definição.

                            {"\n"}{"\n"}

                            Por não se tratar de contratos padronizados, estas opções permitem a flexibilização de diversos parâmetros do contrato negociados
                            entre as partes. Pode também apresentar funcionalidades específicas como limitadores de preços e barreiras knock-in e knock-out.

                            {"\n"}{"\n"}

                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3 </Text>
                            disponibiliza o registro de opções flexíveis nas modalidades com e sem garantia.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}