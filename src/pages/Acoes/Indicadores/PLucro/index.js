import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function PLucro() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Definição</Text>
                        <Text style={[styles.content, styles.shadow]}>   Apesar de diversos fatores estarem 
                        inclusos na escolha de boas Ações para compor uma carteira de investimentos, o retorno 
                        é um dos principais. É comum que os investidores tentem entender se a compra do ativo 
                        pode ou não compensar. Assim, visam a escolher aqueles capazes de trazer os melhores resultados.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Mas como saber disso? O P/L pode ajudar. 
                        Em linhas gerais, ele é o resultado entre a divisão do preço da Ação pelo lucro acumulado 
                        (por Ação) pela empresa nos últimos doze meses. Desse modo, demonstra o quão dispostos os 
                        investidores estão em pagar pelo ativo em relação ao lucro que ele oferece.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Ao falar sobre os preços das Ações, estamos 
                        nos referindo ao valor de mercado delas. Já o termo “lucro por Ação” diz respeito a uma média 
                        que mostra os resultados da empresa relacionados a cada papel emitido.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Na prática, suponha que ao realizar o cálculo 
                        do P/L o investidor se deparou com o valor de 7. Isso significa que o preço atual do ativo 
                        representa 7 vezes o lucro gerado pela organização nos últimos doze meses.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Para que serve esse indicador?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Em resumo, o P/L pode indicar como o mercado 
                        financeiro enxerga determinada empresa. Sendo assim, quanto maior o número resultante ao calcular 
                        o indicador, maiores tendem a ser as expectativas em relação ao crescimento da organização.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Contudo, essa não é a única razão por trás de um preço 
                        sobre lucro alto. Além dela, é possível que o mercado esteja supervalorizando a perspectiva de evolução 
                        do negócio.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Já em termos de um P/L baixo, também existem algumas suposições. 
                        A primeira é o que os investidores têm tido bastante lucro com o ativo. Porém, limitar a análise pode ser arriscado. 
                        Afinal, o indicador baixo pode ser também reflexo de um desempenho ruim por parte da companhia — que fez com que as 
                        expectativas mercadológicas caíssem.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Além disso, o resultado do preço sobre lucro pode se dever a fatores 
                        atípicos, que não se repetirão. Desse modo, por mais que a função do indicador P/L seja apresentar a relação entre o 
                        valor de mercado da Ação e o lucro por unidade que ela apresentou no último ano, existem várias formas de interpretá-lo.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Quais as vantagens do uso do P/L?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Conforme visto, é importante ter uma visão abrangente do cenário por trás 
                        dos lucros da empresa antes de investir em seus ativos. Quando isso é feito — em geral ao unir a análise do P/L a outros 
                        indicadores, diversos benefícios podem ser obtidos.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Em relação ao uso do preço sobre lucro, uma das vantagens é a facilidade. 
                        O indicador traz uma visão rápida do panorama de resultados de uma organização. Dessa forma, o investidor pode entender 
                        se há perspectiva de crescimento, o que é interessante para o longo prazo.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Em segundo lugar está a possibilidade de conferir quais empresas estão 
                        alinhadas aos seus objetivos e perfil de investidor. Isso pode ser feito ao comparar empresas do mesmo setor — visto 
                        que elas compartilham similaridades circunstanciais, como impostos, incentivos e matérias-primas.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Sendo assim, a principal função da análise de fundamentos, como o preço sobre 
                        lucro, é oferecer informações para o longo prazo. Por meio dela, o investidor pode decidir que Ações são interessantes para 
                        compor sua carteira.
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>Quais as limitações do seu uso?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Ao conhecer as vantagens do indicador preço sobre lucro, muitos investidores 
                        podem se interessar pelo seu uso. Contudo, é preciso tomar alguns cuidados, pois existem algumas desvantagens e limitações.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>   Confira a seguir:
                        </Text>
                    </View>
                </View>

                <View style={[styles.cardBoard, styles.shadow]}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.title, styles.shadow]}>É preciso combiná-lo a outros indicadores?</Text>
                        <Text style={[styles.content, styles.shadow]}>   Em primeiro lugar, está o fato de que o P/L não deve ser usado sozinho. 
                        Conforme apresentado, muitos fatores podem estar envolvidos no desempenho operacional de uma empresa.
                        </Text>
                        <Text style={[styles.content, styles.shadow]}>  Assim, é preciso ter um contexto para saber interpretar o resultado do 
                        preço sobre lucro de forma efetiva. Utilizar outros indicadores em conjunto é muito válido. Por exemplo, o Preço / Valor 
                        Patrimonial e o Dividend Yield.
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
