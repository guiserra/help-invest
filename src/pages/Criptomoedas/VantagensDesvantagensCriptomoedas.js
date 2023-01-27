import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function VantagensDesvantagensCriptomoedas() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Vantagens e Desvantagens</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Vantagens das Criptomoedas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • A taxa de conversão do real para as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas </Text>
                            é superbaixa, o que vale a pena na hora de comprar;{"\n"}{"\n"}

                            • Pode ser usada em todos os países, já que as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas </Text>
                            são moedas universais. Para quem viaja bastante é bem
                            interessante ter moedas virtuais, pois não vai sofre tanto com conversão de moedas. É importante, no entanto, estar atualizado
                            quanto aos lugares que aceitam esse tipo de dinheiro;{"\n"}{"\n"}

                            • Como é uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> moeda digital</Text>,
                            o governo não pode congelar (embargar) as moedas, assim como pode fazer com as outras moedas;{"\n"}{"\n"}

                            • Se você quiser pagar suas contas ou doar suas
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas</Text>,
                            é possível fazer isso sem qualquer intervenção do governo. Exemplo: quando você
                            doa um valor para determinada instituição, ela precisa declarar de onde está vindo esse dinheiro. Com as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas </Text>
                            é diferente: todo mundo tem a liberdade de fazer doações e pagar qualquer coisa sem a intervenção do governo.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Desvantagens das Criptomoedas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Como são moedas online, a segurança se dá por meio de programas de computador. Isso significa que suas
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas </Text>
                            podem ser hackeadas e roubadas;{"\n"}{"\n"}

                            • O governo não reconhece as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas </Text>
                            como uma moeda oficial, ou seja, não há nenhuma proteção a essas moedas já que elas não
                            possuem regulamento;{"\n"}{"\n"}

                            • Em geral, pagamentos feitos por meio das
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas </Text>
                            não podem ser contestados e nem devolvidos.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}