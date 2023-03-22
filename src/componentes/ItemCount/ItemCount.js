
const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handlerRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }
    

    // agregamos un operador ternario en el className para deshabilitar el boton de restar cuando la cantidad es 1 y el de sumar cuando la cantidad es igual al stock
    // mediante un templeate string, se agrega la clase bg-gray-500 para deshabilitar el boton y pointer-events-none para deshabilitar el evento click
    return (
        <div className='text-center space-y-2'>
            <button onClick={handlerRestar} className={`rounded-2xl px-10 italic font-bold p-2 ${cantidad === 1 ? " bg-gray-500 pointer-events-none" : "bg-blue-800"}`}>-</button>
            <span className="px-10">{cantidad}</span>
            <button onClick={handleSumar} className={`rounded-2xl px-10 italic font-bold p-2 ${cantidad === max ? "bg-gray-500 pointer-events-none" : "bg-blue-800" }`}>+</button>
            <br/>
            <button onClick={handleAgregar} className="bg-lime-600 rounded-2xl px-16 italic font-bolt p-2 text-lg">Sumar al carrito</button>
        </div>
    )
}

export default ItemCount