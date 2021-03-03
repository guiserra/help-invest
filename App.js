import 'react-native-gesture-handler'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, Platform } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { AdMobBanner } from 'expo-ads-admob';

import Routes from './src/router';
import { View } from 'react-native-animatable';

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

      <View style={{ paddingBottom: Platform.OS === 'ios' ? 30 : 1 }}>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={Platform.OS === 'ios' ? "ca-app-pub-3737795788074947/7584191374" : "ca-app-pub-3737795788074947/6585297873"}
          servePersonalizedAds
        />
      </View>

    </>
  );
}