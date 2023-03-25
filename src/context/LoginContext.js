import { createContext } from 'react'
import { useState } from 'react'

// creamos el contexto de LoginContext
export const LoginContext = createContext()

// MOCK_USER es un array de objetos con email y password
const MOCK_USER = [
    {
        id: 1,
        email: 'diego@coder.com',
        password: '1234'
    },
    {
        id: 2,
        email: 'omar@coder.com',
        password: '5678'
    },
    {
        id: 3,
        email: 'mario@coder.com',
        password: '9012'
    }
]

// creamos el provider de LoginContext
export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    // creamos una funcion que busca en el MOCK_USER si existe el email y el password, si existe, setea el estado de user con el email y logged en true
    const tryLogin = (value) => {
        const match = MOCK_USER.find((user) => user.mail === value.mail)

        if (match && match.password === value.password) {
            setUser({
                email: match.email,
                logged: true
            })
        }
    }

    // creamos una funcion de logout
    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    
    // retorna el contexto de LoginContext con el valor de user y el children
    return (
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}