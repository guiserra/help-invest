import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function DividaLiquidaEbitda() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Divida Liquida sobre Ebitda</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Divida Liquida/Ebitda</Text> serve para analisar
                            o índice de endividamento de uma empresa. Seu resultado demonstra o número de anos que uma empresa levaria para
                            pagar sua dívida líquida no cenário em que o EBITDA permanece constante.
                            {"\n"}{"\n"}
                            Isso acontece pois a Dívida Líquida/EBITDA considera o nível de dívida líquida e o quanto a empresa está gerando
                            com suas atividades operacionais do momento analisado.
                            {"\n"}{"\n"}
                            Para entender melhor sobre a Dívida Líquida/EBITDA, é importante entender o que cada uma dessas informações significa.
                            A Dívida Líquida de uma empresa representa a soma dos seus empréstimos e financiamentos (passivos), após a subtração
                            do caixa e equivalentes de caixa da empresa.
                            {"\n"}{"\n"}
                            Já o EBITDA é a sigla para Earnings Before Interest, Taxes, Depreciation and Amortization, ou Lucros Antes de Juros,
                            Impostos, Depreciação e Amortização, em português.
                            {"\n"}{"\n"}
                            Esse indicador é bastante utilizado para avaliar a realidade financeira de uma empresa, representando sua geração
                            operacional de caixa.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>Nesse índice, o indicador EBITDA é utilizado como uma “proxy”
                            (ou representação) da geração de caixa da companhia a ser avaliada. No entanto, ele é o montante gerado pela empresa a
                            ser utilizado no pagamento de suas despesas.
                            {"\n"}{"\n"}
                            O resultado da Dívida Líquida/EBITDA é considerado alto quando está entre 4x e 5x, sendo um sinal negativo para o investidor 
                            e para a própria empresa. Isso significa que a empresa possui menos capacidade para cumprir com suas obrigações financeiras, 
                            o que pode gerar um aumento no endividamento e interrupção no crescimento do negócio.
                            {"\n"}{"\n"}
                            Já um índice entre 1x a 2x, por sua vez, é considerado mais saudável financeiramente pelo mercado, indicando uma boa gestão 
                            financeira da empresa.
                            {"\n"}{"\n"}
                            No entanto, vale lembrar que a Dívida Líquida/EBITDA não deve ser analisada isoladamente, mas sim em conjunto com outros 
                            indicadores financeiros.
                            {"\n"}{"\n"}
                            Assim, o resultado da análise de investimentos acaba sendo muito mais assertiva, levando em conta fatores não considerados na 
                            Dívida Líquida/EBITDA.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O cálculo da Dívida Líquida/EBITDA é bastante simples, já que suas informações podem ser retiradas diretamente dos relatórios 
                            financeiros disponibilizados pelas empresas listadas na bolsa.
                            {"\n"}{"\n"}
                            Para calcular a Dívida Líquida por EBITDA, basta utilizar a seguinte fórmula:
                            {"\n"}{"\n"}
                            O resultado do cálculo é expresso em “vezes”, por exemplo “2x”, “3x” ou “4x”.
                            {"\n"}{"\n"}
                            Exemplo de utilização da Dívida Líquida/EBITDA:
                            {"\n"}{"\n"}
                            Supondo que uma empresa “Y” possui uma Dívida Líquida de R$230 milhões e tem um EBITDA, em 12 meses, de R$125 milhões. A conta 
                            resulta em 1,84x, o que nos permite identificar que a empresa conseguiria pagar todos os seus débitos em menos de 2 anos.
                            {"\n"}{"\n"}
                            Assim, temos indícios de que seja uma companhia com boa gestão financeira.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Limitações?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            É importante que a relação entre Dívida Líquida e EBITDA de uma empresa seja utilizada para fins comparativos apenas entre negócios 
                            do mesmo setor de atuação.
                            {"\n"}{"\n"}
                            Além disso, é importante entender o contexto da geração de dívida pela empresa, o que pode acabar fazendo com que o múltiplo da 
                            Dívida Líquida/EBITDA não seja completamente assertivo.
                            {"\n"}{"\n"}
                            Nesse sentido, além da Dívida Líquida/EBITDA, é importante que a análise fundamentalista de investimentos inclua outros indicadores 
                            financeiros para ser mais abrangente e, consequentemente, mais eficiente.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}