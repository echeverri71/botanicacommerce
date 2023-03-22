import React from 'react'
import Item from "./Item";
import {Container, Center} from "@chakra-ui/react";

const ItemList = ({plantas}) => {
    return (
        <div>
            <Center>
            <Container maxW="container.xl" className='contProductos'>
            {plantas?.map((planta) => (
                <Item
                key={planta.id}
                id={planta.id}
                nombre={planta.nombre}
                descripcion={planta.descripcion}
                precio={planta.precio}
                stock={planta.stock}
                categoria={planta.categoria}
                img={planta.img}
                />
            ))}
            </Container>
            </Center>
        </div>
        );
    };

export default ItemList