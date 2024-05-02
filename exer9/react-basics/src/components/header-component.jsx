/*
    This is the header component. This creates a header that sticks to all pages and provides buttons that allows
    users to navigate to different components
*/
import './style.css';
import react from 'react';

// List of menus available in the header
const menus = [
    { name: "Appliances", url: "/appliances", id: 1 },
    { name: "Gadgets", url: "/gadgets", id: 2 },
    { name: "Accessories", url: "/accessories", id: 3 },
];

// Renders the entirety of the header (all its contents)
const Header = () => {
    return (
        <header className="header">
            <p>Lazado</p>
            <nav>
                {menus.map((menu, index) => (
                    <react.Fragment key={menu.id}>
                        <a href={menu.url}>{menu.name}</a>
                        {index !== menus.length - 1 && ' '}
                    </react.Fragment>
                ))}
            </nav>
        </header>
    );
}

export default Header;
