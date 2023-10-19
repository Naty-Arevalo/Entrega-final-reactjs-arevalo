import "./ItemListContainer.css"
import ItemList from "./itemList/ItemList"
import { useEffect, useState } from "react"
import {collection, getDocs,getFirestore} from "firebase/firestore"


const ItemListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
    const db = getFirestore();
    const itemsCollection= collection(db, "productos")
    getDocs(itemsCollection)
        .then((resp) =>{
            setData(
                resp.docs.map((doc) =>{
                    return{...doc.data(), id: doc.id}
                })
            )
        })
    },[]);

    return (<>
    <div className="div-itemContainer">
        <h2 className="productos-title">Productos</h2>
        <div className="productos">
        {data.map ((productos) =>{
                return (
                    <ItemList key={productos.id} productos={productos}/>
                )}
        
            )}
        </div>
    </div>
    
    </>)

}

export default ItemListContainer