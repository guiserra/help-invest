import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function AbsTurnover() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>Absenteísmo e turnover</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Absenteísmo e turnover</Text> são indicadores do total de faltas e atrasos dos
                        colaboradores e a relação entre admissões e saídas de funcionários de uma empresa, respectivamente. Altas taxas em ambos produz impactos negativos
                        para as organizações.{"\n"}{"\n"}
                        Geralmente, os casos têm origem em um mesmo problema. Assim, influenciam de
                        maneira direta a produtividade do negócio, diminuindo a rentabilidade.
                        antes de investir.
                     </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Qual a diferença entre turnover e absenteísmo?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Para que <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Absenteísmo e turnover</Text> 
                        possam ser combatidos, o primeiro passo é compreender as diferenças entre os dois conceitos:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        • Absenteísmo — período em que os colaboradores se ausentam do trabalho, seja por atrasos, seja por faltas; {"\n"}
                        • Turnover — é a rotatividade de pessoal, ou seja, o índice que revela quantos colaboradores são desligados pela empresa ou pedem demissão.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Em linhas gerais, o absenteísmo pode ser caracterizado por faltas injustificadas, 
                        problemas de saúde ou pessoais, imprevistos e até mesmo a indisciplina do profissional. O seu excesso pode levar à demissão, aumentando as taxas de rotatividade.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular cada um deles?</Text>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Absenteísmo</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A fórmula mais utilizada para o cálculo do absenteísmo é:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   (quantidade média de colaboradores x total de dias úteis perdidos)
                        ÷ (quantidade média de colaboradores x total de dias úteis) = absenteísmo.{"\n"}{"\n"}
                        
                        Vamos a um exemplo prático? A sua empresa tem 100 colaboradores. Em um mês, 10 deles tiveram faltas e atrasos. Somando todos esses 
                        períodos, foram dois dias úteis perdidos.{"\n"}{"\n"}

                        Os gestores resolvem que vão analisar a taxa em uma avaliação mensal, cujo mês teve 22 dias úteis trabalhados. Assim, é feito o seguinte cálculo:
                        {"\n"}{"\n"}

                        • (100 colaboradores x 2 dias úteis perdidos) ÷ (100 colaboradores x 22 dias úteis)
                        {"\n"}
                        • 200 ÷ 2.200 = 0,090 ou 9% de absenteísmo.
                        {"\n"}
                        </Text>


                        <Text style={[globalStyles.title, globalStyles.shadow]}>Turnover</Text>

                        <Text style={[globalStyles.content, globalStyles.shadow]}>    Para fazer o cálculo correto do turnover, é necessário considerar três cenários:
                        {"\n"}{"\n"}

                        • Admissões e desligamentos mensais, chamado de turnover geral;
                        {"\n"}
                        • Total de desligamentos mensais ou turnover de desligados;
                        {"\n"}
                        • Turnover de admissões, que revela quanto profissionais com menos de 6 meses de casa deixaram a empresa.
                        {"\n"}{"\n"}
                        Assim, temos as seguintes formulas:
                        {"\n"}{"\n"}
                        • Turnover geral = ([admissões mensais + desligamentos mensais] ÷ 2) ÷ total de colaboradores;{"\n"}{"\n"}
                        • Turnover de desligados = total de desligamentos mensais ÷ total de colaboradores;{"\n"}{"\n"}
                        • Turnover de admissões = total de desligamentos de profissionais com menos de 6 meses de casa ÷ total de funcionários.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}