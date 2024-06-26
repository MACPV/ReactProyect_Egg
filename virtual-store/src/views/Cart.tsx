import { useEffect, useState } from "react"
import CartCard from "../components/CartCard"
import CartResume from "../components/CartResume"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Product from "../interfaces/Product"

function Cart() {
    const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            const products: Product[] = JSON.parse(cart);
            setProductsOnCart(products);
        }
    }, []);

    return (
        <>
            <Header />
            <Hero firstText="Mi" secondText="Carrito" />
            <main>
                <section className="flex flex-col">
                    {productsOnCart.map((each) => (
                        <CartCard
                        key={each.id}
                            product={each}
                        />
                    ))}
                </section>


                <CartResume />
            </main>
            <Footer />
        </>
    )
} export default Cart