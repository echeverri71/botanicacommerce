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
import logo from '../assets/img/botanica_logo2.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='nav_bar'>
            <Link to= {"/"}>
                <img className='logo' src={logo}/>
            </Link>
            <Menu>
                <Link to= {"/catalogue"}>
                    <Button colorScheme={'green'} as={Button} >
                        Todos los Productos
                    </Button>
                </Link>
                <MenuButton colorScheme={'green'} as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <Link to={`/categoria/${"Plantas de Interior"}`}>
                        <MenuItem>Plantas de Interior</MenuItem>
                    </Link>
                    <Link to={`/categoria/${"Plantas de Exterior"}`}>
                        <MenuItem>Plantas de Exterior</MenuItem>
                    </Link>
                    <Link to={`/categoria/${"Macetas"}`}>
                    <MenuItem>Macetas</MenuItem>
                    </Link>
                </MenuList> 
            </Menu>
            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </div>
    )
}

export default NavBar