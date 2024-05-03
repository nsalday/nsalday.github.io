/*
    This is the gadgets component. This renders gadgets in the page and allows user to add these to the cart
*/

import './style.css';

const ItemComponent = ({item, items, setItemsInCart, onDelete}) => {
    const handleDelete = (id) => {
        onDelete(id);  // Call the parent's delete handler
    };

    return (
        <div className='item-container'>
            <p>{item.label} QTY: {item.qty}</p>
            <button className='delete' onClick={() => handleDelete(item.id)}>X</button>
        </div>
    );
}

export default ItemComponent;