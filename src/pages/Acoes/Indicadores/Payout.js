import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function Payout() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Payout</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Payout</Text>  é um importante indicador financeiro 
                            que demonstra o quanto do lucro líquido de uma empresa é distribuído em termos percentuais aos seus acionistas.
                        </Text>    
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A maioria das empresas listadas na Bovespa, adotam o pagamento de 25% do lucro líquido ajustado como dividendos mínimos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O<Text style={[globalStyles.contentBold, globalStyles.shadow]}> Payout</Text> acima de 25% é chamado de payout incremental, visto que corresponde ao valor distribuído pelas empresas além do que 
                            é estabelecido no estatuto social.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para calcular o<Text style={[globalStyles.contentBold, globalStyles.shadow]}> Payout</Text> é bastante simples, basta dividir os proventos 
                        distribuídos pela empresa pelo seu lucro líquido.{"\n"}{"\n"}

                        Por exemplo:{"\n"}{"\n"}

                        Se uma empresa tem um lucro líquido de setenta milhões de reais e distribui trinta milhões de reais, seu dividend payout será de 42,86%.
                        {"\n"}{"\n"}
                        
                        Fórmula do<Text style={[globalStyles.contentBold, globalStyles.shadow]}> Payout</Text>{"\n"}{"\n"}

                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Payout</Text> = Dividendos distribuídos / Lucro Líquido

                        </Text>

                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Risco de Payout alto</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Empresas que apresentam<Text style={[globalStyles.contentBold, globalStyles.shadow]}> Payouts</Text> bastante elevados, nem sempre são uma boa 
                        alternativa de investimento.{"\n"}{"\n"}

                        Isto porque, a empresa pode estar se endividando para distribuir os dividendos, ou até mesmo compensar a desvalorização da ação, em que 
                        muitas vezes pode comprometer todo o ganho obtido com os dividendos.{"\n"}{"\n"}

                        Desta forma, é recomendável investir em empresas que apresentam um<Text style={[globalStyles.contentBold, globalStyles.shadow]}> Payout</Text> estável, normalmente de 90% em um período de 5 anos.
                        {"\n"}{"\n"}
                        
                        Pois, assim você estará seguro que a empresa distribua apenas o que ela consegue gerar, sem comprometer sua situação financeira.

                        </Text>

                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}