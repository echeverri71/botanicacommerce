import React from 'react'
import {
Button,
Container,    
Heading,
Card,
CardHeader,
CardBody,
CardFooter,
Text,
Image,
Center
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
            {cart.map((plantas) => {
                return (
                    <Container key={plantas.id}>
                        
                    
                        <Card align='center' boxSize='300px'>
                            <CardHeader>
                            <Image src={plantas.img} boxSize='50px'/>
                            <Heading size="md">{plantas.nombre}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text as="b">Cantidad: {plantas.quantity}</Text>
                                <Text>Precio: ${plantas.precio}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button colorScheme="orange" onClick={()=>removeItem(item.id)}>
                                Borrar del Carrito
                                </Button>
                            </CardFooter>
                        </Card>
                        
                        
                        
                    </Container>
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

