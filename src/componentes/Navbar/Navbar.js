import './Navbar.scss'
import logo from './Viking-PNG-Images.png'
import { Cartwidget } from "../Cartwidget/Cartwidget";


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header_container">
                <hi className="text-4xl text-white font-serif">DISQUERIA "EL VIKINGO"</hi>
                {/* <img src='.\Imagenes\Viking-PNG-Images.png' className='header_Logo' alt='logo_vikingo' /> */}
                <img src={logo} alt='logo-vikingo' className='header_Logo'/>

                <nav className="navbar">
                    <a href="#" className="navbar_link">LINK</a>
                    <a href="#" className="navbar_link">LINK</a>
                    <a href="#" className="navbar_link">LINK</a>
                    
                </nav>
                <div>
                    <Cartwidget />
                </div>
                
            </div>
        </header>
    )
}

