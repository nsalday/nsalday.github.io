/*
    This is the gadgets component. This renders gadgets in the page and allows user to add these to the cart
*/

import './style.css';
import ItemComponent  from '../components/item-component.jsx';
import { useState, useEffect } from 'react';

// Prints out that the current item is addded to cart
const handleClick = (label) => {
    console.log(`Added ${label} to Cart!`);
};

// Renders images and buttons in the page
const ShoppingCartComponent = ({items, onDelete}) => {
    const [itemsInCart, setItemsInCart] = useState(items);

    useEffect(() => {
        setItemsInCart(items);
    }, [items]); // This will update itemsInCart whenever items prop changes
    
    // Calculate total quantity of items
    const totalQuantity = itemsInCart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div>
            <p>Shopping Cart (Total: {totalQuantity})</p>
            {items.map((item, index) => (
                <ItemComponent 
                    item={item} 
                    items={items} 
                    key={index} 
                    setItemsInCart={setItemsInCart}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ShoppingCartComponent;