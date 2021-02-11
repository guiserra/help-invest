import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, ScrollView, Linking } from 'react-native';

export default function FluxoCaixa() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
            <Text style={[styles.title, styles.shadow]}>Definição</Text>
            <Text style={[styles.content, styles.shadow]}>   O
                  <Text style={[styles.contentBold, styles.shadow]}> Fluxo de Caixa</Text> nada mais é do que a soma
                  de todo o dinheiro que entra e que sai da empresa. É através dele que o empresário consegue visualizar
                  como está gastando o seu dinheiro e quanto de lucro ele tem tido.
            </Text>
            <Text style={[styles.content, styles.shadow]}>   Falando assim já fica fácil de entender a importância de se
            manter um bom controle de fluxo de caixa. Isso porque, somente conhecendo quais são as despesas e quais as
            receitas é que é possível melhorar o gerenciamento financeiro de qualquer negócio, seja ele de pequeno,
            médio ou grande porte.
            </Text>
            <Text style={[styles.content, styles.shadow]}>   De forma simples, o fluxo de caixa de uma empresa é
            semelhante a um orçamento doméstico. Se a pessoa não sabe quanto recebe todos os meses, e nem quais os gastos
            que ela tem, as chances de fechar no vermelho ou de faltar dinheiro para pagar alguma conta são grandes.
            </Text>
          </View>
        </View>

        <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
            <Text style={[styles.title, styles.shadow]}>Como calcular o Fluxo de Caixa?</Text>
            <Text style={[styles.content, styles.shadow]}>   O primeiro passo para calcular o fluxo de caixa é ter
            absolutamente todas as receitas e despesas anotadas. Mesmo aquelas pequenas, que parecem ser sem importância.
            </Text>
            <Text style={[styles.content, styles.shadow]}>   Em seguida, será preciso somar todas as receitas, que geralmente
            são provenientes das operações que a empresa realiza (vendas de produtos e serviços) e dos investimentos que a
            empresa recebe.
            </Text>
            <Text style={[styles.content, styles.shadow]}>   O próximo passo será somar todos os gastos que a empresa teve no
            mesmo período. Esses valores são provenientes dos gastos operacionais (aluguel, compra de matéria-prima, salários
            de funcionários, por exemplo), pagamentos de impostos, dividendos, compra de equipamentos, dentre outros.
            </Text>
            <Text style={[styles.content, styles.shadow]}>   Para o cálculo, é fundamental que seja utilizado o mesmo período
            para a soma das receitas e dos gastos. Em seguida, basta subtrair do valor obtido de receita o valor obtido das
            despesas:
            </Text>
            <Text style={[styles.title, styles.shadow]}>Cálculo operacional = Receitas - Despesas</Text>
          </View>
        </View>
        

        <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
            <Text style={[styles.title, styles.shadow]}>Como controlar o fluxo de caixa</Text>
            <Text style={[styles.content, styles.shadow]}>   Empresas que mantém um bom controle de fluxo de caixa podem
            realizar investimentos tranquilamente e ainda conseguir se planejar para o futuro, como buscar linhas de
            créditos para a sua empresa. Veja a seguir algumas dicas para manter o controle do seu fluxo de caixa:
            </Text>

            <Text style={[styles.content, styles.shadow]}>
              <Text style={[styles.subtitle, styles.shadow]}>   Saldo inicial </Text>
              {"\n"}{"\n"}
              <Text style={[styles.content, styles.shadow]}>    A primeira coisa que deve ser feita é saber exatamente quanto
              a empresa tem disponível em caixa. Para isso, basta somar o saldo de todas as contas bancárias que a empresa possui.
             </Text>
              {"\n"}{"\n"}


              <Text style={[styles.subtitle, styles.shadow]}>   Anote as entradas e saídas de dinheiro </Text>
              {"\n"}{"\n"}
              <Text style={[styles.content, styles.shadow]}>   Em seguida, será necessário anotar todas as receitas e os gastos
              que a empresa teve. Esse controle pode ser feito em uma planilha diária, semanal ou até mesmo mensal. O mais importante
              é não esquecer de anotar os gastos.
                {"\n"}{"\n"}
                <Text style={[styles.content, styles.shadow]}>   Vale lembrar que pagamentos parcelados devem aparecer neste controle.
                Assim fica ainda mais fácil ter uma boa projeção de fluxo de caixa.
                </Text>
                {"\n"}{"\n"}


                <Text style={[styles.subtitle, styles.shadow]}>   Calcule o saldo operacional </Text>
                {"\n"}{"\n"}
                <Text style={[styles.content, styles.shadow]}>   Uma vez que as receitas e despesas são conhecidas, será possível
                fazer o cálculo do saldo operacional da sua empresa.
                {"\n"}{"\n"}
                </Text>


                <Text style={[styles.subtitle, styles.shadow]}>   Calcule o saldo período </Text>
                {"\n"}{"\n"}
                <Text style={[styles.content, styles.shadow]}>   E por fim, faça o cálculo do saldo final do período. Isso significa 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  imagem: {
    width: 358,
    height: 240,
    resizeMode: 'stretch',
    marginHorizontal: 20

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