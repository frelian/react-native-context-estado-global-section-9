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
    const [ authStateReducer, dispatch ] = useReducer(authReducer, authInitialState);

    return (
        <AuthContext.Provider value={{
            authState: authStateReducer,
            signIn: () => {}
        }}>
            { children }
        </AuthContext.Provider>
    )
}
