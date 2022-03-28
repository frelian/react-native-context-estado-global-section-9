import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuDrawerNavigator } from './src/navigator/MenuDrawerNavigator';
import {MenuLateral} from "./src/navigator/MenuLateral";
import {Tabs} from "./src/navigator/Tabs";
import {AuthProvider} from "./src/context/AuthContext";

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                {/* <StackNavigator /> */}
                {/* <MenuDrawerNavigator /> */}
                <MenuLateral />
                {/* <Tabs /> */}
            </AppState>
        </NavigationContainer>
    )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
       { children }
    </AuthProvider>
  )
}

export default App;
