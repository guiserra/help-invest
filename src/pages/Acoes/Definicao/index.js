import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function Definicao() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

            <Text style={globalStyles.text}>Ação</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Ação é a menor parcela do capital social das 
                        companhias ou sociedades anônimas. É, portanto, um título patrimonial e, como tal, concede aos seus titulares, 
                        os acionistas, todos os direitos e deveres de um sócio, no limite das ações possuídas.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Uma ação é um valor mobiliário, expressamente 
                        previsto no inciso I, do artigo 2º, da Lei 6385/76. No entanto, apesar de todas as companhias ou sociedades anônimas 
                        terem o seu capital dividido em ações, somente as ações emitidas por companhias registradas na CVM, chamadas companhias 
                        abertas, podem ser negociadas publicamente no mercado de valores mobiliários.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Atualmente, as ações são predominantemente escriturais, 
                        mantidas em contas de depósito, em nome dos titulares, sem emissão de certificado, em instituição contratada pela 
                        companhia para a prestação desse serviço, em que a propriedade é comprovada pelo “Extrato de Posição Acionária”. 
                        As ações devem ser sempre nominativas, não mais sendo permitida a emissão e a negociação de ações ao portador ou endossáveis. 
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}