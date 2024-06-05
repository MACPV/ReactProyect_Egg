import { Link, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import styles from "./Header.module.css"
function Header() {
    return (
        <>
            <header >
                <div className={styles["header-container"]}>
                    <Link to="/" className={styles["header-logo"]}>
                        <img
                            className={styles["header-logo-img"]}
                            src="../public/tiendamia-logo.svg"
                            width="218"
                            alt="Logo store"
                        />
                    </Link>
                    <form className={styles["header-form"]}>
                        <input
                            className={styles["header-input"]}
                            type="text"
                            placeholder="Search"
                            id="search"
                        />
                    </form>
                    <ul className={styles["header-social"]}>
                        <li id="facebook" className={styles["header-li"]}>
                            <a className={styles["header-a"]} href="https://facebook.com">
                                <img
                                    className={styles["header-social-img"]}
                                    src="../public/facebook.svg"
                                />
                            </a>
                        </li>
                        <li id="instagram" className={styles["header-li"]}>
                            <a className={styles["header-a"]} href="https://instagram.com">
                                <img
                                    className={styles["header-social-img"]}
                                    src="../public/instagram.svg" />
                            </a>
                        </li>
                        <li id="cart" className={styles["header-li"]}>
                            <Link className={styles["header-a"]} to="/cart">
                                <img
                                    className={styles["header-social-img"]}
                                    src="../public/cart-shopping-solid.svg"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <NavBar />
            </header>
            <Outlet />
        </>
    )
}
export default Header