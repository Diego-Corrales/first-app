import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { auth, provider } from '../firebase/config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

// creamos el contexto de LoginContext
export const LoginContext = createContext()

// creamos el provider de LoginContext
export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    // creamos las funciones de login, googleLogin, logout y register de firebase y se consumen en el componente LoginScreen y RegisterScreen
    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                setUser({
                    email: userCredential.user.email,
                    logged: true
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser({
                    email: result.user.email,
                    logged: true
                })
            })
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                setUser({
                    email: userCredential.user.email,
                    logged: true
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    uid: null
                })
            })
    
    }

    // creamos un useEffect que se ejecuta cuando se monta el componente y se desmonta
    // al recargar la pagina se ejecuta el useEffect y se ejecuta el onAuthStateChanged, si esta logueado se ejecuta el setUser y si no se ejecuta el logout
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })
            } else {
                logout()
            }
        })
    }, [])
    
    // retorna el contexto de LoginContext con el valor de user y el children
    return (
        <LoginContext.Provider value={{
            user,
            register,
            login,
            logout,
            googleLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}