import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

export default function Vantagens() {
 return (
  <SafeAreaView style={styles.container}>
  <ScrollView>

      <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
              <Text style={[styles.title, styles.shadow]}>BDR's Patrocinados</Text>
              <Text style={[styles.subtitle, styles.shadow]}>Vantagens do Produto</Text>
              <Text style={[styles.content, styles.shadow]}>  
                Acesso facilitado aos valores mobiliários de companhias estrangeiras sem ter que pagar os custos relacionados à remessa de recursos para o Exterior.{"\n"}
                {"\n"}
                Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem com ativos locais e estrangeiros.{"\n"}
                {"\n"}
                Apesar de o investidor ficar exposto às variações de preços de um ativo estrangeiro, as operações são realizadas no Brasil e a liquidação é feita em reais.{"\n"}
              </Text>
          </View>
      </View>

      <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
              <Text style={[styles.title, styles.shadow]}>BDR's Não Patrocinados</Text>
              <Text style={[styles.subtitle, styles.shadow]}>Vantagens do Produto</Text>
              <Text style={[styles.content, styles.shadow]}> 
                Acesso facilitado aos valores mobiliários de companhias estrangeiras sem a necessidade de pagamento dos custos relacionados à remessa de recursos e manutenção de conta no Exterior.{"\n"}
                {"\n"}
                Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem com ativos locais e estrangeiros.{"\n"}
                {"\n"}
                Apesar do investidor ficar exposto às variações de preços de um ativo estrangeiro, as operações são realizadas no Brasil e a liquidação é feita em reais.{"\n"}
              </Text>
          </View>
      </View>

      <View style={[styles.cardBoard, styles.shadow, { marginTop: 10 }]}>
          <View style={styles.cardContent}>
              <Text style={[styles.title, styles.shadow]}>BDR de ETF</Text>
              <Text style={[styles.subtitle, styles.shadow]}>Vantagens do Produto</Text>
              <Text style={[styles.content, styles.shadow]}>
                Acesso facilitado aos ETFs estrangeiros sem ter que pagar os custos relacionados à remessa de recursos para o Exterior.{"\n"}
                {"\n"}
                Possibilidade de elaboração de estratégias, diversificação de investimentos e arbitragem com ativos locais e estrangeiros.{"\n"}
                {"\n"}
                Apesar de o investidor ficar exposto às variações de preços de um ativo estrangeiro, as operações são realizadas no Brasil e a liquidação é feita em reais.{"\n"}
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
  title: {
      fontFamily: 'Montserrat_700Bold',
      textAlign: 'center',
      fontSize: 17,
      color: '#FFF'
  },
  content: {
      fontFamily: 'Montserrat_400Regular',
      textAlign: 'left',
      fontSize: 15,
      marginTop: 10,
      color: '#FFF'
  },
  cardBoard: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#2f3c6f'
  },
  cardContent: {
      marginHorizontal: 18,
      marginVertical: 10
  },
  subtitle: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 14,
    color: '#FFF'
}
});