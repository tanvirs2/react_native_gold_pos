import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {

    return <SafeAreaView>
        <View style={style.container}>
            <Text>
                Home page
            </Text>
        </View>
    </SafeAreaView>
};

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    }
})


export default HomeScreen;
