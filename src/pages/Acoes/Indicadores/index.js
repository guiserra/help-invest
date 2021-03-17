import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsInLine from '../../../components/ButtonsInLine';

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
            "textRight": "Indice de liquidez corrente",
            "navigationRight": "IndiceLiquidezCorrente"
        },
        {
            "key": "12",
            "textLeft": "Indice de liquidez Seca",
            "navigationLeft": "IndiceLiquidezSeca",
            "textRight": "Liquidez corrente",
            "navigationRight": "LiquidezCorrente"
        },
        {
            "key": "13",
            "textLeft": "Lucro Liquido",
            "navigationLeft": "LucroLiquido",
            "textRight": "Lucro por Ação",
            "navigationRight": "LucroAcao"
        },
        {
            "key": "14",
            "textLeft": "Macd",
            "navigationLeft": "Macd",
            "textRight": "Margem bruta",
            "navigationRight": "MargemBruta"
        },
        {
            "key": "15",
            "textLeft": "Margem Ebit",
            "navigationLeft": "MargemEbit",
            "textRight": "Margem Ebitda",
            "navigationRight": "MargemEbitda"
        },
        {
            "key": "16",
            "textLeft": "Margem Liquida",
            "navigationLeft": "MargemLiquida",
            "textRight": "Net Promoter Score",
            "navigationRight": "NetPromoterScore"
        },
        {
            "key": "17",
            "textLeft": "Numero de acões",
            "navigationLeft": "NumeroAcao",
            "textRight": "Patrimonio Liquido",
            "navigationRight": "PatrimonioLiquido"
        },
        {
            "key": "18",
            "textLeft": "Payout",
            "navigationLeft": "Payout",
            "textRight": "Preço / ativos",
            "navigationRight": "PrecoAtivos"
        },
        {
            "key": "19",
            "textLeft": "Preço / Capital de Giro",
            "navigationLeft": "PrecoCapitalGiro",
            "textRight": "Preço / Ebit",
            "navigationRight": "PrecoEbit"
        },
        {
            "key": "20",
            "textLeft": "Preço / Ebitda",
            "navigationLeft": "PrecoEbitda",
            "textRight": "Preço / Receita Liquida",
            "navigationRight": "PrecoReceitaLiquida"
        },
        {
            "key": "21",
            "textLeft": "Preço / Valor Patrimonial",
            "navigationLeft": "PrecoValorPatrimonial",
            "textRight": "Provisão de devedores duvidosos / lucro",
            "navigationRight": "ProvisaoDevedoresDuvidosos"
        },
        {
            "key": "22",
            "textLeft": "Receita liquida",
            "navigationLeft": "ReceitaLiquida",
            "textRight": "Reclamação de cliente",
            "navigationRight": "ReclamacaoCliente"
        },
        {
            "key": "23",
            "textLeft": "Resultado Bruto",
            "navigationLeft": "ResultadoBruto",
            "textRight": "Return On Equity",
            "navigationRight": "ReturnOnEquity"
        },
        {
            "key": "24",
            "textLeft": "Roa",
            "navigationLeft": "Roa",
            "textRight": "Roc",
            "navigationRight": "Roc"
        },
        {
            "key": "25",
            "textLeft": "Roic",
            "navigationLeft": "Roic",
            "textRight": "RSI",
            "navigationRight": "Rsi"
        },
        {
            "key": "26",
            "textLeft": "Stoch",
            "navigationLeft": "Stoch",
            "textRight": "Stochrsi",
            "navigationRight": "Stochrsi"
        },
        {
            "key": "27",
            "textLeft": "Ultimate Oscillator",
            "navigationLeft": "UltimateOscillator",
            "textRight": "Valor da Empresa / Ebit",
            "navigationRight": "ValorEmpresaEbit"
        },
        {
            "key": "28",
            "textLeft": "Valor da Empresa / ebitda",
            "navigationLeft": "ValorEmpresaEbtda",
            "textRight": "Valor de mercado",
            "navigationRight": "ValorMercado"
        }];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#313e6a" }}>
            <Animatable.View useNativeDriver>
                <Text style={styles.text}>Indicadores</Text>

                <FlatList
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
        textShadowRadius: 0.2,
        padding: 10
    }
});