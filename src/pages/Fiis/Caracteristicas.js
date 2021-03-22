import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function Caracteristicas() {
    return (
        <SafeAreaView style={globalStyles.container}>

                <Text style={globalStyles.text}>Características</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Fundos de Investimento Imobiliário (FII)</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Código de Negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX11B</Text> {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome do fundo.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>11</Text> = Número que representa, dentre outros ativos, cotas de fundo.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>B</Text> = Indicativo de negociação em mercado de balcão organizado (quando aplicável).{"\n"} 
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A cotação é feita da seguinte maneira, Reais por cota, com 02 casas decimais.
                        A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                        padrão é de 1 cota.
                        </Text>
                    </View>
                </View>

        </SafeAreaView>
    );
}