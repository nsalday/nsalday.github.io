/*
    This is the gadgets component. This renders gadgets in the page and allows user to add these to the cart
*/

import './style.css';

// Prints out that the current item is addded to cart
const handleClick = (label) => {
    console.log(`Added ${label} to Cart!`);
}

// List of gadgets to be rendered in the page
const gadgets = [
    { src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818", label: "Iphone" },
    { src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi_AV1_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670865948534", label: "Ipad" },
    { src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24zZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCZkNDUmN0SlpnYXpQNFNTbUVsbTlnST0=", label: "Apple Watch" },
    { src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034", label: "Macbook" },
    { src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-tower-hero-cto_FMT_WHH?wid=550&hei=650&fmt=jpeg&qlt=90&.v=1684351792368", label: "Mac Pro" },
  ];

// Renders images and buttons in the page
const Gadgets = () => {
    return (
        <div>
            {gadgets.map((gadget, index) => (
            <div className="container" key={index}>
                <img src={gadget.src} alt={gadget.label} className="image" />
                <button className="button" onClick={() => handleClick(gadget.label)}>Add to Cart</button>
            </div>
            ))}
        </div>
    );
}

export default Gadgets;