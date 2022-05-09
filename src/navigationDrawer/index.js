
import {View, Text, Button} from "react-native";


import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";

import { createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";

import Collapsible from 'react-native-collapsible';
import {Fragment, useState} from "react";

import { Ionicons, AntDesign, FontAwesome5 , Entypo } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

    const [isSalesCollapsed, isSetSalesCollapsed] = useState(true);
    const [isPurchaseCollapsed, isSetPurchaseCollapsed] = useState(true);
    const [isDepositCollapsed, isSetDepositCollapsed] = useState(true);
    const [isExpenseCollapsed, isSetExpenseCollapsed] = useState(true);

    return (
        <DrawerContentScrollView {...props}>
            {/*<DrawerItemList {...props} />*/}

            <CustomDrawerItem label="Sales" icon={<Ionicons name={isSalesCollapsed ? "reader-outline": "reader"} size={24} color="black" />} isSetCollapsed={isSetSalesCollapsed} isCollapsed={isSalesCollapsed}/>


            <Collapsible collapsed={isSalesCollapsed}>
                <View>

                    <SubCustomDrawerItem label="SaleRetail/Wholesale"/>
                    <SubCustomDrawerItem label="Issue/Gift"/>
                    <SubCustomDrawerItem label="Sales Return"/>
                    <SubCustomDrawerItem label="List of sales"/>
                    <SubCustomDrawerItem label="Due bill receive"/>

                </View>
            </Collapsible>


            <CustomDrawerItem label="Stock Search" icon={<Ionicons name="file-tray-full-outline" size={24} color="black" />} dropdown={false} />
            <CustomDrawerItem label="Purchase" icon={<Ionicons name={isPurchaseCollapsed?"cart-outline":"cart"} size={24} color="black" />} isSetCollapsed={isSetPurchaseCollapsed} isCollapsed={isPurchaseCollapsed}/>

            <Collapsible collapsed={isPurchaseCollapsed}>
                <View>

                    <SubCustomDrawerItem label="SaleRetail/Wholesale"/>
                    <SubCustomDrawerItem label="Issue/Gift"/>
                    <SubCustomDrawerItem label="Sales Return"/>
                    <SubCustomDrawerItem label="List of sales"/>
                    <SubCustomDrawerItem label="Due bill receive"/>

                </View>
            </Collapsible>

            <CustomDrawerItem label="Deposit/Withdraw" icon={<Ionicons name={isDepositCollapsed?"card-outline":"card"} size={24} color="black" />} isSetCollapsed={isSetDepositCollapsed} isCollapsed={isDepositCollapsed} />
            <Collapsible collapsed={isDepositCollapsed}>
                <View>

                    <SubCustomDrawerItem label="SaleRetail/Wholesale"/>
                    <SubCustomDrawerItem label="Issue/Gift"/>
                    <SubCustomDrawerItem label="Sales Return"/>
                    <SubCustomDrawerItem label="List of sales"/>
                    <SubCustomDrawerItem label="Due bill receive"/>

                </View>
            </Collapsible>

            <CustomDrawerItem label="Expense" icon={<Ionicons name={isExpenseCollapsed?"cash-outline":"cash"} size={24} color="black" />} isSetCollapsed={isSetExpenseCollapsed} isCollapsed={isExpenseCollapsed} />
            <Collapsible collapsed={isExpenseCollapsed}>
                <View>

                    <SubCustomDrawerItem label="SaleRetail/Wholesale"/>
                    <SubCustomDrawerItem label="Issue/Gift"/>
                    <SubCustomDrawerItem label="Sales Return"/>
                    <SubCustomDrawerItem label="List of sales"/>
                    <SubCustomDrawerItem label="Due bill receive"/>

                </View>
            </Collapsible>

        </DrawerContentScrollView>
    );
}

const SubCustomDrawerItem = ({label}) => {
    return (
        <DrawerItem
            label={label}
            style={{
                backgroundColor: "rgba(243,232,203,0.8)"
            }}
            labelStyle={{
                textAlign: "center",
                fontWeight:"bold"
            }}
            onPress={() => ''}
        />
    );
}

const CustomDrawerItem = ({label, isSetCollapsed, isCollapsed, icon, dropdown=true}) => {
    return (
        <DrawerItem
            label={label}
            style={{
                backgroundColor: "rgba(177,185,114,0.8)"
            }}
            labelStyle={{
                position: "absolute",
                top: -10,
                left: -20,
                fontWeight:"bold"
            }}
            onPress={() => dropdown ? isSetCollapsed(!isCollapsed) : null}
            activeTintColor="red"
            icon={
                ({ focused, color, size }) =>
                    <Fragment>

                        {icon}

                        {
                            dropdown && <AntDesign
                                style={{
                                    alignSelf: "center",
                                    position: "absolute",
                                    right: 10,
                                }}
                                name={isCollapsed ? 'downcircleo' : 'upcircle'}
                                size={24} color="black" />
                        }

                    </Fragment>
            }
        />
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props)=><CustomDrawerContent {...props } />} screenOptions={{headerShown: false}} initialRouteName="SignIn">
                <Drawer.Screen options={{
                    drawerIcon:({ focused, color, size }) => <Ionicons color={color} size={size} name={focused ? 'heart-circle-outline' : 'heart-outline'} />
                }} name="SignIn" component={SignInScreen}/>
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
