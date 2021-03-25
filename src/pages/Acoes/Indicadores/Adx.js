import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function Adx() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>ADX</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}> 
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ADX</Text> é a sigla utilizada para identificar o termo Índice Direcional Médio 
                        (do inglês, Average Directional Index).{"\n"}{"\n"}

                        Este índice é utilizado para verificar qual é a força de uma tendência no mercado financeiro e possui uma classificação que varia de 0 a 100. 
                        Quando está acima de 25, o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> indica uma tendência 
                        forte de alta, enquanto que, quando está abaixo disso, a tendência é de queda.{"\n"}{"\n"}

                        Além disso, o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> também está relacionado com o DMI (Índice de Movimento Direcional), 
                        cuja função também é rastrear e verificar a força da tendência. É importante mencionar que o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> 
                        deve ser analisado em conjunto com o DI+ (Positive Directional Indicator) e o DI- (Negative Directional Indicator).
                     </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como se usa o ADX?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para se obter o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text>, é preciso efetuar alguns cálculos que tem como base os outros índices mencionados acima, 
                        DI+ e DI-. Todos esses índices devem ser analisados em conjunto e são representados em gráficos de tendência. Ao observar o gráfico, é possível perceber que ele é composto 
                        por três linhas: a linha cinza representa o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text>, a linha verde o DI+ e a linha vermelha o DI-.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        Com relação ao <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text>, a curva apresentada no gráfico pode ser interpretada da seguinte forma: {"\n"}{"\n"}
                        • Quando ela está acima de 25, isso indica que uma tendência forte;{"\n"}
                        • Quando ela está abaixo de 25, a indicação é de uma tendência fraca;{"\n"}
                        • O <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> raramente fica acima de 50, mas isso indica uma tendência muito forte.{"\n"}{"\n"}

                        O <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> mostra apenas a força da tendência, por isso, para saber se ela é positiva ou negativa, é necessário avaliar os indicadores de direção, DI+ e DI-: {"\n"}{"\n"}

                        • Quando a linha de crescimento do DI+ fica acima da linha do DI-, a indicação é de alta, podendo ser considerado como um sinal para comprar ações;{"\n"}{"\n"}
                        • Quando a linha de crescimento do DI- fica acima da linha do DI+, a indicação é de baixa, podendo ser considerado como um sinal para vender ações.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Portanto, o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> ajuda os investidores a determinar a força da tendência, enquanto DI- e DI+ ajudam a 
                        determinar a sua direção. Assim, dois índices direcionais são usados ​​para ajudar a avaliar se uma negociação deve ser realizada no curto ou longo prazo. Ainda, se uma 
                        negociação de ações deve ser realizada.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o ADX?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A fórmula utilizada para calcular o <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> inclui as variações dos indicadores de direção de movimento, 
                        DI+ e DI-. O cálculo do <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ADX</Text> é feito da seguinte forma:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   ADX = MA [((DI+) – (DI-)) / ((DI+) + (DI-))] x 100
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}