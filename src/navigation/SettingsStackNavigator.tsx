import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import SettingsScreen from "../screens/main/SettingsScreen";

const Stack = createStackNavigator();

export const SettingsStackNavigator: React.FC<DrawerContentComponentProps> = ( props ) => {
    const { colors } = useSelector((state: RootState) => state.theme.theme);
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{
                headerLeft: () => (
                    <Icon
                        size={25}
                        name='menu'
                        color={colors.text}
                        onPress={() => props.navigation.openDrawer()}
                    />
                )
            }} />
        </Stack.Navigator>
    )
}