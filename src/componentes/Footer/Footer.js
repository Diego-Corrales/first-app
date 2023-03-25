import logo from '../../componentes/Navbar/Viking-PNG-Images.png'
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        
        <footer class="bg-gray-800">
            <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <ul class="flex items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className='px-6'>
                            <h6>Contactanos:</h6>
                            <p>Tel: 1111-2222</p>
                            <p>E-Mail: viking@coder.com.ar</p>
                            <p>Direccion: Av. Cabildo 1122</p>
                        </li>
                        <li className='px-6'>
                            <a href="https://es-la.facebook.com/" class="mr-4 hover:underline md:mr-6 ">Facebook</a>
                        </li>
                        <li className='px-6'>
                            <a href="https://www.instagram.com/" class="mr-4 hover:underline md:mr-6">Instagram</a>
                        </li>
                        <li className='px-6'>
                            <a href="https://twitter.com/" class="mr-4 hover:underline md:mr-6 ">Twitter</a>
                        </li>
                    </ul>
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <Link to="/"><img src={logo} alt='logo-vikingo' className='w-20 mx-4'/></Link>
                        <span class="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
                            VIKING RECORDS
                        </span>
                    </a>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved.</span>
            </div>
        </footer>


    )
}