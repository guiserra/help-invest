import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

export default function Definicao({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>O que é?</Text>
                        <Text style={[styles.content, styles.shadow]}>  Conhecidos pela sigla
                            <Text style={[styles.contentBold, styles.shadow]}> BDR</Text>, os Brazilian Depositary Receipts
                            são certificados que representam ações emitidas por empresas em outros países, mas que são negociados aqui, no pregão da B3 (Bolsa de valores).
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>Quem adquire um BDR, portanto, não compra diretamente as ações da empresa no exterior. Em vez disso,
                        investe em títulos representativos desses papéis.
                        </Text>
                    </View>
                </View>
                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Instituição Custodiante</Text>
                        <Text style={[styles.content, styles.shadow]}>  Esses papéis devem ser mantidos depositados em uma conta em uma instituição custodiante.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>O passo seguinte da instituição depositária é registrar um programa de distribuição de BDRs junto à Comissão
                        de Valores Mobiliários (CVM). Então, poderá emitir os recibos localmente, sempre atentando para que não aconteça um descasamento entre o número de ações
                        mantidas no exterior e o dos BDRs negociados por aqui.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>Também é papel da instituição depositária cumprir as exigências específicas regulatórias relacionadas à emissão
                        dos BDRs e divulgar as informações exigidas pela CVM sobre a empresa. Em junho de 2020, havia cerca de 550 BDRs disponíveis para negociação na B3.
                        <Text style={[styles.hyperlink, styles.shadow]} onPress={() => navigation.navigate('ListaBDR')}> Clique aqui </Text>e veja a lista.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    hyperlink: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#ff0000'
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#FFF'
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF'
    },
    contentBold: {
        fontFamily: 'Montserrat_500Medium',
        color: '#FFF',
        fontSize: 16
    },
    cardBoard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#2f3c6f'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});