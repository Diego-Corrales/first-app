import React, { useContext, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { dataBase } from '../../firebase/config'
import { collection, addDoc, writeBatch, query, documentId, where, getDocs } from 'firebase/firestore'

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

        // creamos un batch para actualizar el stock de los productos
        const batch = writeBatch(dataBase)

        // creamos una referencia a la coleccion orders
        const ordersRef = collection(dataBase, 'orders')

        // creamos una referencia a la coleccion discos
        const productosRef = collection(dataBase, 'discos')

        const outOfStock = []

        // creamos una query para obtener los productos del carrito mediante la funcion where y el metodo in que recibe un array de ids
        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        // obtenemos los productos del carrito mediante la funcion getDocs
        const response = await getDocs(itemsRef)

        // recorremos los productos del carrito y actualizamos el stock de cada uno, si el stock es menor a la cantidad del carrito, se agrega el producto al array outOfStock
        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)


            if (doc.data().Stock >= item.cantidad) {
                batch.update(doc.ref, { Stock: doc.data().Stock - item.cantidad })
            } else {
                outOfStock.push(item)
            }
        })

        // si el array outOfStock esta vacio, se envia la orden y se actualiza el stock de los productos, si no, se muestra un alert con el mensaje de que no hay stock suficiente
        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()

            })
        } else {
            <div id="toast-top-left" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <div className="text-sm font-normal">No hay stock suficiente.</div>
            </div>
        }

    }

    // creamos un renderizado condicional para mostrar el numero de orden una vez que se envia el formulario
    if (orderId) {
        return (
            <div className="w-full h-full bg-gradient-to-t from-slate-400 to-slate-600 items-center p-10">
                <h2 className='text-3xl py-2 text-white font-semibold'>
                    Gracias por tu compra!
                </h2>
                <p className='text-2xl py-4'>
                    <span className='text-white'>Tu numero de orden es: </span>
                    <span className="text-green-800 text-3xl font-semibold">{orderId}</span>
                </p>
                <hr />
                <div className='py-6'>
                    <Link to="/Discos" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded">Volver a Discos</Link>
                </div>
            </div>
        )
    }
    
    // si el carrito esta vacio, redirige a la pagina de discos
    if (cart.length === 0) {
        return <Navigate to="Discos" />
    }
    
    return (
        <div className="items-center p-4 w-full h-full bg-gradient-to-t from-slate-400 to-slate-600">
            <h2 className='text-2xl mb-8 text-white'>
                Completa el formulario para finalizar tu compra:
            </h2>

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

                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-4 my-4 rounded">Enviar</button>
            </form>
        </div>
    )
}