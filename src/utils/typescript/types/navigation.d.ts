import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  LandingScreen: undefined;
  CheckOutScreen: {
    redirectUrl: string;
  };
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
