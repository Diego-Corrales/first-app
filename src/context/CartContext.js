import { createContext, useEffect, useState } from "react";


// creamos un custom provider para el carrito de compras
export const CartContext = createContext()

// creamos una funcion que inicializa el carrito con los datos del localStorage
const init = JSON.parse(localStorage.getItem('cart')) || []

// centralizamos la funcionalidad del carrito en un componente, lo importamos en App.js
export const CartProvider = ( {children} ) => {
        
    // definimos el estado del carrito y el contexto
    const [cart, setCart] = useState(init)

    // definimos la funcion para agregar al carrito
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    // definimos la funcion para saber si el producto ya esta en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    // definimos la funcion para saber la cantidad total de productos en el carrito
    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    // definimos la funcion para saber el total de la compra
    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.Precio * prod.cantidad, 0)
    }

    // definimos la funcion para vaciar el carrito
    const vaciarCarrito = () => {
        setCart([])
    }

    // definimos la funcion para eliminar un producto del carrito
    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((prod) => prod.id !== id))
    }

    // guardamos el carrito en el localStorage para que no se pierda al recargar la pagina
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
    // retorna el proveedor del contexto
    return (
        
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito
        }}>
            {children}

        </CartContext.Provider>
    )
}