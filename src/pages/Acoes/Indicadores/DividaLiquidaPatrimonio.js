import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function DividaLiquidaPatrimonio() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Divida Liquida / Patrimonio Liquido</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O índice
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Divida Liquida / Patrimonio Liquido</Text> é bastante 
                            utilizado por investidores para avaliar o endividamento de empresas listadas na bolsa.
                            {"\n"}{"\n"}
                            A Dívida Líquida/Patrimônio Líquido é calculado através da divisão entre a soma do endividamento de uma empresa e o 
                            total de bens e direitos que ela possui.
                            {"\n"}{"\n"}
                            Com o resultado da <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Divida Liquida / Patrimonio Liquido</Text>, é possível descobrir o quanto um negócio utiliza de capital de 
                            terceiros para financiar suas atividades em relação ao patrimônio dos seus acionistas.
                            {"\n"}{"\n"}
                            Seu valor pode ser representado de forma decimal ou em porcentagem.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Para calcular a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Divida Liquida / Patrimonio Liquido,</Text> é necessário 
                            entender as informações que fazem parte desse índice.
                            {"\n"}{"\n"}
                            A Dívida Líquida de uma empresa representa a soma dos seus empréstimos e financiamentos, após a subtração do caixa e 
                            equivalentes de caixa da empresa.
                            {"\n"}{"\n"}
                            Já o Patrimônio Líquido representa o total de bens e direitos que a empresa possui, subtraído do total de obrigações 
                            financeiras e débitos.
                            {"\n"}{"\n"}
                            Sabendo disso, basta utilizar a fórmula: 
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Divida Liquida / Patrimonio Liquido</Text>
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Exemplo de utilização</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Supondo que uma empresa terminou o ano com uma dívida líquida de R$20 milhões e possui um patrimônio líquido de 
                            R$52 milhões, basta dividir: Com esse resultado, é possível concluir que, no período de análise, essa empresa estava 
                            devendo 38,46% do seu patrimônio líquido.
                            {"\n"}{"\n"}
                            Alguns analistas de investimento sugerem buscar empresas que tenham menos de 50% de dívida em relação ao seu patrimônio. 
                            Portanto, a empresa do exemplo seria uma opção a ser considerada após a análise de outros indicadores financeiros.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Limitações</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            É importante que a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Divida Liquida / Patrimonio Liquido</Text> seja utilizada junto a outros indicadores dentro da análise fundamentalista 
                            de investimentos. Isso permite que o investidor possa tomar melhores decisões de investimento e evite a distorção de resultados ao fazer 
                            uma análise isolada.
                            {"\n"}{"\n"}
                            Para utilizar essa métrica de maneira mais eficiente, é importante também que as empresas escolhidas façam parte do mesmo setor 
                            de atuação. Assim, a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Divida Liquida / Patrimonio Liquido</Text> irá corresponder à estruturas de capital e operações semelhantes, proporcionando 
                            um resultado mais assertivo.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}