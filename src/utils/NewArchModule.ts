import 'react-native';
import {NativeModules} from 'react-native';
import {INewArchModule} from './typescript/interfaces/NewArchModule.interface';

// and extend them!
declare module 'react-native' {
  interface NativeModulesStatic {
    NewArchModule: INewArchModule;
  }
}

const {NewArchModule} = NativeModules;

export default NewArchModule;
