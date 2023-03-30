import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirProductoPorId } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail"
import { dataBase } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams();


    useEffect(() => {
        setLoading(true);
        
        const docRef = doc(dataBase, "discos", itemId);

        // consumimos la coleccion de firebase
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                 })
            })
            .finally(() => setLoading(false))

    }, [])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}