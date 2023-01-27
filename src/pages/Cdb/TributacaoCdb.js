import React, { Component } from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { globalStyles } from '../../../styles/bdrGlobal';

export default class TributacaoCdb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['% de IR sobre o rendimento', 'Período de aplicação'],
            DataTable: [
                ['22,5%', '180 dias após a aplicação'],
                ['20%', '360 dias após a aplicação'],
                ['17,5%', '720 dias após a aplicação'],
                ['15%', '720 da aplicação']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <SafeAreaView style={globalStyles.container}>

                <Text style={globalStyles.text}>Tributação de CDB</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                        <View style={globalStyles.cardContent}>
                            <Text style={[globalStyles.title, globalStyles.shadow]}>Tributos e custos</Text>
                            <Text style={[globalStyles.content, globalStyles.shadow]}>
                                A rentabilidade de um
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDB </Text>
                                sofre um desconto do Imposto de Renda que pode variar entre
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 15% </Text>
                                e
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 22,5% </Text>
                                na data de vencimento do título.{"\n"}{"\n"}
                                Assim, caso você possa optar por vencimentos mais longos, saiba que a sua aplição contará com menos
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> tributos</Text>.{"\n"}{"\n"}
                                Além disso, ao resgatar o seu
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDB </Text>
                                antes de
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 30 dias </Text>
                                de operação, sua rentabilidade também sofrerá os efeitos da incidência de
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IOF</Text>.{"\n"}
                            </Text>

                            <Text style={[globalStyles.title, globalStyles.shadow]}>IOF (Imposto sobre Operações Financeiras)</Text>
                            <Text style={[globalStyles.content, globalStyles.shadow]}>
                                Ele incide sobre o investimento apenas nos primeiros
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 30 dias </Text>
                                de aplicação. {"\n"}{"\n"}Caso você solicite o resgate do
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDB </Text>
                                durante esse período, haverá a cobrança do tributo.{"\n"}{"\n"}
                                Sua incidência ocorre sobre o rendimento.{"\n"}{"\n"}
                                Por exemplo, caso você tenham aplicado
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> R$5 mil </Text>
                                e deseje resgatar o seu título após
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 20 dias</Text>,
                                o
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IOF </Text>
                                vai incidir sobre o rendimento obtido no período.{"\n"}
                            </Text>

                            <Text style={[globalStyles.title, globalStyles.shadow]}>Imposto de Renda (IR)</Text>
                            <Text style={[globalStyles.content, globalStyles.shadow]}>
                                O
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Imposto de Renda </Text>
                                incide apenas sobre os rendimentos e de forma agressiva. {"\n"}Ele é calculado no momento do resgate
                                do seu título. {"\n"}Então, quanto maior o tempo de investimento, menor será a
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> alíquota</Text>.{"\n"}{"\n"}

                                Veja a tabela:{"\n"}
                            </Text>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#d1286d' }}>
                                <Row data={state.HeadTable} style={globalStyles.headStyle} textStyle={globalStyles.headTableText} />
                                <Rows data={state.DataTable} textStyle={globalStyles.tableText} />
                            </Table>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}