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
                    <Button as={Button} >
                        Todos los Productos
                    </Button>
                </Link>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <Link to={`/category/${"Plantas de Interior"}`}>
                        <MenuItem>Plantas de Interior</MenuItem>
                    </Link>
                    <Link to={`/category/${"Plantas de Exterior"}`}>
                        <MenuItem>Plantas de Exterior</MenuItem>
                    </Link>
                    <MenuItem>Macetas</MenuItem>
                </MenuList>    
            </Menu>
            <CartWidget/>
        </div>
    )
}

export default NavBar