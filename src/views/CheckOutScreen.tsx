import {StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView, WebViewNavigation} from 'react-native-webview';

import {RootStackScreenProps} from '../utils/typescript/types/navigation';

const CheckOutScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'CheckOutScreen'>) => {
  const {params} = route;

  const webViewRef = useRef<WebView>(null);

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
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onNavigationStateChange={handleNavigationStateChange}
        source={{uri: params.redirectUrl}}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
