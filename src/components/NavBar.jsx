import React from 'react'
import CartWidget from './CartWidget'
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../assets/img/plantas_logo.png'


const NavBar = () => {
    return (
        <div className='nav_bar'>
            <img className='logo' src={logo}/>
            <h1 className='tt1'>Botánica, Plantas Y Macetas</h1>

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>Plantas de Interior</MenuItem>
                    <MenuItem>Plantas de Exterior</MenuItem>
                    <MenuItem>Macetas</MenuItem>
                </MenuList>
            </Menu>
            
            <CartWidget/>
        </div>
    )
}

export default NavBar