import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet, View, Linking, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BottomPopup } from "./components/BottomPopup";

{ /*-------------------*/ }
{ /*-------------------*/ }

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

{ /*-------------------*/ }
{ /*-------------------*/ }

const Stack = createStackNavigator();

function Routes() {
    const navigationRef = React.useRef(null);
    let popupInfo = React.createRef();
    const urlDonate = "https://www.paypal.com/donate?hosted_button_id=EAMF7WY7HY2SQ";

    const onShowInfo = () => {
        popupInfo.show()
    }

    const onClosePopupInfo = () => {
        popupInfo.close()
    }

    contentInfo = () => {
        return (
            <View>
                <Text style={styles.textContent}>   Primeiramente, me chamo Guilherme, fiz esse projeto juntamente com meu amigo Kevin,
                    somos apaixonados por tecnologia e investimentos no geral, decidimos juntar os dois fundando o projeto Help Invest.{"\n"}{"\n"}   Falando um pouco sobre o Help Invest,
                    ao longo da nossa jornada de investidores, percebemos que o acesso a informação é bem difícil para quem esta começando nesse mundo, e muitas das
                    vezes as pessoas desistem de investir por falta de acesso às informações básicas, percebemos esse problema e aqui estamos.{"\n"}{"\n"}   Estamos abertos para propostas, e
                    sujestões funcionais no app, fique à vontade para mandar um email para nós.{"\n"}</Text>
                <Text style={styles.textContent}>   Somos um projeto sem nenhum investimento externo, e atualmente estamos apenas com um tipo de anúncio, caso você queira contribuir conosco,
                    sinta-se à vontade para enviar a quantia que desejar, qualquer valor será bem-vindo. Muito obrigado.</Text>
                <View style={styles.buttonPaypal}>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(urlDonate)}>
                        <Image style={styles.imgPaypal} source={require('../assets/buttons/paypal/paypal.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

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
                                <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL('mailto:app.helpinvest@gmail.com?subject=Ola')}>
                                    <Feather name="inbox" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL('https://www.instagram.com/helpinvest.app/')}>
                                    <Feather name="instagram" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons} onPress={onShowInfo}>
                                    <Feather name="info" size={24} color="white" />
                                </TouchableOpacity>
                                <BottomPopup
                                    title="Info"
                                    content={contentInfo()}
                                    ref={(target) => popupInfo = target}
                                    onTouchOutside={onClosePopupInfo}
                                />
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
    },
    textContent: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#000'
    },
    buttonPaypal: {
        alignItems: 'center'
    },
    imgPaypal: {
        alignItems: 'center',
        width: 300,
        height: 99
    }
});


export default Routes;