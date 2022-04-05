import React, {useContext} from "react";
import {Text, View, Button} from "react-native";
import {styles} from "../theme/appTheme";
import {AuthContext} from "../context/AuthContext";

export const ContactsScreen = () => {

    const { signIn, authState } = useContext( AuthContext );
    // Alternativas usando desestructuracion
    // Opcion 1: const { signIn, authState: { isLoggedIn } } = useContext( AuthContext );
    /* Opcion 2:
        const { signIn, authState } = useContext( AuthContext );
        const { isLoggedIn } = authState;
    */

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>ContactsScreen</Text>

            {/* Como ocultar el boton al hacer clic en login ? */}
            {
                // Metodo 1: evitando el if ternario
                !authState.isLoggedIn && <Button title="SignIn" onPress={ signIn } />
            }
            {/*
                {
                    // Metodo 2:
                    authState.isLoggedIn ?
                        <Button
                            title="SignIn"
                            // ya que no recibe parametros en lugar de: onPress={ () => signIn }
                            onPress={ signIn }
                        />
                    : null
                }
            */}

        </View>
    )
}
