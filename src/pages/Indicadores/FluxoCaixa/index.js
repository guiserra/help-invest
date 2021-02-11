import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Linking } from 'react-native';

export default function FluxoCaixa() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
            <Text style={[styles.title, styles.shadow]}>Definição</Text>
            <Text style={[styles.content, styles.shadow]}>   O
                  <Text style={[styles.contentBold, styles.shadow]}> Fluxo de Caixa</Text> é o indicador mais importante de 
                  uma empresa, ele irá mostrar o saldo das entradas (+) e saídas (-) financeiras da empresa. Como diz a 
                  expressão: “O caixa é rei”, pois é ele que irá refletir o dia a dia do negócio, o dinheiro disponível 
                  para sua utilização nas mais diversas aplicações. O caixa mostra, em médio e longo prazo, a saúde 
                  financeira de uma empresa.
              </Text>
            <Text style={[styles.content, styles.shadow]}>   O caixa pode quebrar uma empresa, pois se realizarmos as 
            vendas com lucro, porém os prazos de recebimentos forem muito maiores que os prazos de pagamento, e essa 
            empresa não estiver preparada para essa operação, isso pode quebra-la.
              </Text>
            <Text style={[styles.content, styles.shadow]}>   Vejamos um exemplo à seguir:
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