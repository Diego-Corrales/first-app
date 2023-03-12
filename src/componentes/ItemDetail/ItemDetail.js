import { useNavigate } from "react-router"


const ItemDetail = ({item}) => {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    }
    
    return (
        <div className="container my-5">
            <h2 className="text-3xl font-bold underline">{item.Banda}</h2>
            <br />
            <p className="text-2xl font-bold">{item.Discografia}</p>
            <br />
            <p className="text-2xl font-bold">{item.Precio}</p>
            <br />
            <button onClick={handleVolver} className="rounded-2xl px-10 bg-blue-800 p-2 italic font-bold">Volver</button>
        </div>
    )
}

export default ItemDetail