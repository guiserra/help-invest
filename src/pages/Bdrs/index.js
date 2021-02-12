import React from 'react';
import { View,SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

export default function Bdrs() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Exemplo</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#000'
    }
});
