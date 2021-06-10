import 'react-native-gesture-handler'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, Platform, Dimensions } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { AdMobBanner } from 'expo-ads-admob';

import Routes from './src/router';
import { View } from 'react-native-animatable';

const deviceHeight = Dimensions.get("window").height

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Righteous_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor="#313e6a" barStyle="light-content" translucent={false} />

      <Routes />

      <View style={{ paddingBottom: Platform.OS === 'ios' ? (deviceHeight * 0.029) : 0.1 }}>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={Platform.OS === 'ios' ? "ca-app-pub-4162025603789343/8971622130" : "ca-app-pub-4162025603789343/7850112152"}
          servePersonalizedAds
        />
      </View>

    </>
  );
}