import { Link } from "react-router-dom"
function NavButton(props) {
    const { title, link } = props
    return (
        <>
            <li >
                <Link className="text-white font-bold text-center no-underline inline-block w-36 py-1 text-sm hover:underline" to={link}>{title}</Link>
            </li>
            
        </>
    )
}

export default NavButton