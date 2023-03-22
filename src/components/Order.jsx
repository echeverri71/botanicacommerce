import React from 'react'
import {useState, useContext} from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { Input, Button, Center,} from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { ArrowRightIcon } from '@chakra-ui/icons'
import Swal from 'sweetalert2'

const Order = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState ("");
    const [cart] = useContext(CartContext);

    const db= getFirestore();
    const handleSumbit = (e) => {
        e.preventDefault();
        if (name === "" || email ===""){
            Swal.fire("Estos datos son necesarios para finalizar la compra");
        } else {
            addDoc (ordersCollection, order).then(({id})=> setOrderId(id))
        }
    setEmail ("");
    };

    const order = {
        name,
        email,
        cart,
    };
    const ordersCollection = collection(db, "Ordenes");

    return (
        <div>
            <Center>
                <p className='ttEnvioOrdenes'>Envio de Ordenes</p>
            </Center>
            <Center>
                <div className='orderForm'>
                    <form onSubmit={handleSumbit}>
                            <Input type="text" placeholder='Ingrese Nombre Completo' size='md' m={1} onChange={(e)=> setName(e.target.value)}/>
                            <Input type="text" placeholder='Ingrese su Email' size='md' m={1} onChange={(e)=> setEmail(e.target.value)}/>
                            <Button type='submit' colorScheme="blue" m={2} size='lg' leftIcon={<ArrowRightIcon/>}>
                                Enviar Informacion y Finalizar Compra
                            </Button>
                            <p className='ttNroOrdenes'>Nro. De Orden:{orderId}</p>
                    </form>
                </div>
            </Center>
        </div>
    )
};

export default Order

