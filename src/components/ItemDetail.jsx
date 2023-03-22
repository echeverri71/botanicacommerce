import React from 'react'
import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import {useState, useEffect} from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetail = ({plantas}) => {
    const {id} = useParams();
    const [producto, setProducto] = useState ([]);
    useEffect (() => {
        const db = getFirestore();
        const plantaRef = doc (db, "Botanica", `${id}`);
        getDoc (plantaRef).then((snapshot) => {
            if (snapshot.exists()){
                setProducto(snapshot.data());
            } else {
                console.log("No")
            }
        });
    },[]);

    const plantaFilter = plantas.filter((planta) => planta.id == id);


    return (
        <div>
            {plantaFilter.map((planta) => (
                <div key={planta.id}>
                    <Center>
                    <Card maxW='lg'align="center">
                        <CardBody align="center">
                            <Image src={planta.img} boxSize='300px'/>
                            <Stack mt='6' spacing='3'>
                            <Heading size='lg'>{planta.nombre}</Heading>
                            <Text fontSize='18px' fontFamily='arial'>
                                Categoria: {planta.categoria}
                            </Text>
                            <Text color='black' fontSize='22px'>
                                Descripcion: {planta.descripcion}
                            </Text>
                            <Text color='green' fontSize='18px' fontFamily='arial'>
                                Stock: {planta.stock}
                            </Text>
                            
                            <Text color='green' fontSize='16px' fontFamily='arial'>
                                Precio: ${planta.precio}
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <ItemCount
                                id={planta.id}
                                nombre={planta.nombre}
                                stock={planta.stock}
                                precio={planta.precio}
                                />
                        </CardFooter>
                    </Card>
                    </Center>
                </div>
            ))}        
        </div>
    );
};

export default ItemDetail