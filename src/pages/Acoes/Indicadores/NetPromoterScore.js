import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions } from 'react-native';

import { globalStyles } from '../../../../styles/indicadoresGlobal';

export default function NetPromoterScore() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={globalStyles.text}>NetPromoterScore</Text>

                <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                    <View style={globalStyles.cardContent}>
                        <Text style={[globalStyles.title, globalStyles.shadow]}>Definição</Text>
                        <Text style={[globalStyles.content, globalStyles.shadow]}>O
                            <Text style={[globalStyles.contentBold, globalStyles.shadow]}> Net Promoter Score</Text> é um valor composto pela
                            
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}