import React from 'react'
import logo from '../assets/img/botanica_logo2.png'
import { Link } from 'react-router-dom'
import { Center } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <div>
            <Center>
                <Link to= {"/"}>
                    <img className='logo2' src={logo}/>
                </Link>
            </Center>
            <p className='ttFooter'>Terminos y Condiciones | Derechos reservados David Echeverri M 2023</p>
        </div>
    )
}
