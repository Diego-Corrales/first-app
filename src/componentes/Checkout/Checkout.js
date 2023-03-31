import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const Checkout = () => {
    const {cart, totalCompra} = useContext(CartContext)

    // creamos un estado para guardar los valores del formulario
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    // creamos una funcion que recibe el evento y setea el estado de values con los valores del formulario
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // generamos un preventDefault para que no se recargue la pagina al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // validaciones
        if (values.nombre.length < 5) {
            alert('El nombre debe tener al menos 5 caracteres')
            return
        }
        if (values.direccion.length < 5) {
            alert('La direccion es invalida')
            return
        }
        if (values.email.length < 5) {
            alert('El email es invalido')
            return
        }

        // creamos un objeto orden con los datos del formulario y los productos del carrito
        const orden = {
            cliente: values.nombre,
            items: cart.map((prod) => ({ id: prod.id, title: prod.title, cantidad: prod.cantidad, precio: prod.Precio })),
            total: totalCompra,
            fecha: new Date().toLocaleString()
        }
    }
    
    // si el carrito esta vacio, redirige a la pagina de discos
    if (cart.length === 0) {
        return <Navigate to="Discos" />
    }
    
    return (
        <div className="my-5 container items-center p-4 m-4">
            <h2>
                Checkout
            </h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={"text"} 
                    placeholder="Nombre"
                    name='nombre'
                    className="border-2 border-gray-300 p-2 rounded-lg w-full"
                    />
                <input 
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={"text"} 
                    placeholder="Direccion"
                    name='direccion'
                    className="border-2 border-gray-300 p-2 rounded-lg w-full"
                    />
                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    type={"email"} 
                    placeholder="Tu email"
                    name='email'
                    className="border-2 border-gray-300 p-2 rounded-lg w-full"
                    />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
            </form>
        </div>
    )
}