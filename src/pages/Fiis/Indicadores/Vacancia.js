import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function Vacancia({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Vacância</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Vacância</Text>,
                    ou
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Localização</Text>,
                    e inquilinos são importantes nos
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundos de Tijolo</Text>.{"\n"}{"\n"}
                    O aspecto da
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> localização </Text>
                    é importante quando olhamos para os imóveis de maneira geral, um imóvel tem mais
                    ou menos valor dependendo também da região em que está localizado. {"\n"}{"\n"}
                    Um
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII </Text>
                    de shoppings, por exemplo, pode ter muito valor dependendo das regiões em que ficam os shoppings
                    que compõem a sua carteira.
                </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar a Vacância? </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Quando olhamos para a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Vacância</Text>,
                            queremos entender se todo o km² utilizável, chamado de⠀
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() => navigation.navigate("AreaBrutaLocavel")}>Área Bruta Locável - ABL</Text>,
                            está sendo utilizado ou não. {"\n"}{"\n"}
                            Se não estiver, isso significa que uma parte do imóvel está sem
                            gerar renda, logo, não está utilizando toda a sua rentabilidade potencial.{"\n"}{"\n"}
                            Taxas grandes de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Vacância </Text>
                            podem significar má utilização do imóvel e também que ele corre o
                            risco de não conseguir⠀
                            <Text style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() => navigation.navigate("Rentabilidade")}>Rentabilidade</Text>⠀
                            suficiente para pagar suas despesas.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Considerações Finais</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por fim, entender quem é o inquilino do ativo que compõe o seu imóvel (e isso vale até
                            mesmo se não estivermos falando de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundos imobiliários</Text>)
                            é muito importante para compreender a segurança que você terá como locatário/cotista do fundo.
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>
                                A ideia é pesquisar se o locador tem bom histórico de pagamento, se é confiável, etc.
                            </Text>
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}