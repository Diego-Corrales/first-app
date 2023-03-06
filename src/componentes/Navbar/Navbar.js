// import './Navbar.scss'
import logo from './Viking-PNG-Images.png'
import { Cartwidget } from "../Cartwidget/Cartwidget";


export const Navbar = () => {
    return (
        <header className="relative mx-auto p-6 bg-slate-800 ">
            <nav className="flex justify-around items-center">
                <hi className="text-4xl text-white font-serif">DISQUERIA "EL VIKINGO"</hi>
                {/* <img src='.\Imagenes\Viking-PNG-Images.png' className='header_Logo' alt='logo_vikingo' /> */}
                <img src={logo} alt='logo-vikingo' className='w-40'/>

                <div className="hidden md:flex justify-between items-center gap-10">
                    <a href="#" className="text-2xl text-white hover:text-yellow-400">DISCOS</a>
                    <a href="#" className="text-2xl text-white hover:text-yellow-400 hover:text-  font-serif">MERCHANDISING</a>
                    <a href="#" className="text-2xl text-white hover:text-yellow-400 hover:text-  font-serif">SHOWS</a>
                    
                </div>
                <div>
                    <Cartwidget />
                </div>
                
            </nav>
        </header>
    )
}


