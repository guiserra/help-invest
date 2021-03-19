import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function TaxaOcupacao({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Taxa de Ocupação</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Taxa de ocupação </Text>
                            é definida como parcela habitada de uma determinada construção ou região em relação ao
                            total de área habitável.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            No mercado imobiliário, é a quantidade relativa de espaço locado ante o espaço total locável
                            de um empreendimento.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O oposto desse indicador é a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de vacância</Text>,
                            utilizada para identificar a quantidade de área não locada de um imóvel.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Alguns termos são utilizados para tratar da ocupação no setor imobiliário. São eles:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            •Vacância;{"\n"}
                            •Taxa de vacância;{"\n"}
                            •Ocupação;{"\n"}
                            •Taxa de ocupação.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> vacância </Text>
                            e a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ocupação</Text>,
                            ao contrário das taxas delas, são representadas em números absolutos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por exemplo, em um imóvel de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 1.000 m² </Text>
                            de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> área locável</Text>,
                            suponha que você tenha uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> vacância </Text>
                            de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 200 m²</Text>.
                            Logo, sua
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de vacância </Text>
                            seria de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 20%</Text>.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>E o zoneamento urbano, o que seria?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Em contrapartida, se tratando de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> zoneamento urbano</Text>,
                            a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de ocupação </Text>
                            é válida somente para o plano horizontal.
                            Não importando a altura ou o número de pavimentos da construção.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Os pavimentos superiores ao térreo somente serão contabilizados caso superem, em área, o pavimento inferior ou
                            possuam elementos que ultrapassem os limites deste.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Taxa de ocupação no mercado imobiliário</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            No mercado imobiliário, a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de ocupação </Text>
                            mede a propriedade de o imóvel estar gerando caixa oriundo dos aluguéis pagos pelos inquilinos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O termo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de vacância</Text>,
                            que mede a proporção da área não locada de um empreendimento em relação a área
                            total disponível para locação.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Essa é diametralmente proporcional à de ocupação, e entrega o mesmo resultado, porém complementar. Por
                            exemplo, se a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de vacância </Text>
                            de um imóvel for de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 30%</Text>,
                            a de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ocupação</Text>,
                            analogamente, seria
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 70%</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O termo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> taxa de vacância </Text>
                            também é muito utilizada no meio imobiliário. Ela mostra a relação entre
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “espaço não locado” </Text>
                            e
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> “espaço total locável” </Text>
                            de um imóvel, também chamado de⠀
                            <Text
                                style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() => navigation.navigate("AreaBrutaLocavel")}>
                                Área Bruta Locável - ABL
                            </Text>
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}