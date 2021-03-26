import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../styles/indicadoresGlobal';

export default function VantagensProdutoETFs() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Vantagens dos Produtos</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>ETF de Renda Variável</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Quando comparado com fundos de ações tradicionais, os
                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                costumam ter uma taxa de administração menor. O investidor somente será cobrado
                pelos dias em que ficar com as cotas em sua carteira, como ocorre nos fundos de ações tradicionais.{"\n"}{"\n"}

                • Com apenas uma transação, os
                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                proporcionam o investimento em uma carteira diversificada de ações. Em outras palavras, os
                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                permitem a exposição do investidor em todas as ações que integrem a carteira do seu índice de referência, reduzindo, assim, o
                risco de concentração.{"\n"}{"\n"}

                • É possível comprar e vender cotas do
                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                no mercado secundário como se fosse uma ação.{"\n"}{"\n"}

                • Possibilita que o investidor acompanhe as alterações na composição ou proporção da carteira teórica de ações do índice de referência sem ter
                que comprar ou vender todos os ativos que estiverem na referida carteira. A qualquer momento é possível saber a composição do
                <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF</Text>.
                Além disso:{"\n"}{"\n"}

                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>   - </Text>
                    Todas as informações sobre as negociações com as cotas dos
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                    no mercado secundário da
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3 </Text>
                    são divulgadas;{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>   - </Text>
                    A disponibilidade de informações permite a comparação imediata entre o valor de um
                    <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                    e seu respectivo índice de referência.
                </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>ETF Internacional</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Quando comparado com fundos tradicionais, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            costumam ter uma taxa de administração menor.
                            O investidor somente será cobrado pelos dias em que ficar com as cotas em sua carteira, como ocorre nos fundos tradicionais.{"\n"}{"\n"}

                            • Com apenas uma transação, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            proporcionam o investimento em uma carteira diversificada de ativos estrangeiros. Em outras palavras,
                            os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            permitem a exposição do investidor em todos os ativos que integrem a carteira do seu índice de referência, reduzindo, assim,
                            o risco de concentração.{"\n"}{"\n"}

                            • É possível comprar e vender cotas do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                            no mercado secundário como se fosse uma ação.{"\n"}{"\n"}

                            • Possibilita que o investidor acompanhe as alterações na composição ou proporção da carteira teórica de ativos do índice de referência
                            internacional sem ter que comprar ou vender todos os ativos que estão na referida carteira. A qualquer momento é possível saber a
                            composição do ETF. Além disso:{"\n"}{"\n"}

                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>   - </Text>
                            Todas as informações sobre as negociações com as cotas dos
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            no mercado secundário da
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> B3 </Text>
                            são divulgadas;{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>   - </Text>
                            A disponibilidade de informações permite a comparação imediata entre o valor de um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETF </Text>
                            e seu respectivo índice de referência.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Opções sobre ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem.{"\n"}{"\n"}
                            • Possibilidade de fazer proteção aos investimentos em ações.{"\n"}{"\n"}
                            • Quando comparado com fundos tradicionais, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            costumam ter uma taxa de administração menor.{"\n"}{"\n"}
                            • Os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            permitem a exposição do investidor em todos os ativos que integrem a carteira do seu índice de referência, reduzindo,
                            assim, o risco de concentração.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Termo de ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • É possível comprar e vender cotas do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            no mercado secundário como se fosse uma ação. O crédito e o débito dos valores na conta
                            do investidor ocorrerão três dias úteis depois de fechada a operação
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> (D+3)</Text>.{"\n"}{"\n"}
                            • Quando comparado com fundos tradicionais, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            costumam ter uma taxa de administração menor. O investidor somente será cobrado
                            pelos dias em que ficar com as cotas em sua carteira, como ocorre nos fundos tradicionais.{"\n"}{"\n"}
                            • Com apenas uma transação, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            proporcionam o investimento em uma carteira diversificada de ativos estrangeiros. Em outras
                            palavras, os
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ETFs </Text>
                            permitem a exposição do investidor em todos os ativos que integrem a carteira do seu índice de referência,
                            reduzindo, assim, o risco de concentração.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Opções Flexíveis sobre ETF</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Possibilidade de limitar o potencial de perda. Por meio da utilização de limitadores e barreiras é possível determinar a perda
                            máxima que o lançador pode incorrer na operação.{"\n"}{"\n"}
                            • Proteção de preço contra variações indesejadas do ativo ao qual o cliente possui exposição, uma vez que a cotação futura de compra
                            ou venda, conforme o tipo da operação, é garantida.{"\n"}{"\n"}
                            • Mitigação do risco de crédito para operações com garantia, uma vez que a B3 é a contraparte central garantidora das operações.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}