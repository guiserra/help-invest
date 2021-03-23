import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function ValorPatrimonial({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Valor Patrimonial</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial (VP) </Text>
                            é simplesmente o valor que efetivamente representa algum patrimônio.
                            Ele está diretamente ligado ao conceito de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido</Text>,
                            onde contempla o ativo total que representa os bens e direitos, menos o passivo total
                            que são os deveres e obrigações.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o Valor Patrimonial?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A fórmula do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VP </Text>
                            se dá na seguinte equação:

                            {"\n"}{"\n"}

                            - Valor patrimonial (
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}>VP</Text>);{"\n"}
                            - Patrimônio líquido (
                                <Text style={[globalStyles.contentBold, globalStyles.shadow]}>PL</Text>).

                            {"\n"}{"\n"}

                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>VP = PL / Número de cotas</Text>

                            {"\n"}{"\n"}

                            É importante destacar que, para analisar o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial</Text>,
                            o investidor deve estar ciente dos seguintes detalhes:

                            {"\n"}{"\n"}

                            • Resultados e patrimônio de ativos do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>,
                            isto por que fundos imobiliários com boas expectativas
                            geralmente possuem um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial </Text>
                            inferior ao seu valor de mercado;{"\n"}

                            • Observar as notas explicativas dos balanços deu um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII </Text>
                            e seus relatórios gerenciais.
                            Muitos dados importantes podem ser descobertos e mais bem detalhados nesses documentos;{"\n"}

                            • Qual o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VP </Text>
                            futuro baseado em premissas e qual o preço atual da cota.{"\n"}

                            {"\n"}{"\n"}

                            Um indicador que costuma ser muito utilizado para saber se uma cota está cara ou barata é⠀
                            <Text
                                style={[globalStyles.hyperlink, globalStyles.shadow]}
                                onPress={() => navigation.navigate("PrecoValorPatrimonial")}>P\VP</Text>.
                            Ele nada mais é do que a divisão do valor de mercado de um FII pelo seu valor patrimonial.

                            {"\n"}{"\n"}
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>
                                Em geral, se o resultado dessa divisão for menor do que 1, significa que o mercado está
                                bastante pessimista com FII, precificando futuros prejuízos que podem ou não ocorrer.
                            </Text>
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>
                                Por outro lado, caso seja superior a 1, pode significar que o mercado acredita na viabilidade
                                do FII e precifica bons resultados futuros.
                            </Text>
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Valor patrimonial x valor de mercado x valor justo</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Valor Patrimonial</Text>

                            {"\n"}{"\n"}

                            Esse valor, que está no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> balanço patrimonial </Text>
                            de um fundo, reflete seu passado e não pode ser usado como referência única na compra de uma cota.

                            {"\n"}{"\n"}

                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII </Text>
                            pode estar sendo cotado muito abaixo do seu
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VP </Text>
                            porque o mercado está precificando a inviabilidade do negócio, ou simplesmente uma má gestão que
                            futuramente podem não trazer resultados positivos para o investimento.

                            {"\n"}{"\n"}

                            Do mesmo jeito, um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundo imobiliário </Text>
                            pode está cotado acima do seu
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VP </Text>
                            por ser muito bem administrado e ter histórico de lucros muito consistentes.

                            {"\n"}{"\n"}

                            <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Valor de Mercado (número de cotas x cotação atual)</Text>

                            {"\n"}{"\n"}

                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor de mercado </Text>
                            é o resultado das diferentes análises de vários investidores, portanto é como eles estão avaliando,
                            no momento, o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido </Text>
                            do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>.

                            {"\n"}{"\n"}

                            Isso significa que a cota pode estar cotada acima ou abaixo do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VP </Text>
                            divulgado no último balanço, que já é passado e o mercado está precificando, nem sempre
                            corretamente, o futuro.

                            {"\n"}{"\n"}

                            <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Valor justo</Text>

                            {"\n"}{"\n"}

                            Esse é o valor que cabe ao investidor encontrar através de uma boa análise de fundamentos de um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> fundo imobiliário</Text>.

                            {"\n"}{"\n"}

                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>O fato é que o mercado nem sempre está
                            atribuindo um preço realmente justo para uma cota, e são justamente esses erros de precificação
                            que o investidor deve encontrar para obter ganhos mais expressivos.</Text>

                            {"\n"}{"\n"}

                            Para encontrar o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor justo</Text>,
                            é necessário olhar para o futuro dos investimentos do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>,
                            levando em conta seu segmento e macroeconomia, para com isso verificar se o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII </Text>
                            tem condições de ser um investimento saudável e consistente. Isso que fará as cotas valorizarem.

                            {"\n"}{"\n"}

                            Por fim, concluímos que o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial </Text>
                            pode ser uma medida apenas aproximada de um valor verdadeiro, podendo em alguns casos, ser bastante
                            distante da realidade.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}