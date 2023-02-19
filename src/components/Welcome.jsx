import React from 'react'
import {Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='seccionWelcome'>
            <div className='contenidoWelcome'>
                <h1 className='tt_welcome'>Bienvenidos a Botánica, Plantas y Macetas</h1>
                <p>El mejor lugar para encontrar tus plantas de interior, exterior y las macetas con los mejores diseños exclusivos a los mejores precios, conoce nustros productos aca!</p>
            </div>
            <div className='botonWelcome'>
                <Link to= {"/catalogue"}>
                    <Button colorScheme='green' size='lg' as={Button} fontSize='24px' >
                        Conoce nuestros prodcutos aca!
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome