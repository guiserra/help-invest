import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';
import ButtonSmall from '../../../components/ButtonSmall';

export default function Indicadores({ navigation }) {


    const dados = [
        {
            "key": "1",
            "textLeft": "Absenteísmo e turnover",
            "navigationLeft": "AbsTurnover",
            "textRight": "ADX",
            "navigationRight": "Adx"
        },
        {
            "key": "2",
            "textLeft": "Alavancagem",
            "navigationLeft": "Alavancagem",
            "textRight": "Ativo total",
            "navigationRight": "AtivoTotal"
        },
        {
            "key": "3",
            "textLeft": "ATR",
            "navigationLeft": "Atr",
            "textRight": "Bull Bear Power",
            "navigationRight": "Bbp"
        },
        {
            "key": "4",
            "textLeft": "Caixa",
            "navigationLeft": "Caixa",
            "textRight": "Cci",
            "navigationRight": "Cci"
        },
        {
            "key": "5",
            "textLeft": "Depreciação e Amortização",
            "navigationLeft": "DepreciacaoAmortizacao",
            "textRight": "Divida Bruta",
            "navigationRight": "DividaBruta"
        },
        {
            "key": "6",
            "textLeft": "Divida Liquida",
            "navigationLeft": "DividaLiquida",
            "textRight": "Divida liquida / Ebitda",
            "navigationRight": "DividaLiquidaEbitda"
        },
        {
            "key": "7",
            "textLeft": "Divida Liquida / Patrimônio Liquido",
            "navigationLeft": "DividaLiquidaPatrimonio",
            "textRight": "Dividend Yield",
            "navigationRight": "DividendYield"
        },
        {
            "key": "8",
            "textLeft": "DL Ebitda",
            "navigationLeft": "DlEbitda",
            "textRight": "Ebit",
            "navigationRight": "Ebit"
        },
        {
            "key": "9",
            "textLeft": "Ebitda",
            "navigationLeft": "Ebitda",
            "textRight": "Fluxo de Caixa",
            "navigationRight": "FluxoCaixa"
        },
        {
            "key": "10",
            "textLeft": "Giro de ativo",
            "navigationLeft": "GiroAtivo",
            "textRight": "Highs Lows",
            "navigationRight": "HighsLows"
        },
        {
            "key": "11",
            "textLeft": "Indice de distribuição",
            "navigationLeft": "IndiceDistribuicao",
            "textRight": "Indice de Liquidez",
            "navigationRight": "IndiceLiquidez"
        },
        {
            "key": "12",
            "textLeft": "Indice de Liquidez Corrente",
            "navigationLeft": "IndiceLiquidezCorrente",
            "textRight": "Indice de Liquidez Seca",
            "navigationRight": "IndiceLiquidezSeca"
        },
        {
            "key": "13",
            "textLeft": "Liquidez corrente",
            "navigationLeft": "LiquidezCorrente",
            "textRight": "Lucro Liquido",
            "navigationRight": "LucroLiquido"
        },
        {
            "key": "14",
            "textLeft": "Lucro por Ação",
            "navigationLeft": "LucroAcao",
            "textRight": "Macd",
            "navigationRight": "Macd"
        },
        {
            "key": "15",
            "textLeft": "Margem Bruta",
            "navigationLeft": "MargemBruta",
            "textRight": "Margem Ebit",
            "navigationRight": "MargemEbit"
        },
        {
            "key": "16",
            "textLeft": "Margem Ebitda",
            "navigationLeft": "MargemEbitda",
            "textRight": "Margem Liquida",
            "navigationRight": "MargemLiquida"
        },
        {
            "key": "17",
            "textLeft": "Net Promoter Score",
            "navigationLeft": "NetPromoterScore",
            "textRight": "Numero de acões",
            "navigationRight": "NumeroAcao"
        },
        {
            "key": "18",
            "textLeft": "Patrimonio Liquido",
            "navigationLeft": "PatrimonioLiquido",
            "textRight": "Payout",
            "navigationRight": "Payout"
        },
        {
            "key": "19",
            "textLeft": "Preço / Ativos",
            "navigationLeft": "PrecoAtivos",
            "textRight": "Preço / Capital de Giro",
            "navigationRight": "PrecoCapitalGiro"
        },
        {
            "key": "20",
            "textLeft": "Preço / Ebit",
            "navigationLeft": "PrecoEbit",
            "textRight": "Preço / Ebitda",
            "navigationRight": "PrecoEbitda"
        },
        {
            "key": "21",
            "textLeft": "Preço / Receita Liquida",
            "navigationLeft": "PrecoReceitaLiquida",
            "textRight": "Preço / Valor Patrimonial",
            "navigationRight": "PrecoValorPatrimonial"
        },
        {
            "key": "22",
            "textLeft": "Provisão de devedores duvidosos / lucro",
            "navigationLeft": "ProvisaoDevedoresDuvidosos",
            "textRight": "Receita liquida",
            "navigationRight": "ReceitaLiquida"
        },
        {
            "key": "23",
            "textLeft": "Reclamação de cliente",
            "navigationLeft": "ReclamacaoCliente",
            "textRight": "RResultado Bruto",
            "navigationRight": "ResultadoBruto"
        },
        {
            "key": "24",
            "textLeft": "Return On Equity",
            "navigationLeft": "ReturnOnEquity",
            "textRight": "ROA",
            "navigationRight": "Roa"
        },
        {
            "key": "25",
            "textLeft": "ROC",
            "navigationLeft": "Roc",
            "textRight": "Roic",
            "navigationRight": "Roic"
        },
        {
            "key": "26",
            "textLeft": "RSI",
            "navigationLeft": "Rsi",
            "textRight": "Stoch",
            "navigationRight": "Stoch"
        },
        {
            "key": "27",
            "textLeft": "Stochrsi",
            "navigationLeft": "Stochrsi",
            "textRight": "Ultimate Oscillator",
            "navigationRight": "UltimateOscillator"
        },
        {
            "key": "28",
            "textLeft": "Valor da Empresa / Ebit",
            "navigationLeft": "ValorEmpresaEbit",
            "textRight": "Valor da Empresa / ebitda",
            "navigationRight": "ValorEmpresaEbtda"
        }];

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores</Text>

                <FlatList
                    style={{ marginBottom: 53 }}
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <ButtonsInLine
                        textLeft={item.textLeft}
                        onPressLeft={() => navigation.navigate(item.navigationLeft)}
                        textRight={item.textRight}
                        onPressRight={() => navigation.navigate(item.navigationRight)}
                    />
                    }
                    scrollEnabled={true}  
                />
                <ButtonSmall
                    text='Valor de Mercado'
                    onPress={() => navigation.navigate('ValorMercado')}
                />
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313e6a'
    },
    text: {
        fontFamily: 'Righteous_400Regular',
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.2,
        padding: 10
    }
});