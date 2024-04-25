import './header.css';

function Header() {
    return (
        <header className="header">
            <p>Lazado</p>
            <nav>
                <a href="/appliances">Appliances</a> <a href="/gadjets">Gadgets</a> <a href="/accessories">Accessories</a>
            </nav>
        </header>
    );
}

export default Header;