import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/indicadoresGlobal';

export default function CaracteristicasCdb() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Características</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tipos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O <Text style={[globalStyles.contentBold, globalStyles.shadow]}>CDB</Text> é categorizado segundo o tipo de rentabilidade, Pós-Fixados, 
                            Prefixados e Híbridos.{"\n"}
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Títulos Pós-Fixados</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Sua taxa de rentabilidade é atrelada a um indexador da economia. Basicamente o emissor paga um percentual do índice de referência 
                            utilizado, por exemplo, <Text style={[globalStyles.contentBold, globalStyles.shadow]}>120% do CDI</Text> ao ano.{"\n"}{"\n"}
                            Esses rendimentos estão sujeitos a oscilações até a data do vencimento. A taxa de rentabilidade prefixada consiste em uma remuneração 
                            fixa, por exemplo, <Text style={[globalStyles.contentBold, globalStyles.shadow]}>6%</Text> ao ano.{"\n"}
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Títulos Prefixados</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Ela se mantém dessa forma, independentemente das condições do mercado. No momento da compra, você ja sabe exatamente o quanto seu 
                            dinheiro vai render até a data do vencimento.{"\n"}
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Títulos Híbridos</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            É a classe menos ofertada no mercado, ele possui taxa de rentabilidade composta por duas partes, uma 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fixa</Text> e uma 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> variável</Text>.{"\n"}{"\n"}
                            Por exemplo, uma aplicação com rendimento de 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 3% + IPCA</Text>. Isso significa que ela renderá os 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 3%</Text> de forma fixa, mais a oscilação do 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPCA</Text>.{"\n"}{"\n"}
                            Ou seja, quanto o 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPCA</Text> sobe, os rendimentos do 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDB Híbrido</Text> seguem a mesma trajetória, e vice-versa.
                        </Text>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}