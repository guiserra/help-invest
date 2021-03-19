import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function Tipos() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Tributação dos FII</Text>

            <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                <View style={globalStyles.cardContent}>
                    <Text style={[globalStyles.title, globalStyles.shadow]}>Tributação</Text>
                    <Text style={[globalStyles.content, globalStyles.shadow]}>
                        A única tributação que há sobre os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundos Imobiliários </Text>
                            é o Imposto de Renda (IR). Ao fazer a venda das suas cotas, a alíquota cobrada é de 20%
                            sobre os lucros obtidos.
                        </Text>
                    <Text style={[globalStyles.content, globalStyles.shadow]}>
                        Por exemplo, se você adquiriu cotas no valor de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$1.000 </Text>
                            e ao vender elas valiam
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$2.000</Text>,
                            você precisa pagar
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 20% </Text>
                            sobre os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$1.000 </Text>
                            de lucro obtido pela valorização da cotação.
                            Nesse caso, seriam
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$200 </Text>
                            de Imposto de Renda.
                        </Text>
                </View>
            </View>

        </SafeAreaView>
    );
}