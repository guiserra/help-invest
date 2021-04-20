import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function AtivoTotal() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>Ativo Total</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O ativo total de uma empresa é a soma de todos os seus ativos, 
                        ou seja, seus bens e direitos. Dessa forma, inclui o ativo circulante, realizável a longo prazo e permanente, também 
                        chamado de não circulante.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A definição de ativo na contabilidade é o conjunto de bens e 
                        direitos da organização. É a parte positiva do balanço patrimonial da empresa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Em outras palavras, o ativo é o conjunto de recursos financeiros 
                        e econômicos que são administrados pela empresa para gerarem mais recursos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Para se configurar como ativo é preciso cumprir quatro requisitos:
                        {"\n"}{"\n"}
                        • Constituir bem ou direito para a empresa
                        {"\n"}{"\n"}
                        • Ser de propriedade, posse ou controle da sociedade
                        {"\n"}{"\n"}
                        • Ser mensurável monetariamente
                        {"\n"}{"\n"}
                        • Trazer benefícios para a empresa
                        {"\n"}{"\n"}
                        São exemplos de ativo: dinheiro em caixa, estoque de mercadorias e máquinas. Sendo um ativo, ele pode configurar um ativo circulante, ou não circulante.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Ativo circulante</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>É todo ativo que já é dinheiro ou será transformado em dinheiro no curto prazo. 
                        Em contabilidade entende-se curto prazo até o fim do exercício seguinte.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Fazem parte desse grupo:
                        {"\n"}{"\n"}
                        • Disponibilidades: que compreende o Caixa, Banco com conta movimento, aplicações financeiras e depósitos bancários à vista
                        {"\n"}{"\n"}                        
                        • Créditos: que compreende duplicatas a receber, provisão para créditos, títulos a receber e outras contas a receber, como juros e adiantamento dos fornecedores.
                        {"\n"}{"\n"}
                        • Estoques: aqui considera-se todos os estoques, acabados, para revenda, produtos ainda em elaboração, matéria-prima, estoque de materiais, que foram adquiridos e estão chegando a empresa (em trênsito).
                        {"\n"}{"\n"}
                        • Outros créditos: créditos não compreendidos acima, como impostos a recuperar, adiantamento a terceiros e funcionários e alugueis a receber
                        {"\n"}{"\n"}
                        • Despesas antecipadas: considera aplicações de recursos em despesas cujo benefícios para a empresa ocorrerão no exercício seguinte
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Ativo não circulante</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>É todo ativo que será transformado em dinheiro no longo prazo. Ou seja, 
                        após o fim do exercício seguinte. Em outras palavras, são em geral bens duradouros dentro de uma empresa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Eles são divididos em:
                        {"\n"}{"\n"}
                        • Realizável a longo prazo: como aplicações financeiras, depósito bancário, duplicatas a receber, despesas antecipadas e empréstimos
                        {"\n"}{"\n"}                        
                        • Investimentos
                        {"\n"}{"\n"}
                        • Imobilizado: compreende os bens e direitos de natureza permanente usados na manutenção das atividades da empresa e dos quais ela 
                        não pretende vender. Caracterizam-se por se apresentarem na forma tangível.
                        {"\n"}{"\n"}
                        • Intangível: os bens que a empresa possui que não podem ser tocados ou vistos, mas possuem valor econômico. Ex: marcas, patentes e softwares
                        {"\n"}{"\n"}
                        Ao somar o ativo circulante e não circulante de uma empresa temos o ativo total desta companhia.
                        {"\n"}{"\n"}
                        E ao somar o ativo total com o passivo total da empresa teremos o seu balanço patrimonial. Uma das principais ferramentas para avaliar 
                        a posição contábil e financeira de uma empresa.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}