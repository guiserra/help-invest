import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function DefinicaoCdb() {

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Definição</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que é?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O 
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDB (Certificado de Depósito Bancário)</Text> é um dos investimentos 
                            mais conhecidos pelos investidores de renda fixa, devido à rentabilidade e segurança. {"\n"}{"\n"}Ele nada mais é do que um título emitido por bancos 
                            com o objetivo de captar dinheiro. {"\n"}{"\n"}Assim é possivel obter resultados acima do benchmark da 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> renda fixa </Text> sem complicações.{"\n"}{"\n"}

                            Basicamente, ele funciona como um 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> empréstimo </Text> do seu dinheiro para uma instituição 
                            bancária, em troca, você recebe uma taxa de rentabilidade que é definida no momento da compra. {"\n"}{"\n"}A captação serve para financiar as 
                            atividades do banco emissor, como projetos, crescimento e pagamento de dívidas.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}