import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Tipos() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Tipos de FII</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tipos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundos de Investimentos Imobiliários (FII) </Text>
                        podem ser classificados em dois tipos: <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Fundos de Tijolo </Text>
                        e <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Fundos de Papel</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Fundos de Tijolo</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>fundos de tijolo </Text>
                        são assim chamados por representarem os imóveis físicos (tangíveis) propriamente ditos. Esse tipo de
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text> tem o objetivo de comprar ou construir fundos para alugar e
                        gerar uma renda mensal. </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>A maioria dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>fundos imobiliários </Text>
                        se encaixam neste modelo, muito também porque o investidor busca principalmente esse tipo de estratégia ao investir em um
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>.</Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>Dentro desse tipo, existem imóveis voltados para diferentes setores de atividades, como:
                        {"\n"}{"\n"}
                        • Lajes corporativas;{"\n"}
                        • Galpões de logística;{"\n"}
                        • Galpões industriais;{"\n"}
                        • Agências bancárias;{"\n"}
                        • Shoppings;{"\n"}
                        • Lojas e supermercados;{"\n"}
                        • Hospitais;{"\n"}
                        • Universidades.</Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>Dessa maneira, é possível diversificar entre vários setores para que uma crise em um determinado setor,
                        por exemplo, não afete sua carteira de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>fundos imobiliários</Text> como um todo.</Text>

                        <Text style={[globalStyles.title, globalStyles.shadow]}>Pontos Negativos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A médio prazo, a valorização dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Fundos de Tijolo </Text>
                        tende a ser menor se comparada com o retorno das ações, por exemplo.</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Ou seja, para aqueles que buscam ganhos maiores e maiores valorizações, os
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundos de Tijolo</Text> podem não ser os mais recomendados, já que o foco deles é,
                        principalmente, a geração de renda constante.</Text>

                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que se deve analisar antes de escolher Fundos de Tijolo?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                        • Localização dos Imóveis;{"\n"}
                        • Tipo do Imóvel (Hotéis, Hospitais, Shoppings);{"\n"}
                        • Idade do Imóvel;{"\n"}
                        • Quantidade de Imóveis;{"\n"}
                        • Quantidade de Inquilinos;{"\n"}
                        • Duração do contrato;{"\n"}
                        • Gestão do Fundo.{"\n"}
                        {"\n"}
                        Agindo assim, o investidor terá condições de obter uma escolha mais assertiva, atribuindo um bom negócio para a sua carteira de investimentos.</Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Fundos de Papel</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Um <Text style={[globalStyles.contentBold, globalStyles.shadow]}>FII</Text> de papel é
                        essencialmente um ativo de crédito com lastro imobiliário.</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Isso quer dizer na prática que o fundo “empresta” dinheiro em troca de um fluxo de caixa mensal,
                        atrelado à inflação (ou <Text style={[globalStyles.contentBold, globalStyles.shadow]}>CDI</Text>).</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Como exemplo a esses recebíveis que compõem os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>fundos de papel</Text>, temos:
                        {"\n"}{"\n"}
                        • Certificados de Recebíveis Imobiliários <Text style={[globalStyles.contentBold, globalStyles.shadow]}>(CRI)</Text>;{"\n"}
                        • Letras de Crédito Imobiliário <Text style={[globalStyles.contentBold, globalStyles.shadow]}>(LCI)</Text>;{"\n"}
                        • Letras Hipotecárias <Text style={[globalStyles.contentBold, globalStyles.shadow]}>(LH)</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>De fato, os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>fundos de papel</Text> são
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}>fundos imobiliários</Text> conhecidos pela capacidade de gerar caixa
                        de forma segura, investindo em ativos de renda fixa.</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Em caso negativo, o Gestor tem de buscar as “garantias” que, via de regra, são imóveis
                        e/ou mesmo o aval dos sócios de quem tomou o crédito.</Text>

                        <Text style={[globalStyles.title, globalStyles.shadow]}>Pontos Negativos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O lado negativo deste tipo de investimento é que, por investir em títulos de renda fixa
                        e ter obrigação de distribuir <Text style={[globalStyles.contentBold, globalStyles.shadow]}>95%</Text> de sua rentabilidade mensal, o fundo praticamente não sofre alteração do seu valor patrimonial.</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Por isso, para que haja um aumento do capital patrimonial do fundo, é necessário que seja reinvestido parte do dinheiro dos rendimentos.</Text>
                        
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que se deve analisar antes de escolher Fundos de Papel?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                        • Gestão;{"\n"}
                        • Diversificação;{"\n"}
                        • Garantias;{"\n"}
                        • Perfil da carteira;{"\n"}
                        • Rentabilidade;{"\n"}
                        {"\n"}
                        Agindo assim, o investidor terá condições de obter uma escolha mais assertiva, atribuindo um bom negócio para a sua carteira de investimentos.</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}