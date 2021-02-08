import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Indicadores from './src/pages/Indicadores';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

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
      </Stack.Navigator>

    </NavigationContainer>
  );
}