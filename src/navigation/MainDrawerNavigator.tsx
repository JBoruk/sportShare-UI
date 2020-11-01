import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MainDrawerContent from "../components/navigation/MainDrawerContent";
import ProfileScreen from "../screens/main/ProfileScreen";
import SupportScreen from "../screens/main/SupportScreen";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { SettingsStackNavigator } from "./SettingsStackNavigator";

const Drawer = createDrawerNavigator();

export const MainDrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator drawerContent={props => 
            //@ts-ignore
            <MainDrawerContent {...props} /> 
        }>
            <Drawer.Screen name="DrawerHome" component={HomeStackNavigator} />
            <Drawer.Screen name="Authorization" component={AuthStackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
            <Drawer.Screen name="Support" component={SupportScreen} />
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator;