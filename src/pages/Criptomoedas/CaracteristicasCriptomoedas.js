import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

export default function CaracteristicasCriptomoedas() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Características</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Além da rentabilidade, o que mais as criptomoedas podem proporcionar?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por mais incrível que pareça, a possibilidade de ganhos das
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas </Text>
                            não são seu principal atrativo. A exposição que elas oferecem é, na verdade, o que motiva muitas pessoas a adquirirem essa moeda.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Ao adquirir uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoeda</Text>,
                            você não só está comprando um produto com altas possibilidades de ganho, mas também está protegendo seu
                            patrimônio contra ações estatais. Além disso, as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas </Text>
                            sofrem oscilação em decorrência da economia mundial.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Dessa forma, quem tem
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas </Text>
                            não precisa investir em vários países para alcançar a internacionalização dos investimentos de forma
                            eficiente. Basta investir em uma moeda e o investidor estará exposto a todos os países, aumentando as possibilidades de ganho
                            significativamente, mas mantendo a segurança da aplicação.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Qual o perfil do investidor em criptomoedas?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Como podemos ver com o histórico do Bitcoin, as
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas </Text>
                            estão fadadas, ao menos pelos próximos anos, a sofrerem gigantescas
                            oscilações de valor — a tendência é que isso reduza à medida que a mineração de moedas for acabando.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Em função disso, o perfil indicado para investir nesse tipo de aplicação é bem restrito. Afinal de contas, não é todo mundo que suporta
                            ver seu patrimônio sofrendo reduções ou aumentos maiores do que
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> 50% </Text>
                            em menos de dois meses.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por isso, existem dois perfis que provavelmente se darão bem lidando com as famigeradas
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> criptomoedas</Text>
                            : investidores mais agressivos e pessoas orientadas politicamente para perspectivas mais liberais.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}