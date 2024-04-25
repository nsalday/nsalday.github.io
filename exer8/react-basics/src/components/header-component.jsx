import './header.css';
import react from 'react';

const menus = [
    { name: "Appliances", url: "/appliances", id: 1 },
    { name: "Gadgets", url: "/gadgets", id: 2 },
    { name: "Accessories", url: "/accessories", id: 3 },

];

function Header() {
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
