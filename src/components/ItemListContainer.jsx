import React from 'react'
import Data from "../data.json"
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Center, Wrap, WrapItem } from '@chakra-ui/react'


const ItemListContainer = () => {
    const { category } = useParams();
    const [plantas, setPlantas] = useState ([]);

    useEffect (() => {
        async function fetchData () {
            try {
                const response = await fetch (Data);
                const data = await response.json();
                setPlantas(data);
            } catch (error){}
        }
        fetchData();
    }, []);
    const catFilter = Data.filter ((planta)=> planta.category === category);

    return <div className='seccionProdcutos'>
        <div className='ttCategorias'>
            <h2>Todos Los Prodcutos</h2>
        </div>
        <Wrap justify="center">
            <WrapItem>
            {category? <ItemList plantas={catFilter}/> : <ItemList plantas={Data}/>}
            </WrapItem>
        
        </Wrap>
        
    </div>
};

export default ItemListContainer 