import React, {useContext} from 'react'
import { Text, View } from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {styles} from "../theme/appTheme";
import {AuthContext} from "../context/AuthContext";

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  // Sin desestructurar const context = useContext( AuthContext );
  // Desestructuro
  const { authState } = useContext( AuthContext );

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }} >
        <Text style={ styles.title }>Settings screen</Text>
        <Text>{ JSON.stringify( authState, null, 4) }</Text>
    </View>
  )
}
