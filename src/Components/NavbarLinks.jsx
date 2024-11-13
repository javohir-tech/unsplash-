import { Link } from "react-router-dom"


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
            <ul className="menu menu-horizontal gap-5  rounded-box">
                {Links.map((NavbarLink) => {
                    return <li>
                        <Link key={NavbarLink.path} to={NavbarLink.path}>{NavbarLink.text}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default NavbarLinks
