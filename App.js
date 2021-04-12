import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, Platform, Dimensions, Button } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { AdMobBanner, AdMobRewarded } from 'expo-ads-admob';

import Routes from './src/router';
import { View } from 'react-native-animatable';

const deviceHeight = Dimensions.get("window").height

export default function App() {
  useEffect(()=>{
    async function loadAd(){
      await AdMobRewarded.setAdUnitID('ca-app-pub-3737795788074947/8523252380');
    }
    loadAd();    
  }, []);

async function RewardedAd(){
  await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true});
  await AdMobRewarded.showAdAsync();
}

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

      <Button
      title="Mostrar Reward AD"
      onPress={RewardedAd}
      />

      <View style={{ paddingBottom: Platform.OS === 'ios' ? (deviceHeight * 0.029) : 0.1 }}>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={Platform.OS === 'ios' ? "ca-app-pub-3737795788074947/7584191374" : "ca-app-pub-3737795788074947/2505187687"}
          servePersonalizedAds={true}
        />
      </View>

    </>
  );
}