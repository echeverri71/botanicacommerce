import React from 'react'
import ItemDetail from "./ItemDetail";
import Data from "../data.json";

const ItemDetailContainer = () => {
    return (
        <div className='ttDetailCont'>
            <h1>Detalle</h1>
            <ItemDetail plantas={Data} />
        </div>
    )
}

export default ItemDetailContainer