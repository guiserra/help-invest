import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function DefinicaoCriptomoedas() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Definição</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que é Criptomoeda?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Criptomoeda </Text>
                            é o nome genérico para moedas digitais descentralizadas, criadas em uma rede
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> blockchain </Text>
                            a partir de sistemas avançados de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptografia </Text>
                            que protegem as transações, suas informações e os dados de quem transaciona.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Criptomoedas </Text>
                            são moedas digitais porque, diferentemente do real, do dólar e de outras moedas que podem ser tocadas, elas só existem na
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> internet</Text>.
                            Ou seja, você sabe que elas são verdadeiras, mas não consegue pegá-las com as mãos – ou guardá-las na carteira, no
                            cofre ou embaixo do colchão.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Descentralizadas porque não existe um órgão ou governo responsável por controlar, intermediar e autorizar emissões de moedas,
                            transferências e outras operações. Quem faz isso são os próprios usuários.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Blockchain</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Criadas em uma rede
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> blockchain </Text>
                            porque é essa tecnologia que está por trás das
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas</Text>.
                            Basicamente,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> blockchain </Text>
                            é um sistema que permite o envio e o recebimento de
                            alguns tipos de informação pela internet. São pedaços de código gerados online que carregam informações conectadas, como blocos de
                            dados que formam uma corrente – por isso o nome
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “corrente de blocos”</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>E em sistemas de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptografia </Text>
                            porque é essa camada de segurança, garantida pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> blockchain</Text>,
                            que possibilita a emissão e a transação de moedas virtuais de forma mais segura – quando feito de forma correta. É dessa
                            tecnologia, inclusive, que vem o nome
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda</Text> – moeda criptografada.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            De forma bem simplificada,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptografia </Text>
                            é um modo de embaralhar uma informação para que somente quem tem o código – também chamado de “chave” – consiga decifrá-la.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}