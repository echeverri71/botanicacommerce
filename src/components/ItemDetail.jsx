import React from 'react'
import plantaImg from "../assets/img/Planta.jpeg"
import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    ButtonGroup
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const ItemDetail = ({plantas}) => {
    const { id } = useParams();
    const plantaFilter = plantas.filter((planta) => planta.id == id);
    const [contador, setContador] = useState(0);
    return (
        <div>
            {plantaFilter.map((planta) => (
                <div key={planta.id}>
                    <Center>
                    <Card maxW='lg'align="center">
                        <CardBody align="center">
                            <Image src={plantaImg} borderRadius='lg'/>
                            <Stack mt='6' spacing='3'>
                            <Heading size='lg'>{planta.name}</Heading>
                            <Text fontSize='18px' fontFamily='arial'>
                                Categoria: {planta.category}
                            </Text>
                            <Text color='black' fontSize='22px'>
                                Descripcion: {planta.description}
                            </Text>
                            <Text color='green' fontSize='18px' fontFamily='arial'>
                                Stock: {planta.stock}
                            </Text>
                            
                            <Text color='green' fontSize='16px' fontFamily='arial'>
                                Precio: ${planta.price}
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <div>
                                <p className='ttContador'>Cantidad</p>
                                <p className='ttContador'>{contador}</p>
                                <Button onClick={() => setContador((contador) => contador - 1)}>
                                    -
                                </Button>
                                <Button onClick={() => setContador((contador) => (contador = 0))}>
                                    Borrar
                                </Button>
                                <Button onClick={() => setContador((contador) => contador + 1)}>
                                    +
                                </Button>
                                <ButtonGroup spacing='3'>
                                <Link>
                                    <Button variant='solid' colorScheme='green'>
                                        Agregar a Carrito
                                    </Button>
                                </Link>
                                </ButtonGroup>
                            </div>
                        </CardFooter>
                    </Card>
                    </Center>
                </div>
            ))}        
        </div>
    )
}

export default ItemDetail