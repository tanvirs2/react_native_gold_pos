
import {StyleSheet, Text, View, Image, useWindowDimensions, ScrollView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import logo from "../../../assets/images/nature-logo.png"
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

export default function SignInScreen() {

    const {height} = useWindowDimensions();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Hello')
    }
    const onSignInWithFacebookPressed = () => {
        console.warn('Hello')
    }
    const onSignInWithGooglePressed = () => {
        console.warn('Hello')
    }
    const onSignInWithApplePressed = () => {
        console.warn('Hello')
    }
    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed')
    }
    const onCreateOnePressed = () => {
        //console.warn('onCreateOnePressed')
        navigation.navigate('SignUp');
    }

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

                    <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
                    <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                    <CustomButton text="Sign in" onPress={onSignInPressed}/>
                    <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="tertiary"/>
                    <CustomButton text="Sign in with Facebook" onPress={onSignInWithFacebookPressed} bgColor="#B4BDFFCC" fgColor="#2846FFCC"/>
                    <CustomButton text="Sign in with Google" onPress={onSignInWithGooglePressed} bgColor="#ECD9DAFF" fgColor="#DA2C3DFF"/>
                    <CustomButton text="Sign in with Apple" onPress={onSignInWithApplePressed} bgColor="#93939347" fgColor="#202020CC"/>
                    <CustomButton text="Dont have an account? Create one" onPress={onCreateOnePressed} type="tertiary"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
        color: "rgba(147,147,147,0.28)"
    },
    logo: {
        height: 100,
        width: 200,
        maxWidth: 500,
        maxHeight: 300,
    },
});
