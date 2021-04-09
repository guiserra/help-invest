import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function Alavancagem() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>

                <Text style={globalStyles.text}>Alavancagem</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   A
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Alavancagem Financeira,</Text> ou em inglês, 
                        leverage ou gearing, é a ação de contrair uma dívida para financiar uma ação sem comprometer o patrimônio da 
                        empresa. É uma forma de aumentar a rentabilidade através do endividamento.{"\n"}{"\n"}
                        Podemos dizer também que a alavancagem financeira é o efeito do capital de terceiros no patrimônio líquido de 
                        uma empresa. Esta dívida pode ter vários formatos, seja vender ações ou até solicitar um empréstimo empresarial.
                     </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Vantagens</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   Isso pode ser muito para financiar investimentos que 
                        serão feitos na empresa, como por exemplo:
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        • Adquirir uma ferramenta ou sistema; {"\n"}
                        • Criar um item no mix de produtos; {"\n"}
                        • Adquirir outra empresa (em uma integração vertical); {"\n"}
                        • Reduzir custos, como por exemplo, instalar um sistema de captação de água ou até mesmo adquirir um prédio / sala comercial e deixar de pagar aluguel.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   O principal resultado da alavancagem financeira é 
                        que, ao financiar algo com o recursos de terceiros, há uma combinação desse capital com o da empresa. O que, quando 
                        bem controlado, permite uma flexibilização do crescimento do negócio. {"\n"}
                        Portanto, por mais que a <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Alavancagem Financeira,</Text> seja uma rotina em empresas grandes, deve ser analisada com cuidado 
                        pelas de médio e pequeno porte.
                        </Text>
                    </View>
                </View>


                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como calcular o grau de Alavancagem?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        Existem várias formas de se calcular o Grau de <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Alavancagem Financeira</Text>. Porém, em todas é fundamental os conceitos de LAJIR e LAIR.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        LAJIR ou EBIT = Lucro antes dos juros e imposto de renda {"\n"}{"\n"}
                        LAIR ou EBITDA = Lucro antes do imposto de renda {"\n"}{"\n"}
                        
                        Então, vamos a uma das principais fórmulas para este cálculo: {"\n"}{"\n"}

                        GAF = LAJIR ÷ LAIR {"\n"}{"\n"}

                        Outra forma de chegar no cálculo do GAF é: {"\n"}{"\n"}
                        
                        GAF = RPL/RAT {"\n"}{"\n"}

                        Sendo: {"\n"}{"\n"}

                        RPL= Retorno sobre o Patrimônio Líquido = Lucro líquido/Patrimônio Líquido. {"\n"}{"\n"}

                        RAT= Retorno sobre o Ativo Total = Lucro depois do Imposto de Renda e antes dos juros/Ativo Total.
                        
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Como interpretar?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        O resultado do GAF é expresso em forma de índice. Onde temos: 
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        GAF = 1,0, nulo. {"\n"}{"\n"}
                        GAF `{'>'} 1.0, favorável. {"\n"}{"\n"}
                        
                        GAF `{'<'} 1,0, desfavorável. {"\n"}{"\n"}
 
                        Ok, mas o que isso significa? {"\n"}{"\n"}

                        Com GAF nulo, a situação mostra que não houve <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Alavancagem Financeira</Text>. {"\n"}{"\n"}
                        
                        O GAF favorável mostra que a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Alavancagem Financeira</Text> será interessante para a empresa. {"\n"}{"\n"}

                        Já o GAF desfavorável diz que o ROI obtido com essa possível <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Alavancagem Financeira</Text> será abaixo do que precisará 
                        ser restituído. Ou seja, essa alavancagem financeira não é interessante. {"\n"}{"\n"}

                        Podemos dizer que quanto maior o GAF, maior o risco e a dívida contraída pela empresa.                        
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Quais os perigos?</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        A <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Alavancagem Financeira</Text> é um ótimo recurso, mas tem seus riscos. Por exemplo, o aumento de dívidas e a 
                        possibilidade de não conseguir quitá-las.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        Outro ponto que é preciso estar atento é que, por se tratar de capital de terceiros, estes têm prioridade para quitar 
                        parcelas. Esses pagamentos passam na frente do pagamento a acionistas e o pró-labore de sócios. {"\n"}{"\n"}

                        O que vai ditar se a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Alavancagem Financeira</Text> é uma boa opção para uma empresa é seu modelo de negócios. Por exemplo, 
                        negócios com lucros que variam podem se prejudicar ao adotar este tipo de endividamento. Porém, aqueles mais estáveis 
                        podem tirar ótimos resultados. {"\n"}{"\n"}
                        
                        Para isto, um sistema de gestão empresarial, como o Bluesoft ERP, pode ajudar muito no controle de custos e margem de lucro. 
                        {"\n"}{"\n"}

                        Depois de alavancada, a empresa precisa ficar de olho no GAF, ou Grau de <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Alavancagem Financeira</Text>. Este número demonstra o grau 
                        de risco que a empresa está correndo.                      
                        </Text>
                    </View>
                </View>

                <View style={[globalStyles.cardBoard, globalStyles.shadow, { marginTop: 10 }]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Conclusão</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        Em resumo, a <Text style={[globalStyles.contentBold, globalStyles.shadow]}>Alavancagem Financeira</Text> pode trazer ganhos, mas também pode endividar uma empresa. Por isso, além dos fatores 
                        expostos aqui, é preciso consultar também contadores, diretores financeiros e até mesmo consultorias externas.
                        </Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>   
                        Um sistema de gestão empresarial também pode ajudar muito nessa tomada de decisão. Com o Bluesoft ERP, por exemplo, é 
                        possível acompanhar empréstimos tomados e concedidos, fluxo de caixa e muito mais.                     
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}