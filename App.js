
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, LogBox} from 'react-native';
import Navigation from "./src/navigationDrawer";
//import { useFonts } from 'expo-font';


export default function App() {

    LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);

    /*const [loaded] = useFonts({
        MulishRegular: require('./assets/fonts/Mulish-Regular.ttf'),
    });*/


  return (
      <SafeAreaProvider>
          <Navigation/>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    root: {
        /*backgroundColor: "#ffffff"*/
    }
});

