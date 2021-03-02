import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../../styles/global';

const deviceWidth = Dimensions.get("window").width
export default function DividaBruta() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Dívida Bruta</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Dívida Bruta</Text> é um valor composto pela
                            soma de todas as obrigações financeiras da empresa, isto é, todas as dívidas da instituição que
                            estão em aberto para serem devidamente quitadas. Devem ser levadas em consideração
                            as dívidas de curto e longo prazo.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar a dívida bruta? </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Dívida Bruta</Text> pode ser interpretada como um valor utilizado
                        para verificar o grau de endividamento de uma empresa. Assim, para conseguir interpretar a dívida bruta será
                        necessário somar todos os compromissos e obrigações da instituição.
                        {"\n"}
                            {"\n"}
                            <Text style={[globalStyles.content, globalStyles.shadow]}>Desse modo, será possível ter uma visão ampliada do modelo financeiro utilizado pela empresa que detém o
                            endividamento, como também, o analista conseguirá verificar as dívidas de curto, médio e longo prazo, que
                            foram adquiridas pela empresa. </Text>
                            {"\n"}
                            {"\n"}

                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular a Dívida Bruta?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Para calcular a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Dívida Bruta</Text> é preciso coletar informações
                        relacionadas ao balanço patrimonial da empresa. Dessa forma, é calculada mediante a soma das
                        dívidas da empresa durante um curto período de tempo, com as dívidas adquiridas para longo prazo.{"\n"}{"\n"}
                            <Text style={[globalStyles.content, globalStyles.shadow]}>Sendo assim, será possível verificar o endividamento da
                        empresa sobre seu patrimônio, através da seguinte fórmula: </Text>
                            {"\n"}
                            {"\n"}
                        DB = Divida Bruta; {"\n"}
                        DE = Divida da Empresa.
                        </Text>
                        <Text style={[globalStyles.recipe, globalStyles.shadow]}>DB = DE (Curto prazo) + DE (Longo prazo) </Text>

                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Limitações da Dívida Bruta</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Dívida Bruta</Text> possibilita que o analista consiga
                        avaliar o grau de endividamento da empresa, verificando o compromisso e as obrigações possuídas pela instituição.
                        {"\n"}
                            {"\n"}
                            <Text style={[globalStyles.content, globalStyles.shadow]}>Sendo assim, a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Dívida Bruta</Text> 
                            está entre os principais valores no mercado financeiro utilizados para verificar a saúde financeira da empresa de maneira mais assertiva. </Text>
                            {"\n"}
                            {"\n"}
                            <Text style={[globalStyles.content, globalStyles.shadow]}>Porém, a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Dívida Bruta</Text> possui limitações, dessa forma, não é recomendado analisar esse valor de forma isolada,
                            e sim utilizar diversas ferramentas de análise, de forma simultânea e complementar. </Text>
                        </Text>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}