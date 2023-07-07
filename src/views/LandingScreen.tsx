import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createCheckout} from '../services/checkout';
import {RootStackScreenProps} from '../types/navigation';

const LandingScreen = ({navigation}: RootStackScreenProps<'LandingScreen'>) => {
  const onCheckout = async () => {
    const cartData: Cart = {
      items: [
        {
          product: {
            name: 'Load',
            unitPrice: 100,
          },
          quantity: 1,
          totalPrice: 100,
        },
      ],
      quantity: 1,
      totalAmount: 100,
    };

    const buyerData: User = {
      email: 'email.example@gmail.com',
      firstName: 'Email',
      lastName: 'Example',
    };

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
        navigation.navigate('CheckOutScreen', {
          redirectUrl: checkout.redirectUrl,
        });
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: LandingScreen.tsx:45 ~ onCheckout ~ error:',
        error,
      );
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Text>Maya Sample</Text>
      </View>
      <Button title="Checkout" onPress={onCheckout} />
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#427FC1',
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
