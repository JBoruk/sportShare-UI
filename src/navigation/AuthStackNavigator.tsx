import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";

const Stack = createStackNavigator();

export const AuthStackNavigator: React.FC<DrawerContentComponentProps> = ( props ) => {
    const { colors } = useSelector((state: RootState) => state.theme.theme);

    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} options={{
                headerLeft: () => (
                    <Icon
                        size={25}
                        name='menu'
                        color={colors.text}
                        onPress={() => props.navigation.openDrawer()}
                    />
                )
            }} />
            <Stack.Screen name="signUp" component={SignUpScreen} />
            <Stack.Screen name="forgotPassword" component={SignUpScreen} />
        </Stack.Navigator>
    )
}