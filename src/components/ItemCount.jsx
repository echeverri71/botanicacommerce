import {
ButtonGroup,
IconButton,
Tooltip,
Center,
Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, precio, nombre, img}) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(1);

    const addQty = () => {
    setCount(count + 1);
    };

    const substractQty = () => {
    setCount(count - 1);
    };

    const addToCart = () => {
    setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
        return currItems.map((item) => {
            if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
            } else {
            return item;
            }
        });
        } else {
        return [...currItems, {id, quantity: count, precio, nombre, img}];
        }
    });
    };

    return (
    <>
        <ButtonGroup size="lg" isAttached variant="outline">
        {count < 1 ? (
            <Tooltip label="Stock Minimo" placement="bottom">
            <IconButton icon={<MinusIcon/>} isDisabled />
            </Tooltip>
        ) : (
            <IconButton icon={<MinusIcon/>} onClick={substractQty} />
        )}
        <Center>
            <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="green"
            size="lg"
            > Agregar al Carrito: {count}
            </Button>
        </Center>
        {count < stock ? (
            <IconButton icon={<AddIcon/>} onClick={addQty}/>
        ) : (
            <Tooltip label="Stock Maximo Alcanzado" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
            </Tooltip>
        )}
        </ButtonGroup>
    </>
    );
};

export default ItemCount;