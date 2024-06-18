import { Link, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
function Header() {
    return (
        <>
            <header className="w-full h-auto bg-red-500 flex items-center flex-col " >
                <div className="w-full h-auto flex justify-between items-center grow object-contain ">
                    <Link to="/" className="w-1/3 flex items-center grow justify-start">
                        <img
                            className="h-[50px] object-contain"
                            src="../public/tiendamia-logo.svg"
                            width="218"
                            alt="Logo store"
                        />
                    </Link>
                    <form className="w-1/3 flex items-center grow">
                        <input
                            className="h-[60px] rounded-xl border-none w-full p-[10px] my-0 mx-5 text-[14px] items-center"
                            type="text"
                            placeholder="Search"
                            id="search"
                        />
                    </form>
                    <ul className="w-1/3 flex items-center grow justify-end list-none object-contain">
                        <li id="facebook" className="w-[50px]">
                            <Link className="w-[50px]" to="https://facebook.com">
                                <img
                                    className="w-[50px] p-[10px]"
                                    src="../public/facebook.svg"
                                />
                            </Link>
                        </li>
                        <li id="instagram" className="w-[50px]">
                            <Link className="w-[50px]" to="https://instagram.com">
                                <img
                                    className="w-[50px] p-[10px]"
                                    src="../public/instagram.svg" />
                            </Link>
                        </li>
                        <li id="cart" className="w-[50px]">
                            <Link className="w-[50px]" to="/cart">
                                <img
                                    className="w-[50px] p-[10px]"
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