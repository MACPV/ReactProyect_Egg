import { Link } from "react-router-dom"
import styles from "./NavButton.module.css"
function NavButton(props) {
    const { title, link } = props
    return (
        <>
            <li className={styles["nav-li"]}>
                <Link className={styles["nav-a"]} to={link}>{title}</Link>
            </li>
            
        </>
    )
}

export default NavButton