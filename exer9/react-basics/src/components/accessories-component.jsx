/*
    This is the accessories component. This renders accessories in the page and allows user to add these accessories to the cart
*/

import './style.css';
import ShoppingCartComponent from '../components/shopping-cart-component.jsx';
import { useState } from 'react';

// List of accessories to be rendered in the page
const accessoies = [
    { src: "https://img.lazcdn.com/g/p/de8450a5e052ebe6a57239bd511be9f8.jpg_720x720q80.jpg", label: "Leather Gloves" },
    { src: "https://i.ebayimg.com/images/g/Gj4AAOSwlqlj5nLU/s-l1200.webp", label: "Hat" },
    { src: "https://marksandspencer.com.ph/cdn/shop/products/SD_01_T01_1026C_Y0_X_EC_90.jpg?v=1673598246", label: "Bag" },
    { src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw3f3e1c6f/productimages/singlepackshot/562731C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5", label: "Bracelet" },
  ];

// Renders images and buttons in the page
const Accessories = () => {
    const [items, setItems] = useState([]);

    // Accessories component modification
    const handleClick = (accessory) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.label === accessory.label);
            if (existingItem) {
                // Increase the quantity if the item already exists
                return prevItems.map(item =>
                    item.label === accessory.label ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                // Add new item if it doesn't exist
                return [...prevItems, { ...accessory, id: Date.now(), qty: 1 }];
            }
        });
        console.log(`Added ${accessory.label} to Cart!`);
    }

    const handleDelete = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className='flex-container'>
            {accessoies.map((accessory, index) => (
                <div className="container" key={index}>
                    <img src={accessory.src} alt={accessory.label} className="image" />
                    <button className="button" onClick={() => handleClick(accessory)}>
                        Add to Cart
                    </button>
                </div>
            ))}
            <div className="cart-container">
                <ShoppingCartComponent items={items} onDelete={handleDelete}/>
            </div>
        </div>
    );
}

export default Accessories;