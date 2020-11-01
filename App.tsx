import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, NavigationContainer } from "@react-navigation/native";
import { auth, initializeApp } from 'firebase';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { signIn } from "./src/actions/authorization/signIn";
import MainDrawerNavigator from "./src/navigation/MainDrawerNavigator";
import rootReducer, { RootState } from "./src/reducers/rootReducer";

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const MyApp: React.FC = () => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    initializeApp({
      apiKey: "AIzaSyDr3v6xzqW1zVsekvheN-zdCegsy1FG7xQ",
      authDomain: "sport-share-3b563.firebaseapp.com",
      databaseURL: "https://sport-share-3b563.firebaseio.com",
      projectId: "sport-share-3b563",
      storageBucket: "sport-share-3b563.appspot.com",
      messagingSenderId: "1047742853416",
      appId: "1:1047742853416:web:2873abe40c5ce28246a01d",
      measurementId: "G-NG8GDPW2LB"
    })
  }, []);

  function onAuthStateChanged(user: any) {
    if (user) {
      dispatch(signIn(user));
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <NavigationContainer theme={isDarkTheme ? NavigationDarkTheme : NavigationDefaultTheme}>
        <MainDrawerNavigator />        
      </NavigationContainer>
    </PaperProvider>
  )
}

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <MyApp />
    </ReduxProvider>
  )
}

export default App;