import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Indicadores from './src/pages/Indicadores';
import PLiquido from './src/pages/PLiquido';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home }
        options={{
          title: 'Help Invest',
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#FFF'
        }}/>

        <Stack.Screen name="Indicadores" component={ Indicadores }
        options={{
          title: 'Indicadores',
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#FFF'
        }}/>

      <Stack.Screen name="PLiquido" component={ PLiquido }
        options={{
          title: 'Patrimônio Líquido',
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#FFF'
        }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}