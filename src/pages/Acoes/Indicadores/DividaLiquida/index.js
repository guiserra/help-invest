import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function DividaLiquida() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>Dívida Líquida</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A
                  <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Dívida Líquida</Text> está ligada às obrigações
                  financeiras que as empresas adquirem, sejam elas para expandir as atividades empresariais ou para
                  alavancar o capital de giro da empresa, ou seja, <Text style={[globalStyles.contentBold, globalStyles.shadow]}>a dívida líquida refere-se
                        a quantidade de capital que a instituição precisa para encerrar seu endividamento.</Text>
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar a Dívida Líquida?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A dívida líquida é usada, geralmente, para verificar o endividamento
                        de uma empresa. Assim, <Text style={[globalStyles.contentBold, globalStyles.shadow]}>quanto menor for o índice, mais saudável está a instituição empresarial.</Text>
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Ou seja, <Text style={[globalStyles.contentBold, globalStyles.shadow]}>quanto maior o volume de dívidas possuídas pela empresa,
                        maiores serão os riscos</Text>. Visto que, uma empresa endividada, possui mais dívidas, em comparação, as disponibilidades
                        financeiras empresariais.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Entretanto, as aquisições de dívidas, para impulsionar operações da
                        empresa, pode ser considerada saudável, lembrando que, antes de adquirir dívidas, recomenda-se realizar análises, para
                        verificar se o caixa da empresa conseguirá quitar as dívidas adquiridas.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Além disso, os investidores poderão utilizar o resultado obtido através
                        do cálculo da dívida líquida, para interpretar se a empresa é solvente, como também para julgar o valor da organização
                        antes de investir.
                     </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular a Dívida Líquida?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O cálculo da dívida líquida é realizado mediante a subtração do volume
                        de dívidas obtidas pela empresa,  pelas disponibilidades, que é o volume de dinheiro possuído em caixa pela empresa e
                        que possuem livre circulação.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para facilitar, vamos atribuir da seguinte forma:{"\n"}{"\n"}
                        VD = Volume de dívidas; {"\n"}
                        D = Disponibilidades. {"\n"}
                            {"\n"}
                        Sendo assim:
                        </Text>


                        <Text style={[globalStyles.title, globalStyles.shadow]}>   Dívida líquida = VD – D </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>    Após descobrir a dívida líquida da empresa é importante se atentar a
                        interpretação do resultado obtido, visto que, para uma interpretação mais assertiva das empresas, através da dívida
                        líquida, podem ser utilizados outros indicadores importantes para tal finalidade.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Exemplos de Dívida Líquida</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A dívida líquida representa o grau de endividamento de uma empresa
                        e o quanto de capital ela possui em caixa para quitar suas dívidas.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Por exemplo, caso a empresa X possua uma dívida de 700 milhões e detém em
                        caixa, uma média de 400 milhões de reais, sua dívida bruta será de 700 milhões, entretanto, a dívida líquida é de 300 milhões.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}