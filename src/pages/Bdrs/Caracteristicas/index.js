import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/bdrGlobal';

export default function Caracteristicas() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Características</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR's Patrocinados</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Código de Negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXXYY</Text> {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome da empresa.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>YY</Text> = número que representa o BDR Patrocinado Nível I{"\n"}
                            {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX32</Text>{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome da empresa.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>32</Text> = número que representa o BDR Patrocinado Nível II{"\n"}
                            {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX33</Text>{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome da empresa.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>33</Text> = número que representa o BDR Patrocinado Nível III{"\n"}
                            {"\n"}
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A cotação é feita da seguinte maneira, Reais por BDR P, com 02 casas decimais.
                        A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                        padrão é de 1 BDR.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR's Não Patrocinados</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Código de Negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX34 ou 35 </Text>{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome da empresa.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>34 ou 35</Text> = número que representa o BDR Não Patrocinado Nível I{"\n"}
                            {"\n"}
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A cotação é feita da seguinte maneira, Reais por BDR NP, com 02 casas decimais.
                        A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                        padrão é de 1 BDR.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>BDR de ETF</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Código de Negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX39</Text>{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome da empresa.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>39</Text> = número que representa o BDR de ETF{"\n"}
                            {"\n"}
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A cotação é feita da seguinte maneira, Reais por BDR de ETF, com 02 casas decimais.
                        A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista, e o lote
                        padrão é de 1 BDR.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}