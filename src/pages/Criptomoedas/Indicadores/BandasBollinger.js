import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function BandasBollinger() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Bandas de Bollinger</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            As
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> bandas de bollinger </Text>
                            é um dos indicadores técnicos da categoria dos osciladores. {"\n"}{"\n"}É um indicador de volatilidade: por meio das
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Bandas de Bollinger</Text>,
                            identificamos qual a volatilidade média do mercado. {"\n"}{"\n"}Em um mercado de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas</Text>,
                            volatilidade é o que não falta. {"\n"}{"\n"}Porém, mais que isso, as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Bandas de Bollinger </Text>
                            ajudam a entender como atuar na consolidação.{"\n"}{"\n"}

                            A consolidação é quando o preço de um ativo está dentro de uma faixa. Assim, não há rompimentos para cima, nem para baixo.{"\n"}{"\n"}

                            Mesmo em uma consolidação, as máximas e mínimas do preço de um ativo são irregulares. {"\n"}{"\n"}Assim, uma coisa é certa: não faz
                            sentido comprar em topos e vender em fundos, se for para operar que sejam compras na parte inferior da consolidação e
                            vendas na parte superior da consolidação.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Mas qual o ponto de entrada?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Quando o mercado supera uma consolidação e não continua o movimento, ele tende a voltar. {"\n"}{"\n"}Quando ocorre esses
                            “falsos rompimentos” normalmente há uma superação da banda. {"\n"}{"\n"}Na prática a soma entre mercado consolidado e
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Bandas de Bollinger</Text>,
                            mostra que há maior probabilidade do mercado retornar e que os pontos extremos são bons para compra e venda.{"\n"}{"\n"}

                            Assim, é possível identificar partes superiores do gráfico que a banda superior foi rompida, e quando você percebe que o movimento
                            perdeu força, é hora de operar contra ele.
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