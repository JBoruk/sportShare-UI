import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <LoginScreen />
      {/* <Stack.Navigator>
        <Stack.Screen name="Test" component={LoginScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default App;