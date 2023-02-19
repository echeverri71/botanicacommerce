import React from 'react'
import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ plantas }) => {
    return (
        <div>
            <Container maxW="container.lg" className='contProductos'>
            {plantas?.map((planta) => (
                <Item
                key={planta.id}
                id={planta.id}
                name={planta.name}
                description={planta.description}
                price={planta.price}
                stock={planta.stock}
                category={planta.category}
                />
            ))}
            </Container>
        </div>
        );
    };

export default ItemList