/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import // Colors,
// DebugInstructions,
// Header,
// LearnMoreLinks,
// ReloadInstructions,
'react-native/Libraries/NewAppScreen';
// import CameraPage from './components/CameraPage';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const [result, setResult] = useState<number | null>(null);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <SafeAreaView style={styles.container}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <View style={styles.container}>
    //     <CameraPage />
    //   </View>
    // </SafeAreaView>
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.rtnCalculator}>3+7={result ?? '??'}</Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.add(3, 7);
          setResult(value ?? null);
        }}
      />
      <View style={styles.rtnCenteredTextContainer}>
        <RTNCenteredText
          text="Hello World!"
          style={styles.rtnCenteredTextContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  rtnCalculator: {
    marginLeft: 20,
    marginTop: 20,
  },
  rtnCenteredTextContainer: {
    width: '100%',
    height: 30,
  },
});

export default App;
