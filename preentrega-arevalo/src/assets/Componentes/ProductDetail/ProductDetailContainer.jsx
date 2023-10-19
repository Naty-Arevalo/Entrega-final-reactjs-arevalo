import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ProductDetail from "./ProductDetail";


const ProductDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
        .then((resp) =>{
            setItem({...resp.data(), id: id})
        })
        
    },[id]);

    return ( <> 
    {item && <ProductDetail item={item} />}
    
 </> );
}

export default ProductDetailContainer;