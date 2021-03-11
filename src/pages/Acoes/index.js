import React from 'react';
import { render } from 'react-dom';
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../components/ButtonsInLine';
import ButtonSmall from "../../components/ButtonSmall";

export default function Acoes({ navigation }) {

    const dados = [{textLeft: 'Definição', navigationLeft: 'DefinicaoAcao', textRight: 'Indicadores',  navigationRight: 'Indicadores'}, 
                   {textLeft: 'Dividendos', navigationLeft: 'DefinicaoAcao', textRight: 'Tipos',  navigationRight: 'Indicadores'}];
                   
    function renderButtons (){
        return(
            dados.map((dado) => 
                <ButtonsInLine                   
                    textLeft= {dado.textLeft}
                    onPressLeft={() => navigation.navigate(dado.navigationLeft)}

                    textRight= {dado.textRight}
                    onPressRight={() => navigation.navigate(dado.navigationRight)}
                />
            )
        );
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <View/>
            <Animatable.View useNativeDriver>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>Ações</Text>

                {renderButtons()}

                <ButtonSmall 
                    text='Tributação'
                    onPress={() => ('')}
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