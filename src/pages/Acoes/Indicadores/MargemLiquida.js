import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function MargemLiquida() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>Margem Liquida</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>A
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Dívida Bruta</Text> é um valor composto pela
                            
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}