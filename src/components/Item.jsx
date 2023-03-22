import React from 'react'
import {
    Card,
    Center,
    CardBody,
    Image,
    Heading,
    Text,
    Stack,
    CardFooter,
    Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, categoria, img}) => {
    return (
        <div className='cardItem'>
            <div>
                <Center p="2rem">
                <Card maxW='xl'align="center" className='contCard'>
                    <CardBody align="center">
                        <Image src={img} boxSize='300px'/>
                        <Stack mt='2' spacing='1'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text>Categoria:{categoria}</Text>
                        <Text color='green' fontSize='16px'>
                            Stock:{stock}
                        </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Link to={`/item/${id}`}>
                            <Button variant='solid' colorScheme='green'>
                                Detalles
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                </Center>
            </div>
        </div>
    )
}

export default Item