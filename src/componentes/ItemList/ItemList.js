

import Item from '../Item/Item'

const ItemList = ({ items }) => {

    return (
        <div className='flex flex-wrap gap-5'>
            { items.map(item => <Item key={item.id} item={item} />) }
        </div>
    )
}

export default ItemList