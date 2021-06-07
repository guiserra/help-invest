import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet, View, Linking, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BottomPopup } from "./components/BottomPopup";

{ /*-------------------*/ }
{ /*-------------------*/ }

import Home from './pages/Home';

{ /*-------------------*/ }
{ /*-------------------*/ }

import Acoes from "./pages/Acoes";
import DefinicaoAcao from "./pages/Acoes/Definicao";

import IndicadoresAcoes from './pages/Acoes/Indicadores';
import PatrimonioLiquido from './pages/Acoes/Indicadores/PatrimonioLiquido';
import DividaBruta from './pages/Acoes/Indicadores/DividaBruta';
import FluxoCaixa from './pages/Acoes/Indicadores/FluxoCaixa';
import DividaLiquida from './pages/Acoes/Indicadores/DividaLiquida';
import Roe from './pages/Acoes/Indicadores/Roe';
import Roa from './pages/Acoes/Indicadores/Roa';
import Roic from './pages/Acoes/Indicadores/Roic';
import Ebit from './pages/Acoes/Indicadores/Ebit';
import Ebitda from './pages/Acoes/Indicadores/Ebitda';
import PrecoValorPatrimonial from './pages/Acoes/Indicadores/PrecoValorPatrimonial';
import PrecoLucro from './pages/Acoes/Indicadores/PrecoLucro';
import IndiceLiquidez from './pages/Acoes/Indicadores/IndiceLiquidez';
import Payout from './pages/Acoes/Indicadores/Payout';
import NetPromoterScore from './pages/Acoes/Indicadores/NetPromoterScore';
import MargemLiquida from './pages/Acoes/Indicadores/MargemLiquida';
import DividaLiquidaPatrimonio from './pages/Acoes/Indicadores/DividaLiquidaPatrimonio';
import DividaLiquidaEbitda from './pages/Acoes/Indicadores/DividaLiquidaEbitda';
import MargemEbitda from './pages/Acoes/Indicadores/MargemEbitda';
import MargemBruta from './pages/Acoes/Indicadores/MargemBruta';
import AbsTurnover from './pages/Acoes/Indicadores/AbsTurnover';
import Adx from './pages/Acoes/Indicadores/Adx';
import Alavancagem from './pages/Acoes/Indicadores/Alavancagem';
import AtivoTotal from './pages/Acoes/Indicadores/AtivoTotal';

{ /*-------------------*/ }
{ /*-------------------*/ }

import Bdrs from "./pages/Bdrs";
import DefinicaoBdrs from "./pages/Bdrs/Definicao";
import TiposBDR from "./pages/Bdrs/Tipos";
import ListaBDR from "./pages/Bdrs/Lista";
import CaracteristicasBDR from "./pages/Bdrs/Caracteristicas";
import VantagensProdutoBDR from "./pages/Bdrs/Vantagens";

{ /*-------------------*/ }
{ /*-------------------*/ }

import Fiis from "./pages/Fiis";
import DefinicaoFiis from "./pages/Fiis/Definicao";
import TiposFiis from "./pages/Fiis/Tipos";
import ListaFiis from "./pages/Fiis/Lista";
import CaracteristicasFiis from "./pages/Fiis/Caracteristicas";
import VantagensProdutoFiis from "./pages/Fiis/Vantagens";
import TributacaoFii from "./pages/Fiis/Tributacao";

import IndicadoresFii from './pages/Fiis/Indicadores';
import AreaBrutaLocavel from './pages/Fiis/Indicadores/AreaBrutaLocavel';
import DividendYield from './pages/Fiis/Indicadores/DividendYield';
import Ifix from './pages/Fiis/Indicadores/Ifix';
import LiquidezDiaria from './pages/Fiis/Indicadores/LiquidezDiaria';
import Rentabilidade from './pages/Fiis/Indicadores/Rentabilidade';
import TaxaOcupacao from './pages/Fiis/Indicadores/TaxaOcupacao';
import Vacancia from './pages/Fiis/Indicadores/Vacancia';
import DividendPayoutRatio from './pages/Fiis/Indicadores/DividendPayoutRatio';
import IPO from './pages/Fiis/Indicadores/IPO';
import ValorPatrimonial from './pages/Fiis/Indicadores/ValorPatrimonial';

{ /*-------------------*/ }
{ /*-------------------*/ }

import Cdb from "./pages/Cdb";
import CaracteristicasCdb from "./pages/Cdb/CaracteristicasCdb";
import DefinicaoCdb from "./pages/Cdb/DefinicaoCdb";
import ListaCdb from "./pages/Cdb/ListaCdb";

{ /*-------------------*/ }
{ /*-------------------*/ }

import Etfs from "./pages/Etfs";
import TiposETFs from "./pages/Etfs/TiposETFs"
import CaracteristicasETFs from "./pages/Etfs/CaracteristicasETFs"
import VantagensProdutoETFs from "./pages/Etfs/VantagensProdutoETFs"
import ListaETFs from "./pages/Etfs/ListaETFs"
import DefinicaoETFs from "./pages/Etfs/DefinicaoETF"
import TributacaoETFs from "./pages/Etfs/TributacaoETFs"

{ /*-------------------*/ }
{ /*-------------------*/ }

