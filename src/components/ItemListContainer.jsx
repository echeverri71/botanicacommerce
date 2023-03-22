import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Center } from '@chakra-ui/react';
import {collection, getDocs, getFirestore} from "firebase/firestore";


const ItemListContainer = () => {
    const {categoria} = useParams();
    const [plantas, setPlantas] = useState ([]);

    useEffect (()=> {
        const db = getFirestore ();
        const plantasCollection = collection (db, "Botanica");
        getDocs (plantasCollection).then ((snapshot)=> {
            const plantas = snapshot.docs.map ((doc)=> ({
                ...doc.data(),
                id: doc.id,
            }));
        setPlantas (plantas);
        });
    },[]);

    const catFilter = plantas.filter ((planta)=> planta.categoria === categoria);

    return <div className='seccionProdcutos'>
        <div className='ttCategorias'>
            <h2>Todos Los Productos</h2>
        </div>
        <div>
            <Center>
            {categoria? <ItemList plantas={catFilter}/> : <ItemList plantas={plantas}/>}
            </Center>
            
        </div>
    </div>
};

export default ItemListContainer 