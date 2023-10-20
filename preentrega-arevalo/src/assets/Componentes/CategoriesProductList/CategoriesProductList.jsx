import { useParams } from "react-router-dom";
import "./categoriesProductList.css"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "../ItemListContainer/itemList/ItemList";
import error from "../error"

const CategoriesProductList = () => {
    const{categoryId} = useParams();
    const [data, setData] = useState([])
    
    useEffect(()=>{
        const db = getFirestore();
        const q = query(collection(db, "productos"), where ("category", "==", `${categoryId}`))
        getDocs(q).then((resp) =>{
            if(resp.size === 0){
                error
            }
            setData(resp.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    },[categoryId]);
    
    return (<>
        <div>
            <h2>Detalle</h2>
            <div className="container">
                {
                data.map((productos) =>{
                    return <ItemList key={productos.id} productos={productos}/>
                    
                })
                }
            </div>            
        </div>        
    </>        
        );
}

export default CategoriesProductList;