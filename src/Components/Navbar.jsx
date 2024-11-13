//react icons 
import { FcStackOfPhotos } from "react-icons/fc";


//components 
import NavbarLinks from "./NavbarLinks";


function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <header className='navbar'>
                        <div className="navbar-start">
                            <FcStackOfPhotos className="w-8 h-8" />
                        </div>
                        <div className="navbar-center">
                            <NavbarLinks />
                        </div>
                        <div className='navbar-end'>
                            
                        </div>
                    </header>
                </div>
            </nav>
        </>
    )
}

export default Navbar
