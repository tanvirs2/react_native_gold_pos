//import {useState} from "react";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Navigation from "./src/navigationDrawer";
//import { useFonts } from 'expo-font';


export default function App() {


    /*const [loaded] = useFonts({
        MulishRegular: require('./assets/fonts/Mulish-Regular.ttf'),
    });*/


  return (
      <SafeAreaProvider>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Text>hello
                  @lorem1000
              </Text>
              <TextInput/>
          </View>
          {/*<Navigation/>*/}
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    root: {
        /*backgroundColor: "#ffffff"*/
    }
});

