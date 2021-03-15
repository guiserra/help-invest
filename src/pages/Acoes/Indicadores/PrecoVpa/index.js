import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function PrecoVpa() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Preço/Valor Patrimonial</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O conceito de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA </Text>
                            trata de
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Preço sobre Valor Patrimonial </Text>
                            de cada empresa. Ou seja, o preço de cada cota dividido pelo valor patrimonial que ela representa. Ele é um dos
                            principais
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> indicadores fundamentalistas </Text>
                            de investimentos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Para entender seu conceito, é preciso compreender outros elementos envolvidos. O primeiro é o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Valor Patrimonial por Ação (VPA)</Text>,
                            que indica a relação entre o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Patrimônio Líquido (PL) </Text>
                            da empresa e o número de cotas que foram emitidas
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> PL </Text>
                            engloba todos os bens da companhia, como imóveis, maquinários, equipamentos, veículos, etc. É possível verificá-lo no
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Balanço Patrimonial da Empresa</Text>.
                            Ao dividi-lo pelo número de cotas, é possível saber qual é o patrimônio que cada papel representa.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Por fim, o indicador considera o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Preço por Ação</Text>,
                            que é o valor de cada cota da empresa no mercado a cada momento.
                            É possível verificá-lo no home broker ou em sites que fazem a análise fundamentalista de investimentos.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o P/VPA?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA</Text>,
                            mostra quanto os investidores estariam pagando pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido </Text>
                            da empresa. Ou seja, ao relacionar com o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido </Text>
                            da companhia, ele demonstra se a cotação está subvalorizada ou não.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Contudo, vale destacar vincular a análise apenas ao
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial </Text>
                            do negócio pode limitar as informações. Algumas empresas contam com um patrimônio menor devido ao próprio modelo de atividade,
                            que não exige muitos imóveis ou equipamentos, por exemplo.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Então é importante saber não só como calcular o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA</Text>,
                            mas também como interpretá-lo. Desse modo, você saberá utilizar o conceito
                            no dia a dia para a tomada de decisões nos investimentos.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Caso contrário, a interpretação isolada de resultados pode induzir o investidor a fazer escolhas que não são as mais adequadas.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o P/VPA?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Para fazer o cálculo do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/PVA </Text>
                            é feito obtendo a relação entre o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> preço por cota </Text>
                            e o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial por cota</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Assim, o primeiro passo é definir os outros
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> indicadores</Text>.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Veja como funciona o cálculo completo:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            •
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VPA </Text>
                            é calculado dividindo o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido </Text>
                            da empresa pela
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> quantidade de cotas </Text>
                            emitidas;{'\n'}{'\n'}
                            •
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA </Text>
                            será obtido dividindo o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> preço por cota </Text>
                            pelo
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> resultado do VPA</Text>.{'\n'}{'\n'}

                            Pode parecer um pouco complicado. Então preparamos um exemplo para simplificar.
                            Imagine que uma empresa tem um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> patrimônio líquido </Text>
                            de R$ 250 milhões e 20 milhões
                            de cotas emitidas. No momento, cada papel tem um preço de R$ 15.{'\n'}{'\n'}

                            Para ilustrar:{'\n'}{'\n'}

                            • PL = R$ 250 milhões;{'\n'}
                            • Ações emitidas: 20 milhões;{'\n'}
                            • Preço por Ação: R$ 15.{'\n'}{'\n'}

                            Primeiro, precisamos calcular o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VPA</Text>:{'\n'}{'\n'}

                            • 250 milhões ÷ 20 milhões = 12,5.{'\n'}{'\n'}

                            Depois, dividimos o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> VPA </Text>
                            pelo preço por cota, da seguinte forma:{'\n'}{'\n'}

                            • P/VPA = 15 ÷ 12,5 = 1,2.{'\n'}{'\n'}

                            Chegamos ao indicador de 1,2. O cálculo também pode ser utilizado tanto para analizar
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> ações </Text>
                            quanto para analisar investimentos em
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fundos Imobiliários</Text>.

                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar o resultado do P/VPA?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Após encontrar o valor do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA</Text>
                            em uma
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Ação </Text>
                            ou em um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>,
                            é importante entender como o resultado deve ser interpretado.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Veja a seguir os aspectos gerais:
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • P/PVA igual 1: a Ação ou cota está igual ao
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial </Text>
                            que ela tem;{'\n'}{'\n'}
                            • P/PVA superior a 1: a Ação ou cota está acima do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial</Text>;{'\n'}{'\n'}
                            • P/PVA inferior a 1: a Ação ou cota está abaixo do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> valor patrimonial</Text>.

                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O indicador reflete o momento atual da empresa, sendo que o resultado mais natural é
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> próximo a 1</Text>.
                            Ou seja, quando está em 1 a Ação ou cota está custando no mercado exatamente o que representa do
                            patrimônio da companhia ou do fundo.
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            O dado pode ser utilizado para ajudar na definição do seu investimento. Por exemplo, um resultado inferior a 1
                            indica que o preço está barato. Afinal, o patrimônio é mais alto do que ele. Assim, a análise pode significar
                            que é uma opção favorável para investir.{'\n'}{'\n'}
                            No entanto, como já foi dito, a análise de um indicador não deve ser feita isoladamente. Os resultados precisam
                            ser interpretados de forma mais aprofundada. Além de considerar o momento e o setor da empresa, utilize também
                            outros fundamentos em conjunto.
                        </Text>

                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Exemplos de utilização do P/VPA</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A aplicação prática do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA </Text>
                            na sua carteira dependerá dos seus objetivos com o investimento.
                            Então não existe uma fórmula exata sobre como utilizar o indicador.
                       </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Geralmente, em investimentos de longo prazo ele é um dos fundamentos considerados para definir
                            o momento de investir. Aqui, é comum buscar Ações ou cotas que tenham um preço mais baixo do que seu valor,
                            por apresentarem um maior potencial de retorno. Quando o mercado precificar o ativo mais perto do seu valor o
                            investidor já terá uma valorização.
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Para evitar equívocos ou vieses na sua avaliação, o ideal é não considerar apenas o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> P/VPA</Text>.
                            Nesse cenário, é importante entender quais outros indicadores podem ser avaliados.
                        </Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Veja alguns exemplos:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            • Preço/Lucro (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>P/L</Text>
                            ), que indica o valor que o mercado se dispõe a pagar pelos lucros da organização;{'\n'}{'\n'}
                            • Valor da empresa/Lucro Antes de Juros, Impostos, Depreciação e Amortização (
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}>EV/Ebdta</Text>
                            ), que mostra relação entre o valor da empresa e o lucro operacional;{'\n'}{'\n'}
                            • Outros fundamentos que indicam a saúde financeira e corporativa da empresa ou fundo.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}