//react icons 
import { FcStackOfPhotos } from "react-icons/fc";
import { IoIosHeart } from "react-icons/io";
import { FaMoon } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";


//components 
import NavbarLinks from "./NavbarLinks";
//react router dom 
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <header className='navbar'>
                        <div className="navbar-start">
                            <Link to="/"><FcStackOfPhotos className="w-8 h-8" /></Link>
                        </div>
                        <div className="navbar-center hidden md:flex">
                            <NavbarLinks />
                        </div>
                        <div className='navbar-end flex items-center gap-3'>
                            <div>
                                <IoIosHeart className="w-6 h-6" />
                            </div>

                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <IoSunny className='swap-off h-6 w-6 fill-current' />

                                {/* moon icon */}
                                <FaMoon className='swap-on h-5 w-5 fill-current' />
                            </label>

                        </div>
                    </header>
                </div>
            </nav>
        </>
    )
}

export default Navbar
