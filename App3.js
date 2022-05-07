import {useState} from "react";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import Navigation from "./src/navigation";
import { useFonts } from 'expo-font';


export default function App() {


    const [loaded] = useFonts({
        MulishRegular: require('./assets/fonts/Mulish-Regular.ttf'),
    });


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

