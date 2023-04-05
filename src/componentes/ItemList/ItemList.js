

import Item from '../Item/Item'

// funcion que recibe un array de productos y los mapea para retornar un componente Item por cada producto
const ItemList = ({ items }) => {

    return (
        <div className='flex flex-wrap justify-between gap-5'>
            { items.map(item => <Item key={item.id} item={item} />) }
        </div>
    )
}

export default ItemList