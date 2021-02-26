import 'react-native-gesture-handler'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { AdMobBanner } from 'expo-ads-admob';

import Routes from './src/router';
import { View } from 'react-native-animatable';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor="#313e6a" barStyle="light-content" translucent={false} />
      <Routes />

      <View style={{paddingBottom: 30}}>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3737795788074947/6585297873"
          servePersonalizedAds
        />
      </View>

    </>
  );
}