import Criptomoedas from "./pages/Criptomoedas";
import ListaCriptomoedas from "./pages/Criptomoedas/ListaCriptomoedas";
import DefinicaoCriptomoedas from "./pages/Criptomoedas/DefinicaoCriptomoedas";
import CaracteristicasCriptomoedas from "./pages/Criptomoedas/CaracteristicasCriptomoedas";
import VantagensDesvantagensCriptomoedas from "./pages/Criptomoedas/VantagensDesvantagensCriptomoedas";
import TributacaoCriptomoedas from "./pages/Criptomoedas/TributacaoCriptomoedas";

import IndicadoresCriptomoedas from "./pages/Criptomoedas/Indicadores";
import AcumuladoAgressao from "./pages/Criptomoedas/Indicadores/AcumuladoAgressao";
import BandasBollinger from "./pages/Criptomoedas/Indicadores/BandasBollinger";
import IFR from "./pages/Criptomoedas/Indicadores/IFR";
import MediaMovel from "./pages/Criptomoedas/Indicadores/MediaMovel";
import Volume from "./pages/Criptomoedas/Indicadores/Volume";

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

    headerLeftContent = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => navigationRef.current?.navigate('Home')}>
                    <Image style={styles.img} source={require('../assets/home/extensed.png')} />
                </TouchableOpacity>
            </View>
        )
    }

    headerRightContent = () => {
        return (
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
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Acoes" component={Acoes}
                    options={{
                        title: ' ',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DefinicaoAcao" component={DefinicaoAcao}
                    options={{
                        title: ' ',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Indicadores" component={IndicadoresAcoes}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="PatrimonioLiquido" component={PatrimonioLiquido}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividaBruta" component={DividaBruta}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="FluxoCaixa" component={FluxoCaixa}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividaLiquida" component={DividaLiquida}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Roe" component={Roe}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Roa" component={Roa}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Roic" component={Roic}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Ebit" component={Ebit}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Ebitda" component={Ebitda}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="PrecoValorPatrimonial" component={PrecoValorPatrimonial}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="PrecoLucro" component={PrecoLucro}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividendYield" component={DividendYield}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="IndiceLiquidez" component={IndiceLiquidez}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Payout" component={Payout}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="NetPromoterScore" component={NetPromoterScore}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="MargemLiquida" component={MargemLiquida}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividaLiquidaPatrimonio" component={DividaLiquidaPatrimonio}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividaLiquidaEbitda" component={DividaLiquidaEbitda}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="MargemEbitda" component={MargemEbitda}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="MargemBruta" component={MargemBruta}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="AbsTurnover" component={AbsTurnover}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Adx" component={Adx}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Alavancagem" component={Alavancagem}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="AtivoTotal" component={AtivoTotal}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Bdrs" component={Bdrs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DefinicaoBdrs" component={DefinicaoBdrs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TiposBDR" component={TiposBDR}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ListaBDR" component={ListaBDR}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="CaracteristicasBDR" component={CaracteristicasBDR}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="VantagensProdutoBDR" component={VantagensProdutoBDR}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Fiis" component={Fiis}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DefinicaoFiis" component={DefinicaoFiis}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TiposFiis" component={TiposFiis}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ListaFiis" component={ListaFiis}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="CaracteristicasFiis" component={CaracteristicasFiis}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="VantagensProdutoFiis" component={VantagensProdutoFiis}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TributacaoFii" component={TributacaoFii}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="IndicadoresFii" component={IndicadoresFii}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="AreaBrutaLocavel" component={AreaBrutaLocavel}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Ifix" component={Ifix}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="LiquidezDiaria" component={LiquidezDiaria}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Rentabilidade" component={Rentabilidade}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TaxaOcupacao" component={TaxaOcupacao}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Vacancia" component={Vacancia}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DividendPayoutRatio" component={DividendPayoutRatio}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="IPO" component={IPO}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ValorPatrimonial" component={ValorPatrimonial}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Cdb" component={Cdb}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="CaracteristicasCdb" component={CaracteristicasCdb}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DefinicaoCdb" component={DefinicaoCdb}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ListaCdb" component={ListaCdb}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Etfs" component={Etfs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TiposETFs" component={TiposETFs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="CaracteristicasETFs" component={CaracteristicasETFs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="VantagensProdutoETFs" component={VantagensProdutoETFs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ListaETFs" component={ListaETFs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DefinicaoETFs" component={DefinicaoETFs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TributacaoETFs" component={TributacaoETFs}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                { /*------------------------------------------------------------------------------------------------*/}
                { /*------------------------------------------------------------------------------------------------*/}

                <Stack.Screen name="Criptomoedas" component={Criptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="ListaCriptomoedas" component={ListaCriptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="DefinicaoCriptomoedas" component={DefinicaoCriptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="CaracteristicasCriptomoedas" component={CaracteristicasCriptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="VantagensDesvantagensCriptomoedas" component={VantagensDesvantagensCriptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="TributacaoCriptomoedas" component={TributacaoCriptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="IndicadoresCriptomoedas" component={IndicadoresCriptomoedas}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="AcumuladoAgressao" component={AcumuladoAgressao}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="BandasBollinger" component={BandasBollinger}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="IFR" component={IFR}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="MediaMovel" component={MediaMovel}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

                <Stack.Screen name="Volume" component={Volume}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#313e6a'
                        },
                        headerLeft: () => (
                            headerLeftContent()
                        ),
                        headerRight: () => (
                            headerRightContent()
                        ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#FFF'
                    }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 15,
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