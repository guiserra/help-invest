import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/indicadoresGlobal';

export default function DesvantagensCdb() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Desvantagens</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A principal desvantagem é a ja dita
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Tributação</Text>.{"\n"}{"\n"}
                            Outra é o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Valor da Aplicação</Text>, que para começar a investir
                            em
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDBs</Text>, você precisa ter pelo menos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$1 mil </Text>disponível para realizar esse tipo de
                            operação. {"\n"}{"\n"}Porém, dependendo do título e do seu emissor, esse valor mínimo pode variar, podendo chegar a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$10 mil</Text>, por exemplo.{"\n"}{"\n"}
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Resgate </Text>também é uma desvantagem, pois ele pode ser
                            feito apenas em sua data de vencimento. {"\n"}{"\n"}Caso você deseje antecipar essa operação, a sua rentabilidade total pode ser afetada.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}