import React from 'react'
import planta from "../assets/img/Planta.jpeg"
import {
    Card,
    Center,
    CardBody,
    Image,
    Heading,
    Text,
    Stack,
    CardFooter,
    Button,
    ButtonGroup
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, name, stock, category,}) => {
    return (
        <div>
            <div key={id}>
                <Center p= "1rem">
                <Card maxW='lg'align="center" className='contCard'>
                    <CardBody align="center">
                        <Image src={planta} borderRadius='lg'/>
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>Categoria: {category}</Text>
                        <Text color='green' fontSize='16px'>
                            Stock: {stock}
                        </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Link to={`/item/${id}`}>
                            <Button variant='solid' colorScheme='green'>
                                Detalles
                            </Button>
                        </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                </Center>
            </div>
        </div>
    )
}

export default Item