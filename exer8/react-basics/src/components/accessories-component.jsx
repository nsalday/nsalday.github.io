/*
    This is the accessories component. This renders accessories in the page and allows user to add these accessories to the cart
*/

import './style.css';

// Prints out that the current item is addded to cart
const handleClick = (label) => {
    console.log(`Added ${label} to Cart!`);
}

// List of accessories to be rendered in the page
const accessoies = [
    { src: "https://img.lazcdn.com/g/p/de8450a5e052ebe6a57239bd511be9f8.jpg_720x720q80.jpg", label: "Leather Gloves" },
    { src: "https://i.ebayimg.com/images/g/Gj4AAOSwlqlj5nLU/s-l1200.webp", label: "Hat" },
    { src: "https://marksandspencer.com.ph/cdn/shop/products/SD_01_T01_1026C_Y0_X_EC_90.jpg?v=1673598246", label: "Bag" },
    { src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw3f3e1c6f/productimages/singlepackshot/562731C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5", label: "Bracelet" },
    { src: "https://cdn.shopify.com/s/files/1/1587/6949/products/1_1_8e957653-5f7f-4345-84ea-a1c9ae26f028_1600x.jpg?v=1616990605", label: "Ring" },
  ];

// Renders images and buttons in the page
const Accessories = () => {
    return (
        <div>
            {accessoies.map((accessory, index) => (
            <div className="container" key={index}>
                <img src={accessory.src} alt={accessory.label} className="image" />
                <button className="button" onClick={() => handleClick(accessory.label)}>Add to Cart</button>
            </div>
            ))}
        </div>
    );
}

export default Accessories;