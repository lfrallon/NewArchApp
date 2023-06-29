/* eslint-disable react-native/no-inline-styles */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';
import {SafeAreaView} from 'react-native-safe-area-context';

const CameraPage = () => {
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  // console.log('devices: ', devices);

  if (device == null || hasPermission === false) {
    return (
      <View>
        <Text style={styles.text}>No camera found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{width: '100%', height: '100%'}}>
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'salmon',
  },
});
