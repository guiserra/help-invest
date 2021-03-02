import React from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../components/ButtonsInLine';

export default function Acoes({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <View/>
            <Animatable.View useNativeDriver>
                <ScrollView>
                    
                <Text style={styles.text}>Ações</Text>

                    <ButtonsInLine
                        textLeft='Definição'
                        onPressLeft={() => navigation.navigate('DefinicaoAcao')}
                        textRight='Indicadores'
                        onPressRight={() => navigation.navigate('Indicadores')}
                    />

                    <ButtonsInLine
                        textLeft='Patrimônio Líquido'
                        onPressLeft={() => navigation.navigate('Indicadores')}
                        textRight='Dívida Bruta'
                        onPressRight={() => navigation.navigate('DividaBruta')}
                    />

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Righteous_400Regular',
      textAlign: 'center',
      fontSize: 28,
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.15)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 0.1,
      padding: 10
    }
  });