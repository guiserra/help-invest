import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Info from './pages/Info';

import Home from './pages/Home';
{/*-------------------*/ }
import Indicadores from './pages/Indicadores';
import PLiquido from './pages/PLiquido';
import DividaBruta from './pages/DividaBruta';
{/*-------------------*/ }
import Bdrs from "./pages/Bdrs";
{/*-------------------*/ }
import Fiis from "./pages/Fiis";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Help Invest',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => { }}>
                                <Feather name="info" size={24} color="white" />
                            </TouchableOpacity>
                        ),
                        headerTintColor: '#FFF'
                    }} />

                {/*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Indicadores" component={Indicadores}
                    options={{
                        title: 'Indicadores',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="PLiquido" component={PLiquido}
                    options={{
                        title: 'Patrimônio Líquido',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividaBruta" component={DividaBruta}
                    options={{
                        title: 'Dívida Bruta',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerTintColor: '#FFF'
                    }} />

                {/*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Bdrs" component={Bdrs}
                    options={{
                        title: 'Brazilian Depositary Receipts',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            fontSize: 18
                        },
                        headerTintColor: '#FFF'
                    }} />

                {/*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Fiis" component={Fiis}
                    options={{
                        title: 'Fundos Imobiliários',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerTintColor: '#FFF'
                    }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;