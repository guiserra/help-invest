import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

import { globalStyles } from '../../../../../styles/indicadoresGlobal';

export default function FluxoCaixa() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>

        <Text style={globalStyles.text}>Fluxo de Caixa</Text>

        <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   O
                  <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Fluxo de Caixa</Text> nada mais é do que a soma
                  de todo o dinheiro que entra e que sai da empresa. É através dele que o empresário consegue visualizar
                  como está gastando o seu dinheiro e quanto de lucro ele tem tido.
            </Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   De forma simples, o fluxo de caixa de uma empresa é
            semelhante a um orçamento doméstico. Se a pessoa não sabe quanto recebe todos os meses, e nem quais os gastos
            que ela tem, as chances de fechar no vermelho ou de faltar dinheiro para pagar alguma conta são grandes.
            </Text>
          </View>
        </View>

        <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o Fluxo de Caixa?</Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   O primeiro passo para calcular o fluxo de caixa é ter
            absolutamente todas as receitas e despesas anotadas. Mesmo aquelas pequenas, que parecem ser sem importância.
            </Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   Em seguida, será preciso somar todas as receitas, que geralmente
            são provenientes das operações que a empresa realiza (vendas de produtos e serviços) e dos investimentos que a
            empresa recebe.
            </Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   O próximo passo será somar todos os gastos que a empresa teve no
            mesmo período. Esses valores são provenientes dos gastos operacionais (aluguel, compra de matéria-prima, salários
            de funcionários, por exemplo), pagamentos de impostos, dividendos, compra de equipamentos, dentre outros.
            </Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   Para o cálculo, é fundamental que seja utilizado o mesmo período
            para a soma das receitas e dos gastos. Em seguida, basta subtrair do valor obtido de receita o valor obtido das
            despesas:
            </Text>
            <Text style={[globalStyles.subtitle, globalStyles.shadow]}>Cálculo operacional = Receitas - Despesas</Text>
          </View>
        </View>


        <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
          <View style={globalStyles.cardContent}>
            <Text style={[globalStyles.title, globalStyles.shadow]}>Como controlar o fluxo de caixa</Text>
            <Text style={[globalStyles.content, globalStyles.shadow]}>   Empresas que mantém um bom controle de fluxo de caixa podem
            realizar investimentos tranquilamente e ainda conseguir se planejar para o futuro, como buscar linhas de
            créditos para a sua empresa. Veja a seguir algumas dicas para manter o controle do seu fluxo de caixa:
            </Text>

            <Text style={[globalStyles.content, globalStyles.shadow]}>
              <Text style={[globalStyles.subtitle, globalStyles.shadow]}>   Saldo inicial </Text>
              {"\n"}{"\n"}
              <Text style={[globalStyles.content, globalStyles.shadow]}>    A primeira coisa que deve ser feita é saber exatamente quanto
              a empresa tem disponível em caixa. Para isso, basta somar o saldo de todas as contas bancárias que a empresa possui.
             </Text>
              {"\n"}{"\n"}


              <Text style={[globalStyles.subtitle, globalStyles.shadow]}>   Anote as entradas e saídas de dinheiro </Text>
              {"\n"}{"\n"}
              <Text style={[globalStyles.content, globalStyles.shadow]}>   Em seguida, será necessário anotar todas as receitas e os gastos
              que a empresa teve. Esse controle pode ser feito em uma planilha diária, semanal ou até mesmo mensal. O mais importante
              é não esquecer de anotar os gastos.
                {"\n"}{"\n"}
                <Text style={[globalStyles.content, globalStyles.shadow]}>   Vale lembrar que pagamentos parcelados devem aparecer neste controle.
                Assim fica ainda mais fácil ter uma boa projeção de fluxo de caixa.
                </Text>
                {"\n"}{"\n"}


                <Text style={[globalStyles.subtitle, globalStyles.shadow]}>   Calcule o saldo operacional </Text>
                {"\n"}{"\n"}
                <Text style={[globalStyles.content, globalStyles.shadow]}>   Uma vez que as receitas e despesas são conhecidas, será possível
                fazer o cálculo do saldo operacional da sua empresa.
                {"\n"}{"\n"}
                </Text>


                <Text style={[globalStyles.subtitle, globalStyles.shadow]}>   Calcule o saldo período </Text>
                {"\n"}{"\n"}
                <Text style={[globalStyles.content, globalStyles.shadow]}>   E por fim, faça o cálculo do saldo final do período. Isso significa
                subtrair o valor do saldo operacional do saldo inicial.
                {"\n"}{"\n"}
                </Text>


              </Text>
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  );
}