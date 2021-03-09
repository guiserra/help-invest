import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

const deviceWidth = Dimensions.get("window").width
export default function AreaBrutaLocavel() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Área Bruta Locável (ABL)</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL</Text>,
                            por sua vez, diz respeito ao espaço em metros quadrados brutos, ou seja, sem desconto de espaços, disponível para operações
                            de aluguel (locação).
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar a ABL? </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Na maioria dos países, incluindo o Brasil, essa métrica é informada em metros quadrados (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>m²</Text>
                            ), enquanto em alguns países, como a Inglaterra e Estados Unidos, por exemplo, esta métrica é informada ao público em pés quadrados (ou
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> square feet </Text>,
                            do inglês).
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            No entanto, ainda existe mais uma questão complicada a ser dita a respeito da
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL </Text>
                            de empreendimentos imobiliários.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Muitos projetos (incluindo muitos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundos imobiliários</Text>
                            ) informam aos interessados e potenciais investidores a área passível de locação em metros quadrados, porém, não informam qual o
                            espaço que consideraram para fazer a mensuração e, dessa forma, mesmo que a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL </Text>
                            seja informada em metros quadrados, não é possível saber de qual espaço está se falando e se o mesmo seria, por exemplo,
                            de uso comum entre os condôminos e locatários, ou de uso exclusivo dos inquilinos do empreendimento.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular a ABL?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>I </Text>
                            Em primeiro lugar, a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL </Text>
                            pode ser informada com dados de espaço construído, isto é, com aquele espaço que foi, efetivamente, construído com materiais de
                            alvenaria ou marcenaria.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por exemplo, quando um empreendimento é feito, o terreno não é considerado para o cômputo desta
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL</Text>,
                            somente o que foi levantado em cima deste local. Daí o nome de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> área construída</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>II </Text>
                            Em segundo lugar, a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL </Text>
                            pode ser informada a partir de espaços de uso exclusivos dos inquilinos. No entanto, isso é mais comum no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> mercado imobiliário brasileiro</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Então, nasce a chamada
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> área privativa</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Como o próprio nome já diz, esse é o espaço particular dos locatários, cujo acesso é restrito a eles e aos indivíduos autorizados
                            previamente pelos mesmos a entrar na sala comercial, laje corporativa ou apartamento residencial, por exemplo.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Essa métrica é bastante utilizada no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> mercado imobiliário nacional </Text>
                            para fins de negociação de propriedades comerciais, operações comerciais de shopping-centers, lojas independentes de varejo e
                            galpões industriais e logísticos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>III </Text>
                            Por último, mas não menos importante, existe uma medição que já é tendência mundial no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> mercado imobiliário</Text>,
                            no entanto, ainda está ganhando força em território brasileiro.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O conceito de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> área BOMA</Text>,
                            um acrônimo em inglês para
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Building Owners and Managers Association (BOMA)</Text>,
                            é uma entidade americana dos proprietários e administradores de imóveis.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Assim sendo, essa organização resolveu padronizar a mensuração dos espaços.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Basicamente, a
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> área BOMA </Text>
                            considera o espaço locável como uma somatória da área particular do inquilino (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>área privativa</Text>
                            ) com a divisão das áreas comuns utilizadas pelos locatários, com exceção de escadas, fosso do elevador e as áreas destinadas
                            para equipamentos e serviços.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Como consequência, isso impacta a mensuração da
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ABL</Text>,
                            tornando-a, por isso, maior, se comparada à
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> área privativa</Text>,
                            esta última comumente utilizada em nosso
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> mercado imobiliário nacional</Text>.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}