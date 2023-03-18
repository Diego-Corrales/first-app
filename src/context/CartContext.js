import { createContext, useState } from "react";


// creamos un custom provider para el carrito de compras
export const CartContext = createContext()

// centralizamos la funcionalidad del carrito en un componente, lo importamos en App.js
export const CartProvider = ( {children} ) => {
        
    // definimos el estado del carrito y el contexto
    const [cart, setCart] = useState([])

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
    
    // retorna el proveedor del contexto
    return (
        
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad
        }}>
            {children}

        </CartContext.Provider>
    )
}