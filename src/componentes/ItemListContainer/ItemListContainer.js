
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])

    const {CategoryId} = useParams();
    
    
    useEffect(() => {
        
        // referencia a la coleccion de firebase
        const productosRef = collection(dataBase, "discos")

        // funcion que filtra los documentos de la coleccion por categoria desde firebase y usamos un ternario para condicionar la respuesta
        // si no hay categoria seleccionada, se muestran todos los productos
        // si hay categoria seleccionada, se muestran los productos de esa categoria
        const filtro = CategoryId
                        ? query(productosRef, where("Category", "==", CategoryId))
                        : productosRef

        // consumimos la coleccion de firebase
        // obtenemos una respuesta con los documentos de la coleccion y los mapeamos para obtener un array de objetos ademas de agregar el id de cada documento
        getDocs(filtro)
            .then((res) => {
                const arrayProductos = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })

                setProductos(arrayProductos)
            })
        
    }, [CategoryId])

    // retornamos un main con un titulo y el componente ItemList que recibe el array de productos
    return (
        <main className="bg-gradient-to-t from-slate-400 to-slate-600 py-4">
            <div className="mx-10 justify-between text-center">
                <h2 className="text-3xl font-bold py-10">Disfruta de nuestra mas variada y completa lista de discos y vinilos</h2>
                <ItemList items={productos}/>
            </div>
        </main>
        
    )

    
}

export default ItemListContainer


    