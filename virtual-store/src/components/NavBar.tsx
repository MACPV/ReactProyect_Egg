import NavButton from "./NavButton";
function NavBar() {
    return (
        <>
            <nav className="w-full h-auto px-5 py-4 bg-red-500 flex justify-between font-sm list-none  flex-wrap items-start  lg:w-[1080px] lg:flex lg:flex-nowrap ">

                <NavButton className="hover:underline " title="Ofertas" link="/onsale" />
                <NavButton className="hover:underline " title="Cómo comprar" link="#" />
                <NavButton className="hover:underline " title="Costos y tarifas" link="#" />
                <NavButton className="hover:underline "title="Mis pedidos" link="#" />
                <NavButton className="hover:underline " title="Garantía" link="#" />

            </nav>
            
        </>
    )

}
export default NavBar