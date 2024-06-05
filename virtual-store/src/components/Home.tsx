import products from "../assets/products.js"
import Footer from "./Footer.tsx"
import Header from "./Header.tsx"
import Hero from "./Hero.tsx"
import styles from "./Home.module.css"
import ProductCard from "./ProductCard.tsx"
function Home() {
    console.log("Home")
    return (
        <>
            <body>
                <Header />
                <Hero firstText="tecnología" secondText="renovada" />
                <main>
                    <div className={styles["product-container"]} id="products">
                        {products.map((each) => (
                            <ProductCard
                                key={each.id}
                                id={each.id}
                                title={each.title}
                                price={each.price}
                                color={each.colors[0]}
                                image={each.images[0]}
                            />
                        ))}

                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </body></>
    )
}

export default Home