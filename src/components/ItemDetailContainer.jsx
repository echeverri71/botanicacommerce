import ItemDetail from "./ItemDetail";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useState, useEffect } from 'react';


const ItemDetailContainer = () => {

    const [plantas, setPlantas] = useState ([]);
    useEffect (() => {
        const db = getFirestore();
        const plantasCollection = collection (db, "Botanica");
        getDocs (plantasCollection).then ((snapshot) =>{
            const plantas = snapshot.docs.map ((doc)=> ({
                ...doc.data(),
                id: doc.id,
            }));
            setPlantas (plantas);
        });
    },[]);
    return (
        <div className='ttDetailCont'>
            <h1>Detalle</h1>
            <ItemDetail plantas={plantas} />
        </div>
    )
}

export default ItemDetailContainer