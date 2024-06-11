import { useState } from "react"
import products from "../assets/products.js"
import Footer from "../components/Footer.tsx"
import Header from "../components/Header.tsx"
import Hero from "../components/Hero.tsx"
import OnSaleCard from "../components/OnSaleCard.tsx"
import styles from "./OnSale.module.css"





function OnSale() {


    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(3);



    const productsOnSale = products.filter((product) => product.onsale === true);
    const sliceProducts = productsOnSale.slice(from, to);

    const handleNext = () => {
        const newFrom = Math.min(from + 3, products.length - 3);
        const newTo = Math.min(to + 3, products.length);
        setFrom(newFrom);
        setTo(newTo);
    };

    const handlePrevious = () => {
        const newFrom = Math.max(from - 3, 0);
        const newTo = Math.max(to - 3, 3);
        setFrom(newFrom);
        setTo(newTo);
    };



    return (

        <>
            <Header />
            <Hero firstText="tecnología" secondText="renovada" />
            <main>




                <div id={styles["navigation-buttons"]}>
                    <button onClick={handlePrevious} disabled={from >= products.length}>
                        {`<`}
                    </button></div>

                <div className={styles["product-container"]} id="products">
                    {sliceProducts.map((product) => (
                        <OnSaleCard
                            id={product.id}
                            title={product.title}
                            image={product.images[0]}
                            color={product.colors[0]}
                            price={product.price}
                        />
                    ))}
                </div>




                <div id={styles["navigation-buttons"]}>
                    <button onClick={handleNext} disabled={to >= products.length}>
                        {`>`}
                    </button></div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default OnSale