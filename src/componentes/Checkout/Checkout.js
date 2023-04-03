import React, { useContext, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { dataBase } from '../../firebase/config'
import { collection, addDoc, writeBatch, query, documentId, where, getDocs, docs } from 'firebase/firestore'

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
    const handleSubmit = async (e) => {
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

        const batch = writeBatch(dataBase)

        // guardamos la orden en la base de datos y vaciamos el carrito
        const ordersRef = collection(dataBase, 'orders')

        // updatedoc - actualizamos el stock de los productos, traemos los datos de la base de datos, actualizamos el stock y lo subimos de nuevo
        // ademas validamos que el stock sea mayor o igual a la cantidad que se quiere comprar, de lo contrario mostramos un alert y no se actualiza el stock
        const productosRef = collection(dataBase, 'discos')

        const outOfStock = []

        console.log( cart.map(prod => prod.id) )

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            console.log(item)

            if (doc.data().Stock >= item.cantidad) {
                batch.update(doc.ref, { Stock: doc.data().Stock - item.cantidad })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()

            })
        } else {
            alert('No hay stock suficiente')
        }

    }

    // creamos un renderizado condicional para mostrar el numero de orden una vez que se envia el formulario
    if (orderId) {
        return (
            <div className="container items-center p-10">
                <h2 className='text-3xl py-2'>
                    Gracias por tu compra!
                </h2>
                <p className='text-2xl py-4'>
                    <span>Tu numero de orden es: </span>
                    <span className="text-green-700 text-3xl font-semibold">{orderId}</span>
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