import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/indicadoresGlobal';

export default function VantagensCdb() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Vantagens</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Vale a pena investir no CDB?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Investir em 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDB </Text>
                            é uma boa alternativa para diversas carteiras.{"\n"}{"\n"}
                            Mas, é importante saber que, muitas vezes, o investimento que é ideal para o seu amigo não serve para você.{"\n"}{"\n"}
                            Por isso, é essencial conhecer as vantagens e desvantagens oferecidas por essa aplicação. Assim, fica mais fácil compará-la
                            com outros ativos e tomar a melhor decisão.{"\n"}{"\n"}
                            As principais vantagens são,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Facilidade</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Rentabilidade</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Segurança</Text>,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Diversificação </Text>e
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Liquidez</Text>.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}