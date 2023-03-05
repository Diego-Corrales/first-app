// import './Navbar.scss'
import logo from './Viking-PNG-Images.png'
import { Cartwidget } from "../Cartwidget/Cartwidget";


export const Navbar = () => {
    return (
        <header className="bg-gray-900">
            <div className="max-w-full flex justify-between items-center px-5 py-0 mx-0 my-auto">
                <hi className="text-4xl text-white font-serif">Disqueria "EL VIKINGO"</hi>
                {/* <img src='.\Imagenes\Viking-PNG-Images.png' className='header_Logo' alt='logo_vikingo' /> */}
                <img src={logo} alt='logo-vikingo' className='w-40'/>

                <nav className="flex justify-between items-center gap-10">
                    <a href="#" className="text-2xl text-white font-serif">DISCOS</a>
                    <a href="#" className="text-2xl text-white font-serif">MERCHANDISING</a>
                    <a href="#" className="text-2xl text-white font-serif">SHOWS</a>
                    
                </nav>
                <div>
                    <Cartwidget />
                </div>
                
            </div>
        </header>
    )
}

