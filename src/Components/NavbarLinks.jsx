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

            {Links.map((NavbarLink) => {
                return <li key={NavbarLink.path}>
                    <Link to={NavbarLink.path}>{NavbarLink.text}</Link>
                </li>
            })}

        </>
    )
}

export default NavbarLinks
