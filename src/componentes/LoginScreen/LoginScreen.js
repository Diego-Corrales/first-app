import { useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    
    // llamamos al contexto de LoginContext mediante el hook useContext
    const { login, googleLogin } = useContext(LoginContext)
    
    
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
        
        login(value)
    }
    
    return (
        <div className="bg-amber-400 flex text-center justify-center items-center w-full h-screen">
            <div className="bg-white w-1/3 p-8 rounded-2xl justify-center">
                <h1 className='m-4'>Login</h1>
                <hr />
                
                <form onSubmit={handleSubmit} className="justify-center">
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

                    <div className='justify-center m-4'>
                        <button className="bg-slate-400 px-8 py-4 rounded-3xl">Entrar</button>
                    </div>
                    <h3 className='py-4'>No eres usuario?, Registrate a continuacion:</h3>
                    <hr />
                    <div className='flex justify-center'>
                        <Link to="/register" className='bg-slate-400 px-8 py-4 rounded-3xl my-4'>Registrarme</Link>
                    </div>
                </form>
                <h3>O ingresa con tu cuenta de Google:</h3>
                <button onClick={googleLogin} className="bg-slate-400 px-8 py-4 rounded-3xl my-4">Entrar con Google</button>

            </div>
        </div>
    )
}