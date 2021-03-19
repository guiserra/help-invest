import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';
export default function DividendPayoutRatio() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Dividend Payout Ratio</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Dividend Payout Ratio</Text> ou
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Índice
                            de Distribuição de Dividendos</Text> é o índice do valor total dos dividendos pagos aos
                            acionistas em relação ao
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> lucro líquido </Text>
                            da empresa. {"\n"}{"\n"}
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>É a porcentagem dos
                            lucros pagos aos acionistas na forma de dividendos.</Text> {"\n"}{"\n"}
                            O valor que não é pago aos acionistas é retido pela empresa para saldar dívidas ou para
                            reinvestir nas operações principais.{"\n"}{"\n"}
                            Às vezes, é chamado simplesmente de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de pagamento</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Dividendo Versus o Lucro</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Um dos caminhos mais seguros que o investidor de dividendos pode seguir é se atentar ao
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Dividend Payout Ratio </Text>
                            das empresas. {"\n"}{"\n"}
                            Esta
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de pagamento </Text>
                            de dividendos é calculada a partir do montante dos
                            dividendos distribuídos aos acionistas, dividido pelo resultado líquido - lucro - em determinado
                            período. {"\n"}{"\n"}
                            Ao multiplicar o resultado da fração em cem vezes, teremos a taxa expressa em porcentagem.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o Dividend Payout Ratio?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Em princípio, aqueles que desejam diminuir os riscos de investimentos devem procurar empresas com
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> payout ratio </Text>
                            inferior a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 60%</Text>.
                            Ou seja, empresas que retêm ao menos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 40% </Text>
                            do seu lucro para manutenção de seu giro de capital.{"\n"}{"\n"}
                            Essa medida conservadora visa isolar a volatilidade do dividendo, tornando-o mais previsível ao
                            longo dos anos, mas fazendo o investidor perder algumas oportunidades. {"\n"}{"\n"}
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>Esse será o preço a ser
                            pago pela preservação da tranquilidade.</Text>
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o Dividend Payout Ratio?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Para facilitar a vizualização das fórmulas, vamos atribuir as seguintes nomenclaturas:{"\n"}{"\n"}

                            - Taxa de Pagamento de Dividendos (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>TxPD</Text>
                            );{"\n"}
                            - Dividendos Pagos (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>DP</Text>
                            );{"\n"}
                            - Resultado Líquido (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>RL</Text>
                            );{"\n"}
                            - Taxa de Retenção (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>TR</Text>
                            );{"\n"}
                            - Lucro por Ação (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>LPA</Text>
                            );{"\n"}
                            - Dividendos por Ação (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>DPA</Text>
                            ).{"\n"}{"\n"}

                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>TxPD = DP/RL</Text>{"\n"}{"\n"}

                            Alternativamente, a taxa de pagamento de dividendos também pode ser calculada como:{"\n"}{"\n"}

                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>TxPD = 1 - TR</Text>{"\n"}{"\n"}

                            Em uma base por ação, a taxa de retenção pode ser expressa como:{"\n"}{"\n"}

                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>TR = (LPA - DPA) / LPA</Text>

                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por exemplo, a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> The Walt Disney Company </Text>
                            declarou um dividendo de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> $0,84 </Text>
                            por ação aos acionistas. A partir do  ano fiscal encerrado o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> LPA </Text>
                            da empresa foi de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> $5,73</Text>.
                            Sua taxa de pagamento é, portanto:{"\n"}{"\n"}
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>(0,84 / 5,73) = 0,1466 ou 14,66%</Text>{"\n"}{"\n"}
                            A Disney vai pagar
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 14,66% </Text>
                            e reter
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 85,34%</Text>.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}