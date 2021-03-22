import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function IPO() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>IPO</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Basicamente,
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPO </Text>
                            (sigla em inglês para
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Initial Public Offering</Text>
                            ) em fundos imobiliários é a forma de iniciar um
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII</Text>.

                            {"\n"}{"\n"}

                            Em outras palavras, o
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPO </Text>
                            fundos imobiliários é o lançamento das cotas do
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> FII </Text>
                            no mercado de capitais.

                            

                            Nesse caso, seu objetivo é gerar renda através da captação de recursos no mercado, para
                            investir em ativos voltados para o segmento imobiliário. O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> IPO </Text>
                            em fundos imobiliários pode ser uma excelente maneira de investir neste setor.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como Funciona o Processo de um IPO?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            Basicamente, antes de iniciar suas atividades, o fundo apresenta sua estratégia de investimento
                            ao mercado e também o preço da cota, juntamente com a rentabilidade esperada.
                            
                            {"\n"}{"\n"}
                            
                            <Text style={[globalStyles.recipe, globalStyles.shadow]}>
                                A ideia é atrair os investidores para serem cotistas do fundo.
                            </Text>
                            
                            {"\n"}{"\n"}

                            No início, o funcionamento acontece da seguinte maneira: o fundo capta dinheiro dos investidores 
                            para comprar/construir os imóveis ou também os títulos que irão constituir sua carteira.

                            {"\n"}{"\n"}

                            Os investidores interessados na oferta pública terão um prazo para decidir a quantia destinada ao 
                            fundo para reservar suas cotas.

                            {"\n"}{"\n"}

                            Terminado esse período, o fundo fecha para a captação e após isso, a única forma de investir no 
                            fundo passa a ser por meio da compra de cotas no mercado secundário na bolsa de valores.
                            
                            {"\n"}{"\n"}

                            Entretanto, caso o fundo precise de mais recursos no futuro, ele pode fazer um 
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> follow-on</Text>, 
                            para uma nova captação.
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Qual a vantagem de participar de um IPO?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>
                            A principal vantagem é que, como é a primeira vez que o fundo é colocado no mercado, o investidor tem a 
                            possibilidade de participar desde o início do seu desempenho.

                            {"\n"}{"\n"}

                            Além disso, se o investidor souber analisar e escolher o fundo, ele terá chances de obter grandes 
                            rendimentos.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}