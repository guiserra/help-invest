import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function Volume() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Volume</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> volume </Text>
                            é um dos indicadores técnicos fundamentais para a análise de qualquer mercado. {"\n"}{"\n"}Esse indicador mostra o interesse por
                            parte dos participantes do mercado. {"\n"}{"\n"}Se há interesse, há negociação e certamente há possibilidade de ter movimentos fortes em
                            determinada
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda</Text>.
                            {"\n"}{"\n"}Com baixo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> volume</Text>,
                            é difícil de interpretar o movimento de certa
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda</Text>,
                            pois é a liquidez que traz segurança para as operações.{"\n"}{"\n"}

                            No caso do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> volume </Text>
                            há alguns modos de utilizá-lo. {"\n"}{"\n"}É sempre importante interpretar o contexto do mercado para operar, e quando o
                            mercado está em regiões de consolidação, a saída da consolidação, normalmente vem junto de um movimento de forte volume.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Entendendo a Influência do Volume</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por que isso ocorre? Vamos dar um exemplo com uma tendência de alta. {"\n"}{"\n"}Quando há uma saída de consolidação para início de
                            tendência de alta o comportamento dos players é: quem deseja comprar, acredita que aquele momento é importante, é o
                            momento inicial da tendência. {"\n"}{"\n"}Por outro lado, quem deseja vender, deve segurar esse
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “ímpeto” </Text>
                            dos compradores.{"\n"}{"\n"}

                            É a briga do mercado
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> bull x bear</Text>.
                            Se nesse caso os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “touros” </Text>
                            ganham e o mercado sobe, a tendência é que os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “ursos” </Text>
                            comecem a stopar. {"\n"}{"\n"}Nesse caso, aumenta o volume. É nesse ponto que você deve entender a dinâmica do mercado.{"\n"}{"\n"}

                            Enquanto os compradores querem seguir comprando, entendendo que ali há oportunidade de alta, os vendedores precisam
                            sair de suas posições. {"\n"}{"\n"}Ou seja, os vendedores precisam comprar. Isso
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “empurra” </Text>
                            o preço de uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda </Text>
                            para cima.{"\n"}{"\n"}

                            Quando perceber o início de um movimento, o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> volume </Text>
                            é um confirmador de que há realmente participantes interessados em
                            comprar ou vender naquele preço. {"\n"}{"\n"}Se não há
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> volume</Text>,
                            o movimento tende a ser mais fraco.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Referência</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() =>
                                    Linking.openURL("https://blog.vectorcrypto.com.br/5-indicadores-tecnicos-mais-usados-para-operar-criptomoedas/")}>Clique
                                aqui</Text> para saber mais.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}