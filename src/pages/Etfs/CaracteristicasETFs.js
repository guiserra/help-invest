import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../styles/indicadoresGlobal';

const url = "http://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/opcoes-sobre-etf.htm";

export default function CaracteristicasETFs() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Características</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>ETF de Renda Variável</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Código de Negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX11</Text> {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome do fundo.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>11</Text> = Número que representa, dentre outros ativos, cotas de fundo.{"\n"}
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A cotação é feita da seguinte maneira, Reais por cota, com 02 casas decimais.
                            A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista.{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Lote Primário</Text>: determinado pelo emissor; {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Lote Secundário</Text>: 1 cota.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>ETF Internacional</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Código de Negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX11</Text> {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>XXXX</Text> = 04 letras maiúsculas que representam o nome do fundo.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>11</Text> = Número que representa, dentre outros ativos, cotas de fundo.{"\n"}
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A cotação é feita da seguinte maneira, Reais por cota, com 02 casas decimais.
                            A liquidação é física e financeira, sendo o prazo D+2, a partir da data de negociação. O mercado é a vista.{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Lote Primário</Text>: determinado pelo emissor; {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Lote Secundário</Text>: 10 cotas;{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Lote Fracionário secundário</Text>: 01 cota.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Opções sobre ETF</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O estilo da opção é Europeu ou Americano. O tamanho do contrato é a quantidade de Ativos-objeto da opção.{"\n"}{"\n"}
                            A cotação é o prêmio da opção, expresso em reais por uma unidade ou lote do Ativo-objeto, a depender do fator de cotação, com até duas
                            casas decimais.{"\n"}
                            Variação mínima de apregoação é <Text style={[globalStyles.contentBold, globalStyles.shadow]}>R$0,01</Text>.
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Último dia de negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Vencimento até Abril/2021{"\n"}</Text>
                            Será o dia de sessão de negociação imediatamente anterior à data de vencimento.
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Vencimento a partir de Maio/2021</Text>{"\n"}
                            O último dia de negociação da opção será a data de vencimento.
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Data de vencimento</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Vencimento até Abril/2021</Text>{"\n"}
                            3ª segunda-feira do mês de vencimento. Caso não haja sessão de negociação na data, o vencimento ocorrerá na data com sessão de
                            negociação imediatamente posterior.
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Vencimento a partir de Maio/2021</Text>{"\n"}
                            3ª sexta-feira do mês de vencimento. Caso não haja sessão de negociação em tal data, o vencimento ocorrerá na data imediatamente
                            anterior em que houver sessão de negociação.
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Mais Informações</Text>
                        <Text style={[globalStyles.hyperlink, globalStyles.shadow]} onPress={() => Linking.openURL(url)}>
                            Clique aqui
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Termo de ETF</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O Tamanho do contrato é a quantidade de ativos-objeto do termo, estabelecido entre as partes, de acordo com os limites estabelecidos
                            pela B3.
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Liquidação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            As operações a termo podem ser liquidadas das seguintes formas:{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>a) No vencimento</Text>
                            : liquidação na data de vencimento do contrato mediante pagamento pelo comprador do valor de liquidação calculado com
                            base no preço a termo e entrega do Ativo-objeto pelo vendedor.{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>b) Antecipada</Text>
                            : o comprador do contrato poderá solicitar a liquidação antecipada (parcial ou total) do contrato mediante o pagamento do
                            valor acordado no contrato a termo, antes do vencimento da operação, sem qualquer ônus ao vendedor, nos prazos dispostos a seguir:{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>i</Text>
                                . liquidação antecipada para o dia útil seguinte, podendo ser solicitada até o dia útil anterior ao vencimento;{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ii</Text>
                                . liquidação antecipada para dois dias uteis após a solicitação, podendo ser solicitada até dois dias úteis anteriores ao
                                vencimento;{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>iii</Text>
                                . liquidação antecipada para três dias uteis após a solicitação, podendo ser solicitada até três dias úteis anteriores ao
                                vencimento.{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>c) Antecipada por diferença</Text>
                            : mediante a venda no mercado a vista, pelo comprador, dos Ativos-objeto comprados a termo. A liquidação
                            antecipada por diferença poderá ser solicitada nos prazos dispostos a seguir:{"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>i</Text>
                                . liquidação antecipada para o dia útil seguinte, podendo ser solicitada até o dia útil anterior ao vencimento;{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>ii</Text>
                                . liquidação antecipada para dois dias úteis após a solicitação, podendo ser solicitada até dois dias úteis anteriores ao
                                vencimento; {"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>iii</Text>
                                . liquidação antecipada para três dias úteis após a solicitação, podendo ser solicitada até três dias úteis anteriores ao
                                vencimento.
                        </Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Data de vencimento</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A data de vencimento é estabelecida entre as partes, observado o período mínimo de 16 e máximo de 999 dias corridos, contados da data
                            de registro do contrato.
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Opções Flexíveis sobre ETF</Text>
                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Características Técnicas</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O tamanho do contrato é livremente pactuado entre as partes e registrado na unidade do ativo que referencia a opção.
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Data de vencimento e liquidação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Livremente pactuado entre as partes.
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Forma de liquidação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Com garantia</Text>{"\n"}
                                A liquidação financeira é realizada por meio da clearing.
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Sem garantia</Text>{"\n"}
                                A liquidação financeira é realizada diretamente entre as partes.
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Funcionalidades do produto</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Barreiras, Limitador e Rebate
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Margem de garantia</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Com garantia</Text>{"\n"}
                                Somente o vendedor (lançador) é obrigado a depositar margem de garantia, dado que é o único que possui risco de inadimplência.
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Sem garantia</Text>{"\n"}
                                Não existe o depósito da margem de garantia, visto que a B3 não é a contraparte central garantidora.
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Funcionalidades do produto</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Comprador (titular)</Text>{"\n"}
                                Paga para ter o direito de comprar se a opção for uma call ou vender se a opção for uma put.
                            {"\n"}{"\n"}
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Vendedor (lançador)</Text>{"\n"}
                                Fica obrigado a vender, no caso da call, ou comprar, no caso de put, se o titular exercer seu direito.
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Prazo de vencimento, Preço de liquidação e Preços de exercício</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Livremente pactuado entre as partes.
                        </Text>

                        <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Prêmio de negociação</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Prêmio pago pelo titular ao lançador da opção, como pagamento do direito adquirido. {"\n"}{"\n"}
                            As partes podem estabelecer a data de pagamento do prêmio em qualquer dia útil compreendido entre o dia útil subsequente ao
                            dia da operação e o dia útil subsequente à data de vencimento. {"\n"}{"\n"}
                            Caso as partes não informem essa data, será considerado o dia útil subsequente ao dia da operação.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}