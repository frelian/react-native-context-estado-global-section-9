import React, {createContext, useReducer} from "react";
import {authReducer} from "./AuthReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false
}

// Lo usaremos para decirle a React cómo luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Expongo el proveedor del estado
export const AuthProvider = ({ children }: any ) => {

/* o puedo agregar el tipo, pero es mas complejo de analizar
    1 Elemento -> export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    Varios elementos -> export const AuthProvider = ({ children }: { children: JSX.Element[] }) => {
*/

    // El dispatch es la funcion para enviarle las acciones al reducer (authReducer)
    // dispatch es el unico medio para modificar el estado, en una sola via
    const [ authStateReducer, dispatch ] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    // Esta funcion se la tengo que dar al context (AuthContext.Provider) abajo, para que cualquier componente pueda acceder a ella
    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    return (
        <AuthContext.Provider value={{
            authState: authStateReducer,
            // signIn: () => {}
            signIn, // ya que la funcion que exporto/expongo es signIn: signIn en ES6 es lo mismo que poner solo "signIn"
            changeFavoriteIcon
        }}>
            { children }
        </AuthContext.Provider>
    )
}
