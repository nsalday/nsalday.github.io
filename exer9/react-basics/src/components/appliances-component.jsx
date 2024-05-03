/*
    This is the appliances component. This renders appliances in the page and allows user to add these to the cart
*/

import './style.css';
import ShoppingCartComponent from '../components/shopping-cart-component.jsx';
import { useState } from 'react';

// List of appliances to be rendered in the page
const appliances = [
    { src: "https://www.lg.com/ph/images/refrigerators/md05882016/gallery/GR-H432HLHN-front.jpg", label: "Refrigerator" },
    { src: "https://images.samsung.com/is/image/samsung/p6pim/ph/mg30t5018cc-tc/gallery/ph-mw5000t-mg30t5018cc-tc-530524580?$1300_1038_PNG$", label: "Microwave" },
    { src: "https://metroplazadavao.com/cdn/shop/products/CarrierFP-42GCVBE010-303_f22f3f12-9d3a-4023-a2c0-41d2b9930beb_360x.jpg?v=1589849401", label: "Air Conditioner" },
    { src: "https://www.smappliance.com/cdn/shop/products/10165552-BBL801-BLENDER1_700x.jpg?v=1620836155", label: "Blender" },
  ];

// Renders images and buttons in the page
const Appliances = () => {
    const [items, setItems] = useState([]);

    // Accessories component modification
    const handleClick = (appliance) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.label === appliance.label);
            if (existingItem) {
                // Increase the quantity if the item already exists
                return prevItems.map(item =>
                    item.label === appliance.label ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                // Add new item if it doesn't exist
                return [...prevItems, { ...appliance, id: Date.now(), qty: 1 }];
            }
        });
        console.log(`Added ${appliance.label} to Cart!`);
    }

    const handleDelete = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className='flex-container'>
            {appliances.map((appliance, index) => (
                <div className="container" key={index}>
                    <img src={appliance.src} alt={appliance.label} className="image" />
                    <button className="button" onClick={() => handleClick(appliance)}>
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

export default Appliances;