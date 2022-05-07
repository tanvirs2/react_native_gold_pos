
import {View, Text} from "react-native";


import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
                <Drawer.Screen name="SignIn" component={SignInScreen}/>
                <Drawer.Screen name="SignUp" component={SignUpScreen}/>
                <Drawer.Screen name="Home" component={HomeScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

function TexComp() {
    return <View>
        <Text>dddd</Text>
    </View>
}

export default Navigation;
