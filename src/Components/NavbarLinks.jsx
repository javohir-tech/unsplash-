import { Link, NavLink } from "react-router-dom"


const Links = [
    {
        path: "/",
        text: "Home"
    },
    {
        path: "/about",
        text: "About"
    },
    {
        path: "/contact",
        text: "Contact"
    }
]

function NavbarLinks() {
    return (
        <>

            {Links.map((NavbarLink) => {
                return <li key={NavbarLink.path}>
                    <NavLink to={NavbarLink.path} className={({isActive})=>(isActive ? " font-bold base-200" : "base-100")}>{NavbarLink.text}</NavLink>
                </li>
            })}

        </>
    )
}

export default NavbarLinks
