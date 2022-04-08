## Context estado global de la aplicación (Stack, Drawer)
### Sección 9 del curso React Native (Fernando H)

#### 134. Inicio del proyecto
    * Se inicia con el proyecto anterior de los tipos de navegación y tabs
#### 135. Crear el primer Context en TypeScript
    * Creada carpeta context, archivo AuthContext
    * Envuelvo los hijos en el contexto en App.tsx
#### 136. Consumir el context - AuthState
    * En screens/SettingsScreen.tsx
#### 137. Reducer - useReducer
    * Creado context/AuthReducer.tsx
#### 138. Disparar acciones
#### 139. Disparar el SignIn desde otra pantalla
    * En ContactsScreen se obtiene el redux y se valida mostrar o no el btn de login
#### 140. TouchableIcon - Custom Component
    * Agregado un TouchableIcon para hacer clic a los iconos y poder ver el nombre de éste
    * Nuevo componente creado en components/TouchableIcon.tsx
#### 141. Cambiar el icono favorito - AuthState
    * Al hacer clic en algun icono del Tab1 luego en Ajustes, se muestra el icono al cual se hizo clic
#### 142. Borrar información del AuthState - Logout
#### 143. Cambiar el username
    * Al hacer clic en los botones Pedro y Maria se muestran sus nombres en ajustes
    * Fin de seccion de Context
