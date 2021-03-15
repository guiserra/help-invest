import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Tipos() {
    return (
        <SafeAreaView style={globalStyles.container}>
            
            <Text style={globalStyles.text}>Tipos de BDRs</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Tipos e níveis de BDRs</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Existem dois grupos principais de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs</Text>:
                            os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>patrocinados</Text> e os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>não patrocinados</Text>.
                            Eles são classificados assim de acordo com a forma como são trazidos para a negociação no mercado brasileiro.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Temos também <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDR de ETF</Text> (<Text style={[globalStyles.hyperlink, globalStyles.shadow]}>clique aqui</Text> para saber mais sobre <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ETF</Text>),
                        são valores mobiliários emitidos no Brasil, que possuem como lastro cotas de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ETFs</Text> emitidos no Exterior.</Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Patrocinado (Níveis I, II e III)</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs patrocinados</Text> são aqueles em que a empresa emissora das ações participa do programa, contratando ela mesma uma única
                        instituição depositária. Nesse caso, é do interesse dela ter presença no mercado brasileiro e investidores do país.
                        </Text>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Nível I</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs Patrocinados</Text> Nível I não precisam do registro de companhia na CVM. Só podem ser negociados em mercados de balcão não
                        organizado ou em segmentos especificamente criados para papéis desse tipo na bolsa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Se forem distribuídos em oferta pública, ela precisa ser de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>“esforços restritos”</Text>. Esse tipo de oferta é mais simples e menos
                        burocrático, mas limita a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>50</Text> o número de investidores que de fato podem comprar os papéis.
                        </Text>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Níveis II e III</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs Patrocinados</Text> Nível II e III são bastante parecidos. Nos dois casos, a empresa emissora das ações no exterior precisa
                        obter registro na CVM (ao contrário dos programas de Nível I). Além disso, eles podem ser negociados no pregão da bolsa ou em balcão organizado, sem necessidade de integrarem
                        um segmento especificamente criado para eles.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A principal diferença entre esses dois tipos de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs Patrocinados</Text> é que os de Nível II só podem ser alvo de ofertas públicas com
                        esforços restritos (assim como os programas de Nível I). Já no caso dos de Nível III, as ofertas públicas – com registro na CVM – podem ser amplas.
                        </Text>
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Os BDRs nível II e III podem ser negociados por quaisquer investidores.</Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Não Patrocinado</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>No caso dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs Não Patrocinados</Text>, sempre considerados de nível I, a iniciativa de lançar os recibos no Brasil não parte da empresa emissora,
                        e sim da própria instituição depositária (ou até de mais do que uma). Não há necessariamente um acordo com a companhia. A esmagadora maioria dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs</Text> disponíveis na B3 são do tipo <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Não
                        Patrocinados</Text>.
                    </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR de ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A instituição depositária tem como responsabilidade garantir que os <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs de ETF</Text> emitidos no Brasil de fato estejam lastreados nos valores
                        mobiliários emitidos no Exterior. Desta forma, a instituição depositária mantém uma conta em um custodiante no Exterior onde permanecem depositados e bloqueados os respectivos valores
                        mobiliários utilizados como lastro dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs de ETF</Text>. A instituição depositária deve garantir que não haja qualquer descasamento entre o saldo dos valores mobiliários no Exterior e dos <Text style={[globalStyles.contentBold, globalStyles.shadow]}>BDRs</Text> emitidos.
                    </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}