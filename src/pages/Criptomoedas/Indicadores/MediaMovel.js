import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function MediaMovel() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Média Móvel</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> média móvel</Text>,
                            resumidamente, calcula uma média de preço de um ativo com base em seus períodos anteriores, por exemplo: uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> média móvel </Text>
                            de 21 períodos, calcula o preço médio desses 21 períodos. {"\n"}{"\n"}
                            Se o período for 21 dias, é média de preço desses 21 dias. Se for um gráfico de 5 minutos, toma como base 21
                            candles de 5 minutos como base para formar o preço médio.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>E porquê a média móvel é tão útil para o mercado?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Se sabemos o preço médio de um ativo, podemos analisar, pela inclinação da curva, os melhores preços para compra
                            e venda após a identificação da tendência do mercado.{"\n"}{"\n"}

                            Sabemos que uma determinada
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda</Text>,
                            por melhor e mais inovador que seja o seu projeto, nunca vai subir de
                            forma indefinida para cima. Terão subidas com correções (retornos a um ponto abaixo) e depois segue subindo. Qualquer
                            ativo é assim. {"\n"}{"\n"}Dessa maneira, a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> média móvel </Text>
                            facilita entender que os melhores preços de compra em uma correção de uma tendência de alta.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como usar as médias?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Se uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda </Text>
                            está em tendência (topos e fundos ascendentes), ao utilizar uma média de preço, é possível realizar
                            uma compra e um preço baixo e realizar uma venda a um preço alto.{"\n"}{"\n"}

                            Um dos maiores erros dos traders no mercado de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas </Text>
                            é realizar compras em topos e vendas em fundos. Isso é um
                            erro crucial no longo prazo. É importante reforçar: no trading, saber quando comprar e vender é fundamental. Por melhor
                            que seja a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda </Text>
                            em termos de fundamentos ou melhor que seja seu projeto, no trading identificar os melhores
                            preços no momento da operação é o ponto-chave.{"\n"}{"\n"}

                            Dessa maneira, se o mercado está em alta, você vai perceber que as médias tendem a se inclinar para cima. E nos retornos
                            às médias (uma estratégia clássica), há oportunidade de operar a favor da tendência.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Usar médias longas ou curtas?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Uma grande dúvida dos traders é qual média utilizar. A resposta é simples: depende. Isso depende do gráfico que você
                            está acompanhando (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>timeframes</Text>
                            ), criptoativo analisado, busca por alvos maiores ou menores, dentre outros fatores.{"\n"}{"\n"}

                            Avalie esses pontos:{"\n"}{"\n"}

                            • Una o gráfico que você está acompanhando com seus objetivo de ganho e perda: Se você, dentro do dia, busca operações
                            mais alongadas, é interessantes utilizar um gráfico de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> timeframe </Text>
                            menor e média maior.{"\n"}{"\n"}

                            • Usar médias lentas facilita para operacionais mais alongados, com ganho e perda maiores. Usar médias mais curtas tende
                            a encurtar seus ganhos e consequentemente suas possíveis perdas.{"\n"}{"\n"}

                            • Teste na prática: A melhor prática é o teste. Entenda na prática como as médias se comportam no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptoativo </Text>
                            que você deseja acompanhar.{"\n"}{"\n"}

                            Veja algumas periodicidades clássicas que você pode utilizar: {"\n"}{"\n"}

                            • Médias rápidas: 7, 9 e 21 e 34 períodos.{"\n"}{"\n"}
                            • Médias lentas: 72, 100, 200 períodos.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>E quando o mercado está consolidado?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O uso tradicional das
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> médias móveis</Text>,
                            quando se fala em aproveitar operações, é por meio de tendências de alta ou de baixa.{"\n"}{"\n"}

                            No caso da média, você perceberá que quando o preço de determinada
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda </Text>
                            permanecer dentro de uma faixa (sem superar essa faixa nem pra cima, nem para baixo), de tal forma o preço tende a
                            passar (cruzar) a média diversas vezes. {"\n"}Quando isso ocorre, sem rompimentos de topos e fundos, tome cuidado ao utilizar
                            a média como referência de compra ou venda.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Referência</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() => Linking.openURL("https://blog.vectorcrypto.com.br/5-indicadores-tecnicos-mais-usados-para-operar-criptomoedas/")}>Clique
                                aqui</Text> para saber mais.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}