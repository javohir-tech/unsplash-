//react icons 
import { FcStackOfPhotos } from "react-icons/fc";
import { IoIosHeart } from "react-icons/io";
import { FaMoon } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";
import { MdCloudDownload } from "react-icons/md";

//components 
import NavbarLinks from "./NavbarLinks";

//react router dom 
import { Link } from "react-router-dom";

//react
import { useEffect, useState } from "react";

//custom hooks
import { useGlobalContext } from "../Hooks/useGlobalContext";



function Navbar() {
    //theme js 
    const themeFromLocal = () => {
        return localStorage.getItem("theme") || "winter"
    }

    const [theme, setTheme] = useState(themeFromLocal())

    const toggleTheme = () => {
        const newTheme = theme === "winter" ? "dracula" : "winter"
        setTheme(newTheme)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    //context js 
    const { likedImages, downloadImages } = useGlobalContext()



    return (
        <>
            <nav className="bg-base-200">
                <div className="container">
                    <header className='navbar '>
                        <div className="navbar-start">
                            <div className="hidden md:flex">
                                <Link to="/"><FcStackOfPhotos className="w-8 h-8" /></Link>
                            </div>
                            <div className="dropdown md:hidden">
                                <div tabIndex={0} role="button" className="btn m-1 border-0 shadow-none"><FcStackOfPhotos className="w-8 h-8" /></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <NavbarLinks />
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden md:flex">
                            <ul className="menu menu-horizontal gap-5  rounded-box">
                                <NavbarLinks />
                            </ul>
                        </div>
                        <div className='navbar-end flex items-center gap-5'>

                            <div>
                                <Link to="/downloadImages" className="relative">
                                    < MdCloudDownload className="w-6 h-6" />
                                    <div className="badge absolute bottom-3 left-4 w-5 h-5 bg-stone-600 text-slate-100 rounded-full p-1">{downloadImages.length}</div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/likedImages" className="relative">
                                    <IoIosHeart className="w-6 h-6" />
                                    <div className="badge absolute bottom-3 left-4 w-5 h-5 bg-stone-600 text-slate-100 rounded-full p-1">{likedImages.length}</div>
                                </Link>
                            </div>

                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input onClick={toggleTheme} type="checkbox" className="theme-controller" value="synthwave" />

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
