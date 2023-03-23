import { useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const LoginScreen = () => {
    
    // llamamos al contexto de LoginContext mediante el hook useContext
    const { user, tryLogin } = useContext(LoginContext)
    console.log(user)
    
    // creamos una constante de value que es un objeto con email y password
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    // generamos un spread del value y le agregamos el name y el value
    const handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    
    // creamos un estado para el email que previene que se recargue la pagina y se lo agregamos al form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        tryLogin(value)
    }
    
    return (
        <div className="bg-amber-400 flex justify-center items-center w-full h-screen">
            <div className="bg-white w-96 p-28 rounded-2xl">
                <h1>Login</h1>
                <hr />
                
                <form onSubmit={handleSubmit} className="my-6">
                    <input 
                        value={value.email}
                        type={ "text" }
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='Email'
                        name='email'
                    />
                    <input 
                        value={value.password}
                        type={ "text" }
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='Password'
                        name='password'
                    />

                    <button className="bg-slate-400 px-8 py-4 rounded-3xl my-4">Entrar</button>
                </form>
            </div>
        </div>
    )
}

// continuar en el minuto 53:00