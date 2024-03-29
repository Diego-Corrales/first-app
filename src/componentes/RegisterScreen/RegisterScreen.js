import { useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    
    // llamamos al contexto de LoginContext mediante el hook useContext
    const { register } = useContext(LoginContext)
    
    
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
        
        register(value)
    }
    
    return (
        <div className="flex flex-wrap text-center justify-center items-center w-full h-screen bg-center bg-gradient-to-t from-slate-400 to-slate-600">
            <div className="bg-gradient-to-t from-stone-300 to-stone-500 w-1/3 p-28 rounded-2xl">
                <h1 className="py-4 text-2xl" >REGISTRATE</h1>
                <hr />
                
                <form onSubmit={handleSubmit} className="py-4">
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

                    <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 px-8 py-4 rounded-3xl my-4">Crear usuario</button>
                    <h3 className='py-8'>Ya eres usuario:</h3>
                    <div className=''>
                        <Link to="/Login" className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 px-8 py-4 rounded-3xl my-4'>logearme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}