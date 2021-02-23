import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function PrecoVpa() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   O conceito de
                            <Text style={[styles.contentBold, styles.shadow]}> P/VPA</Text> trata de Preço sobre Valor Patrimonial por Ação. Ou seja, o preço 
                            da Ação dividido pelo valor patrimonial que ela representa. Ele é um dos principais indicadores fundamentalistas de investimentos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Para entender seu conceito, é preciso compreender outros elementos envolvidos. O primeiro 
                        é o Valor Patrimonial por Ação (VPA), que indica a relação entre o patrimônio líquido (PL) da empresa e o número de Ações que foram emitidas
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   O PL engloba todos os bens da companhia, como imóveis, maquinários, equipamentos, veículos 
                        etc. É possível verificá-lo no Balanço Patrimonial da Empresa. Ao dividi-lo pelo número de Ações, é possível saber qual é o patrimônio que 
                        cada papel representa.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Por fim, o indicador considera o Preço por Ação, que é a cotação das Ações da empresa no 
                        mercado a cada momento. É possível verificá-lo no home broker ou em sites que fazem a análise fundamentalista de investimentos.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar o P/VPA?</Text>
                        <Text style={[styles.content, styles.shadow]}>   O <Text style={[styles.contentBold, styles.shadow]}> P/VPA</Text>, mostra quanto os investidores estariam pagando pelo patrimônio 
                        líquido da empresa. Ou seja, ao relacionar com o patrimônio líquido da companhia, ele demonstra se a Ação está subvalorizada ou não.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Contudo, vale destacar vincular a análise apenas ao valor patrimonial do negócio pode limitar as informações. Algumas empresas 
                        contam com um patrimônio menor devido ao próprio modelo de atividade, que não exige muitos imóveis ou equipamentos, por exemplo.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Então é importante saber não só como calcular o P/VPA, mas também como interpretá-lo. Desse modo, você saberá utilizar o conceito 
                        no dia a dia para a tomada de decisões nos investimentos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Caso contrário, a interpretação isolada de resultados pode induzir o investidor a fazer escolhas que não são as mais adequadas.
                        </Text>
                    </View>
                </View>


                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como calcular o P/VPA?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Para fazer o cálculo do <Text style={[styles.contentBold, styles.shadow]}> P/PVA</Text> é feito obtendo 
                        a relação entre o preço por Ação e o valor patrimonial por Ação.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Assim, o primeiro passo é definir os outros indicadores.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Veja como funciona o cálculo completo:
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   
                        • VPA é calculado dividindo o patrimônio líquido da empresa pela quantidade de Ações emitidas;{'\n'}
                        • P/VPA será obtido dividindo o preço por Ação pelo resultado do VPA.{'\n'}{'\n'}

                        Pode parecer um pouco complicado. Então preparamos um exemplo para simplificar. 
                        Imagine que uma empresa tem um patrimônio líquido de R$ 250 milhões e 20 milhões 
                        de Ações emitidas. No momento, cada papel tem um preço de R$ 15.{'\n'}{'\n'}

                        Para ilustrar:{'\n'}{'\n'}

                        • PL = R$ 250 milhões;{'\n'}
                        • Ações emitidas: 20 milhões;{'\n'}
                        • Preço por Ação: R$ 15.{'\n'}{'\n'}

                        Primeiro, precisamos calcular o VPA:{'\n'}{'\n'}

                        • 250 milhões ÷ 20 milhões = 12,5.{'\n'}{'\n'}

                        Depois, dividimos o VPA pelo preço por Ação, da seguinte forma:{'\n'}{'\n'}

                        • P/VPA = 15 ÷ 12,5 = 1,2.{'\n'}{'\n'}

                        Chegamos ao indicador de 1,2. O cálculo também pode ser utilizado para analisar investimentos 
                        em Fundos Imobiliários. Nesse caso, utiliza-se o número de cotas e o valor das cotas para fazer o cálculo.

                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Como interpretar o resultado do P/VPA?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Após encontrar o valor do
                        <Text style={[styles.contentBold, styles.shadow]}> P/VPA</Text> em uma Ação ou em um FII, é importante entender como o resultado deve ser interpretado.
                       </Text>
                       <Text style={[styles.content, styles.shadow]}>   Veja a seguir os aspectos gerais:
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   
                        • P/PVA igual 1: a Ação ou cota está igual ao valor patrimonial que ela tem;{'\n'}
                        • P/PVA superior a 1: a Ação ou cota está acima do valor patrimonial;{'\n'}
                        • P/PVA inferior a 1: a Ação ou cota está abaixo do valor patrimonial.

                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   O indicador reflete o momento atual da empresa, sendo que o resultado mais natural é próximo a 1. 
                        Ou seja, quando está em 1 a Ação ou cota está custando no mercado exatamente o que representa do patrimônio da companhia ou do fundo.
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>   O dado pode ser utilizado para ajudar na definição do seu investimento. Por exemplo, um resultado 
                        inferior a 1 indica que o preço está barato. Afinal, o patrimônio é mais alto do que ele. Assim, a análise pode significar que é uma opção favorável 
                        para investir.{'\n'}{'\n'}
                        No entanto, como já foi dito, a análise de um indicador não deve ser feita isoladamente. Os resultados precisam ser interpretados de forma mais aprofundada. 
                        Além de considerar o momento e o setor da empresa, utilize também outros fundamentos em conjunto.
                        </Text>

                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Exemplos de utilização do P/VPA</Text>
                        <Text style={[styles.content, styles.shadow]}>   A aplicação prática do P/VPA na sua carteira dependerá dos seus objetivos com o investimento. 
                        Então não existe uma fórmula exata sobre como utilizar o indicador.
                       </Text>
                        <Text style={[styles.content, styles.shadow]}>   Geralmente, em investimentos de longo prazo ele é um dos fundamentos considerados para definir 
                        o momento de investir. Aqui, é comum buscar Ações ou cotas que tenham um preço mais baixo do que seu valor, por apresentarem um maior potencial de retorno. Quando o mercado precificar o ativo mais perto do seu valor o investidor já terá uma valorização.
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>   Para evitar equívocos ou vieses na sua avaliação, o ideal é não considerar apenas o P/VPA. Nesse cenário, é importante entender quais outros indicadores podem ser avaliados.
                        </Text>

                        <Text style={[styles.content, styles.shadow]}>   Veja alguns exemplos:
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   
                        • Preço/Lucro (P/L), que indica o valor que o mercado se dispõe a pagar pelos lucros da organização;{'\n'}{'\n'}
                        • Valor da empresa/ Lucro Antes de Juros, Impostos, Depreciação e Amortização (EV/Ebdta), que mostra relação entre o valor da empresa e o lucro operacional;{'\n'}{'\n'}
                        • Outros fundamentos que indicam a saúde financeira e corporativa da empresa ou fundo.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    hyperlink: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#ff0000'
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#FFF'
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#FFF'
    },
    topicContent: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF'
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
        color: '#FFF'
    },
    contentBold: {
        fontFamily: 'Montserrat_500Medium',
        color: '#FFF',
        fontSize: 16
    },
    cardBoard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#2f3c6f'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});