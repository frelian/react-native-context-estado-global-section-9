import {AuthState} from "./AuthContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string };

/*
  export const authReducer = ( state: AuthState, action: any ): AuthState => {
  Se traduce:
    recibo un estado -> state: AuthState
    recibo una accion -> action: any
    regresa un AuthState -> : AuthState
*/
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'signIn':
            /*
              Mala practica mutar el estado, ya que se devuelve el mismo estado solo que con una propiedad cambiada
                state.isLoggedIn = true;
                return state;
                *** SIEMPRE HAY QUE DEVOLVER UN NUEVO ESTADO
            */

            // Retorno nuevo estado que tenga todas las propiedades del state
            return {
                ...state, // Tomo las propiedades anteriores, pero cambio de valor isLoggedIn y username
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case "logout":
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case "changeFavIcon":
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case "changeUsername":
            return {
                ...state,
                username: action.payload,
            }

        default:
          return state;
    }

    return state;
}
