import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

const url = "http://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/etf/renda-variavel/etfs-listados/";

export default function ListaETFs() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Lista de ETF</Text>


                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Listagem dos ETF de Renda Variável</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Abaixo temos um link direto que leva a listagem de todos os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF</Text> de Renda Variável disponíveis no nosso mercado.
                        </Text>
                        <View style={globalStyles.containerButton}>
                            <TouchableOpacity onPress={() => Linking.openURL(url)} style={[globalStyles.button, globalStyles.shadow]}>
                                <Text style={globalStyles.textButton}>Clique aqui e veja a lista</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

        </SafeAreaView>
    );
}