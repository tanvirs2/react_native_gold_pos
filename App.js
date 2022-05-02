
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import Navigation from "./src/navigation";



export default function App() {
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

