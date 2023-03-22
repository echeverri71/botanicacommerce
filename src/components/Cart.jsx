import React from 'react'
import {
Image,
Center,
Button
} from "@chakra-ui/react";
import {useContext} from "react";
import {CartContext} from "../context/ShoppingCartContext";
import Order from './Order';
import { useState } from 'react';



const Cart = () => {

    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState([])
    const tot = cart.map((plantas)=>plantas.precio*plantas.quantity)
    setTotal [tot]
    const totalCarrito = tot.reduce((total, item)=> total+item, 0);
    const removeItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
    };
    

    return (
        <>
            <div className='ttDetailCont'>
                <h1>Productos en tu Carrito</h1>
            </div>
            {cart.map((item) => {
                return (
                    <div key={item.id} className='contCart'>
                        <div>
                            <Image src={item.img} boxSize='80px' borderRadius='full'/>
                        </div>
                        <div className='contBBorrar'>
                            <p className='ttNombreCart'>{item.nombre}</p>
                            <p className='ttPrecioCart'>Precio: ${item.precio}</p>
                            <p className='ttCantCart'>Cantidad: {item.quantity}</p>
                        </div>
                        <div className='contBBorrar'>
                            <Button onClick={()=>removeItem(item.id)} colorScheme='red'>Borrar del Carrito</Button>
                        </div>
                    </div>
                );
            })}
        <Center>
            <p className='ttTotalCompra'>El total de su compa es de: ${totalCarrito}</p>
        </Center>
        
        <Order/>
    </>
    );
};
        
export default Cart

