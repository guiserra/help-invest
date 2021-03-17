import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function IndiceLiquidez() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>Indíce de Liquidez</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os índices de liquidez têm por base o balanço patrimonial,
                        e no momento que o empresário tem em seu poder esse documento, é possível fazer uma série de constatações a respeito
                        da saúde financeira da organização em um determinado período de tempo. Essas informações são muito importantes para o
                        planejamento financeiro no curto, médio e longo prazo.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>São detalhes que podem fazer a diferença para determinar
                        a capacidade do empreendimento de se gerenciar e obter resultados.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>É o contraste entre a empresa que tem capital de giro
                        próprio e a que vai precisar de capital de terceiros no curto prazo. Ou, ainda, a organização que sobrevive apagando
                        incêndios e aquela que cresce e se desenvolve com os pés no chão e os olhos no mercado.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>No entanto, os índices de liquidez não podem ser confundidos
                        com índice de capacidade de pagamento, extraídos do fluxo de caixa. Se há um bom resultado nos índices de liquidez, por
                        exemplo, o empresário não deve entendê-lo como uma boa condição de pagamento, já que é preciso observar as contas e seus
                        ciclos para identificar prazos, condições e giros.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Para avaliar os resultados dentro da empresa, há quatro tipos de
                        índices de liquidez: Liquidez Corrente, Liquidez Seca, Liquidez Imediata e Liquidez Geral. Saiba, a seguir, como cada um deles
                        pode ser útil.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}