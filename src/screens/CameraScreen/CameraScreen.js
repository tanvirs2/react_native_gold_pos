
import {StyleSheet, Text, View, Image, useWindowDimensions, ScrollView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {useState} from "react";
import logo from "../../../assets/images/nature-logo.png"
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

export default function CameraScreen() {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        //console.warn('Hello')
        navigation.navigate('SignIn');
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

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Camera</Text>


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
    title: {
        color: "#051C60",
        margin: 10,
        fontSize: 24,
        fontWeight: "bold"
    },
    text: {
        marginVertical: 10,
        color: "gray"
    },
    link: {
        color: "#fdb075"
    }

});
