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
            <p className="text-2xl font-bold">AR${item.Precio}</p>
            <br />
            <Link to={`/detail/${item.id}`} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center mr-2 mb-2">Ver Mas</Link>
            <br />
            <br />
        </div>
    )
}

export default Item