import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView, WebViewNavigation} from 'react-native-webview';

import {RootStackScreenProps} from '../types/navigation';
import {createCheckout} from '../services/checkout';

const CheckOutScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'CheckOutScreen'>) => {
  const {cartData, buyerData} = route.params;

  const webViewRef = useRef<WebView>(null);

  const [isloading, setIsLoading] = useState(true);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleNavigationStateChange = (event: WebViewNavigation) => {
    console.log(
      '🚀 ~ file: CheckOutScreen.tsx:14 ~ handleNavigationStateChange ~ event:',
      event,
    );
    const {canGoBack, url} = event;

    if (url.includes('canceled?')) {
      navigation.goBack();
    }

    if (canGoBack && url.includes('success?')) {
      navigation.goBack();
    }

    if (canGoBack && url.includes('failed?')) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const onCheckOut = async () => {
      try {
        const checkout: CheckoutTransaction = await createCheckout(
          cartData,
          buyerData,
        );
        console.log(
          '🚀 ~ file: App.tsx:141 ~ onCheckout ~ checkout:',
          checkout.redirectUrl,
        );
        if (checkout) {
          console.log(
            '🚀 ~ file: CheckOutScreen.tsx:57 ~ onCheckOut ~ checkout:',
            checkout,
          );
          setIsLoading(false);
          setRedirectUrl(checkout.redirectUrl);
        }
      } catch (error) {
        console.log(
          '🚀 ~ file: LandingScreen.tsx:45 ~ onCheckout ~ error:',
          error,
        );
        setIsLoading(false);
        setRedirectUrl('');
      }
    };

    onCheckOut();
  }, [cartData, buyerData]);

  if (isloading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'green'} size={'large'} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onNavigationStateChange={handleNavigationStateChange}
        source={{uri: redirectUrl}}
        // style={styles.container}
        cacheMode="LOAD_NO_CACHE"
        incognito={true}
        renderLoading={() => {
          return (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color={'green'} size={'large'} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
