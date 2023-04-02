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
        <div className="bg-amber-400 flex justify-center items-center w-full h-screen">
            <div className="bg-white w-96 p-28 rounded-2xl">
                <h1>Registrate</h1>
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

                    <button className="bg-slate-400 px-8 py-4 rounded-3xl my-4">Crear usuario</button>
                    <h3 className='py-4'>Ya eres usuario:</h3>
                    <div className='flex'>
                        <Link to="/Login" className='bg-slate-400 px-8 py-4 rounded-3xl my-4'>logearme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}