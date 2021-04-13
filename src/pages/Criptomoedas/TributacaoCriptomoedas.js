import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function TributacaoCriptomoedas() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Tributação</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tributação sobre as Criptomoedas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Essas moedas digitais devem ser declaradas na
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “Ficha de Bens e Direitos”</Text>,
                            no Campo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “Outros Bens”</Text>,
                            uma vez que podem ser equiparadas a um ativo financeiro, pelo valor de aquisição.{"\n"}Essa classificação é apenas uma orientação da
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> RFB </Text>
                            às pessoas físicas, enquadrando as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas </Text>
                            como sendo um bem passível de ser declarado e tributado.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            No caso das pessoas físicas, os ganhos obtidos no mês até
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$35 mil </Text>
                            com a alienação de moedas digitais, são isentos de imposto de renda.{"\n"}
                            Já os ganhos obtidos superiores a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$35 mil </Text>
                            até
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$5 milhões </Text>
                            são tributados pelo imposto de renda, a título de ganho de capital, cuja alíquota é de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 15%</Text>.{"\n"}
                            No entanto, ganhos auferidos a partir de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$5 milhões </Text>
                            terão aumento de alíquotas na forma progressiva, que varia de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 17,5% </Text>
                            até
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 22,5%</Text>,
                            de acordo com o valor do lucro obtido.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}