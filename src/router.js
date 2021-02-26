import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Info from './pages/Info';
import Home from './pages/Home';

{ /*-------------------*/ }
{ /*-------------------*/ }

import Acoes from "./pages/Acoes";
import Indicadores from './pages/Acoes/Indicadores';
import PLiquido from './pages/Acoes/Indicadores/PLiquido';
import DividaBruta from './pages/Acoes/Indicadores/DividaBruta';
import FluxoCaixa from './pages/Acoes/Indicadores/FluxoCaixa';
import DividaLiquida from './pages/Acoes/Indicadores/DividaLiquida';
import Roe from './pages/Acoes/Indicadores/Roe';
import Roa from './pages/Acoes/Indicadores/Roa';
import Roic from './pages/Acoes/Indicadores/Roic';
import Ebit from './pages/Acoes/Indicadores/Ebit';
import Ebitda from './pages/Acoes/Indicadores/Ebitda';
import PrecoVpa from './pages/Acoes/Indicadores/PrecoVpa';

{ /*-------------------*/ }
{ /*-------------------*/ }

import Bdrs from "./pages/Bdrs";
import Definicao from "./pages/Bdrs/Definicao";
import TiposBDR from "./pages/Bdrs/Tipos";
import ListaBDR from "./pages/Bdrs/Lista";
import Caracteristicas from "./pages/Bdrs/Caracteristicas";
import VantagensProduto from "./pages/Bdrs/Vantagens";

{ /*-------------------*/ }
{ /*-------------------*/ }

import Fiis from "./pages/Fiis";

const Stack = createStackNavigator();

function Routes() {
    const navigationRef = React.useRef(null);
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerLeft: () => (
                            <Image style={styles.img} source={require('../assets/home/extensed.png')} />
                        ),
                        headerRight: () => (
                            <View style={styles.viewInline}>
                                <TouchableOpacity style={styles.buttons} onPress={() => navigationRef.current?.navigate('Info')}>
                                    <Feather name="inbox" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons} onPress={() => navigationRef.current?.navigate('Info')}>
                                    <Feather name="instagram" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons} onPress={() => navigationRef.current?.navigate('Info')}>
                                    <Feather name="info" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Info" component={Info}
                    options={{
                        title: 'Sobre nós',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Acoes" component={Acoes}
                    options={{
                        title: 'Ações',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Indicadores" component={Indicadores}
                    options={{
                        title: 'Indicadores',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
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
                        headerBackTitleVisible: false,
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
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="FluxoCaixa" component={FluxoCaixa}
                    options={{
                        title: 'Fluxo de Caixa',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividaLiquida" component={DividaLiquida}
                    options={{
                        title: 'Dívida Líquida',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Roe" component={Roe}
                    options={{
                        title: 'ROE',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Roa" component={Roa}
                    options={{
                        title: 'ROA',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Roic" component={Roic}
                    options={{
                        title: 'ROIC',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Ebit" component={Ebit}
                    options={{
                        title: 'Ebit',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Ebitda" component={Ebitda}
                    options={{
                        title: 'Ebitda',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="PrecoVpa" component={PrecoVpa}
                    options={{
                        title: 'Preço VPA',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

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
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Definicao" component={Definicao}
                    options={{
                        title: 'Definição',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            fontSize: 18
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TiposBDR" component={TiposBDR}
                    options={{
                        title: 'Tipos',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            fontSize: 18
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ListaBDR" component={ListaBDR}
                    options={{
                        title: 'Lista',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            fontSize: 18
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Caracteristicas" component={Caracteristicas}
                    options={{
                        title: 'Características',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            fontSize: 18
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="VantagensProduto" component={VantagensProduto}
                    options={{
                        title: 'Vantagens',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            fontSize: 18
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Fiis" component={Fiis}
                    options={{
                        title: 'Fundos Imobiliários',
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 10,
        width: 170,
        height: 30
    },
    viewInline: {
        flexDirection: 'row',
        marginRight: 10,
    },
    buttons: {
        backgroundColor: '#d1286d',
        borderRadius: 30,
        padding: 7,
        marginRight: 5,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
});


export default Routes;