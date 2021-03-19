import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Definicao() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Definição</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que é?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundos de investimento imobiliário (FII) </Text>
                        representam um condomínio de investidores, que juntam seu dinheiro em busca de uma finalidade comum.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os recursos destinam-se ao desenvolvimento de empreendimentos imobiliários, tais como construção de imóveis,
                        aquisição de imóveis prontos, ou investimentos em projetos visando viabilizar o acesso a habitação e serviços
                        urbanos, inclusive em áreas rurais, para posterior alienação, locação ou arrendamento.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Estes fundos destinam-se a investidores que procuram
                        imóveis como uma forma de diversificar seus investimentos.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Instituição Custodiante</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>As cotas desses fundos são registradas na Comissão de Valores
                        Mobiliários (CVM), podendo ser negociadas em bolsa de valores ou mercado de balcão.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Com base nisso, os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>FII </Text>
                        são comercializados na forma de fundos fechados, que podem ter duração determinada ou indeterminada. Entretanto, estes fundos devem distribuir,
                        no mínimo, 95% do lucro auferido, apurados segundo o regime de caixa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>É importante destacar que, é vedado ao fundo operar em mercados futuros e de opções.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}