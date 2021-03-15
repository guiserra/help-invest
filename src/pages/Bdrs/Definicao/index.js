import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Definicao({ navigation }) {

    return (
        <SafeAreaView style={globalStyles.container}>
            
            <Text style={globalStyles.text}>Definição</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>O que é?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Conhecidos pela sigla
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> BDR</Text>, os Brazilian Depositary Receipts
                            são certificados que representam ações emitidas por empresas em outros países, mas que são negociados aqui, no pregão da B3 (Bolsa de valores).
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Quem adquire um <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDR</Text>, portanto, não compra diretamente as ações da empresa no exterior. Em vez disso,
                        investe em títulos representativos desses papéis.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Instituição Custodiante</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Esses papéis devem ser mantidos depositados em uma conta em uma instituição custodiante.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O passo seguinte da instituição depositária é registrar um programa de distribuição de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs</Text> junto à Comissão
                        de Valores Mobiliários (CVM). Então, poderá emitir os recibos localmente, sempre atentando para que não aconteça um descasamento entre o número de ações
                        mantidas no exterior e o dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs</Text> negociados por aqui.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Também é papel da instituição depositária cumprir as exigências específicas regulatórias relacionadas à emissão
                        dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs</Text> e divulgar as informações exigidas pela CVM sobre a empresa. Em junho de 2020, havia cerca de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>550 BDRs</Text> disponíveis para negociação na B3.{"\n"}{"\n"}
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]} onPress={() => navigation.navigate('ListaBDR')}> Clique aqui </Text>e veja a lista.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}