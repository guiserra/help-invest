import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

const url = "https://coinmarketcap.com/pt-br/all/views/all/";

export default function ListaCriptomoedas() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Lista de Criptomoedas</Text>


                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Listagem das Principais Criptomoedas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Abaixo temos um link direto que leva a listagem de todas as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Criptomoedas</Text> disponíveis no nosso mercado.
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