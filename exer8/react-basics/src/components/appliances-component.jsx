/*
    This is the appliances component. This renders appliances in the page and allows user to add these to the cart
*/

import './style.css';

// Prints out that the current item is addded to cart
const handleClick = (label) => {
    console.log(`Added ${label} to Cart!`);
}

// List of appliances to be rendered in the page
const appliances = [
    { src: "https://www.lg.com/ph/images/refrigerators/md05882016/gallery/GR-H432HLHN-front.jpg", label: "Refrigerator" },
    { src: "https://images.samsung.com/is/image/samsung/p6pim/ph/mg30t5018cc-tc/gallery/ph-mw5000t-mg30t5018cc-tc-530524580?$1300_1038_PNG$", label: "Microwave" },
    { src: "https://metroplazadavao.com/cdn/shop/products/CarrierFP-42GCVBE010-303_f22f3f12-9d3a-4023-a2c0-41d2b9930beb_360x.jpg?v=1589849401", label: "Air Conditioner" },
    { src: "https://www.smappliance.com/cdn/shop/products/10165552-BBL801-BLENDER1_700x.jpg?v=1620836155", label: "Blender" },
    { src: "https://images.samsung.com/is/image/samsung/p6pim/ph/wd13tp44dsx-tc/gallery/ph-combo-wd12tp44dsxsp-wd13tp44dsx-tc-456460679?$720_576_JPG$", label: "Washing Machine" },
  ];

// Renders images and buttons in the page
const Appliances = () => {
    return (
        <div>
            {appliances.map((appliance, index) => (
            <div className="container" key={index}>
                <img src={appliance.src} alt={appliance.label} className="image" />
                <button className="button" onClick={() => handleClick(appliance.label)}>Add to Cart</button>
            </div>
            ))}
        </div>
    );
}

export default Appliances;