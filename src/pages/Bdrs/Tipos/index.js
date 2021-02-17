import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

export default function Tipos() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Tipos e níveis de de BDRs</Text>
                        <Text style={[styles.content, styles.shadow]}>  Existem dois grupos principais de BDRs:
                            os <Text style={[styles.contentBold, styles.shadow]}>patrocinados</Text> e os <Text style={[styles.contentBold, styles.shadow]}>não patrocinados</Text>.
                            Eles são classificados assim de acordo com a forma como são trazidos para a negociação no mercado brasileiro.
                        </Text>
                        
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Patrocinado (Níveis I, II e III)</Text>
                        <Text style={[styles.content, styles.shadow]}>  Os BDRs patrocinados são aqueles em que a empresa emissora das ações participa do programa, contratando ela mesma uma única
                        instituição depositária. Nesse caso, é do interesse dela ter presença no mercado brasileiro e investidores do país.
                        </Text>
                        <Text style={[styles.title, styles.shadow]}>Nível I</Text>
                        <Text style={[styles.content, styles.shadow]}>  Os BDRs Patrocinados Nível I não precisam do registro de companhia na CVM. Só podem ser negociados em mercados de balcão não
                            organizado ou em segmentos especificamente criados para papéis desse tipo na bolsa.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>  Se forem distribuídos em oferta pública, ela precisa ser de “esforços restritos”. Esse tipo de oferta é mais simples e menos
                            burocrático, mas limita a 50 o número de investidores que de fato podem comprar os papéis.
                        </Text>
                        <Text style={[styles.title, styles.shadow]}>Níveis II e III</Text>
                        <Text style={[styles.content, styles.shadow]}>  Os BDRs Patrocinados Nível II e III são bastante parecidos. Nos dois casos, a empresa emissora das ações no exterior precisa 
                            obter registro na CVM (ao contrário dos programas de Nível I). Além disso, eles podem ser negociados no pregão da bolsa ou em balcão organizado, sem necessidade de integrarem 
                            um segmento especificamente criado para eles.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>  A principal diferença entre esses dois tipos de BDRs Patrocinados é que os de Nível II só podem ser alvo de ofertas públicas com 
                        esforços restritos (assim como os programas de Nível I). Já no caso dos de Nível III, as ofertas públicas – com registro na CVM – podem ser amplas.
                        </Text>
                        <Text style={[styles.contentBold, styles.shadow]}>  Os BDRs nível II e III podem ser negociados por quaisquer investidores.</Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                    <Text style={[styles.title, styles.shadow]}>Não Patrocinado</Text>
                    <Text style={[styles.content, styles.shadow]}>  No caso dos BDRs Não Patrocinados, sempre considerados de nível I, a iniciativa de lançar os recibos no Brasil não parte da empresa emissora, 
                        e sim da própria instituição depositária (ou até de mais do que uma). Não há necessariamente um acordo com a companhia. A esmagadora maioria dos BDRs disponíveis na B3 são do tipo Não 
                        Patrocinados.
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