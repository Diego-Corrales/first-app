import { Link } from "react-router-dom"


const Item = ( {item} ) => {
    return (
        <div className="flex-row items-center text-center bg-slate-500 rounded-2xl w-80">
            <img src={item.img} alt={item.banda} className="w-80 h-80 rounded-2xl p-2" />
            <br />
            <h2 className="text-3xl font-bold underline">{item.banda}</h2>
            <br />
            <p className="text-2xl font-bold">{item.Discografia}</p>
            <br />
            <p className="text-2xl font-bold">{item.Precio}</p>
            <br />
            <Link to={`/detail/${item.id}`} className="rounded-2xl px-10 bg-blue-800 p-2 italic font-bold">Ver Mas</Link>
            <br />
            <br />
        </div>
    )
}

export default Item