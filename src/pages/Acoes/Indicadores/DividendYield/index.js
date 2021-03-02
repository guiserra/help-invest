import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../../styles/global';

export default function DividendYield() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Dividend Yield (DY), que pode ser traduzido 
                        para o português como Rendimento de Dividendo, é um indicador que mede a performance da empresa 
                        de acordo com os proventos pagos aos seus acionistas. Ele mostra a relação entres os dividendos 
                        distribuídos e o preço atual da ação da empresa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Esse indicador, como você verá logo mais, mensura 
                        o retorno da ação de acordo com o provento pago.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o Dividend Yield?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para saber como calcular o Dividend Yield é bem fácil: 
                        você deve dividir o valor de dividendos pagos em determinado período pelo preço individual da ação antes 
                        dessa distribuição de dividendos. Depois, basta multiplicar esse resultado por 100.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Que tal entender isso na prática? Veja a fórmula abaixo:
                        </Text>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>   DY = Dividendos pagos por ação / Valor da ação x 100
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para facilitar ainda mais o entendimento sobre a fórmula de DY, veja um exemplo:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Imagine que um investidor tenha ações do Itaú em carteira e, neste ano, a empresa 
                        tenha pago R$5,00 de proventos por cada ação. Suponha que o preço do ativo estivesse em R$45. Neste caso, o DY seria de 11,1%.
                        </Text>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>   R$5,00 dividido por R$45 = 0,111 vezes 100 = 11,1
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Esse percentual mostra que, nesse exemplo, cada ação  retornou 11,1% em dividendos 
                        Itaú neste período. É claro que este é apenas um exemplo para mostrar o potencial de investimento dos dividendos. E é importante 
                        lembrar que resultados do passado não são garantia de um resultado futuro.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Encontrar o valor do DY possibilita a comparação do rendimento dos dividendos entre 
                        empresas que um investidor esteja interessado em investir. Se busca por aquelas que pagam bons proventos, atente-se às empresas que 
                        possuam os maiores valores de Dividend Yield.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Mas não se esqueça: se o preço de uma ação estiver muito desvalorizado, o seu DY pode 
                        aparentar ser melhor do que realmente é.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Como o indicador varia inversamente à cotação do papel, os baixos valores podem dar à 
                        empresa a falsa impressão de boa pagadora de dividendos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   É fundamental ter muita atenção quando for analisar esse indicador. Ele deve ser utilizado 
                        para complementar uma análise muito mais profunda, isto é, não deve ser o único fator considerado na hora de decidir em quais ações investir.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}