import React, { useContext, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { dataBase } from '../../firebase/config'
import { collection, addDoc, getDoc, updateDoc, doc } from 'firebase/firestore'

export const Checkout = () => {
    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

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
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, precio: prod.Precio, cantidad: prod.cantidad, banda: prod.banda, disco: prod.Discografia })),
            total: totalCompra(),
            fecha: new Date()
        }

        console.log("submit", orden)

        // updatedoc - actualizamos el stock de los productos, traemos los datos de la base de datos, actualizamos el stock y lo subimos de nuevo
        // ademas validamos que el stock sea mayor o igual a la cantidad que se quiere comprar, de lo contrario mostramos un alert y no se actualiza el stock
        const productosRef = collection(dataBase, 'productos')

        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert('No hay stock suficiente de ' + item.banda + ' - ' + item.Discografia)
                    }

                })
        })


        // guardamos la orden en la base de datos y vaciamos el carrito
        const ordersRef = collection(dataBase, 'orders')

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()

            })

    }

    // creamos un renderizado condicional para mostrar el numero de orden una vez que se envia el formulario
    if (orderId) {
        return (
            <div className="my- container items-center p-4 m-4">
                <h2>
                    Gracias por tu compra!
                </h2>
                <p>
                    Tu numero de orden es: {orderId}
                </p>
                <hr />
                <div className='py-6'>
                    <Link to="/Discos" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Volver a Discos</Link>
                </div>
            </div>
        )
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