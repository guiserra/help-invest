import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ButtonsHome from '../../components/ButtonsHome';

export default function AtivosInternacionais({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>

            <Animatable.View animation="bounceIn" useNativeDriver>
                <ScrollView>

                    <ButtonsHome
                        cover={require('../../../assets/buttons/bdr.png')}
                        onPress={() => navigation.navigate('Bdrs')}
                    />

                </ScrollView>
            </Animatable.View>

        </SafeAreaView>
    );
}