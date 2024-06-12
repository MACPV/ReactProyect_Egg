import products from "../assets/products.js"
import Footer from "./Footer.tsx"
import Header from "./Header.tsx"
import Hero from "./Hero.tsx"
import ProductCard from "./ProductCard.tsx"
function Home() {
    return (
        
            <>
                <Header />
                <Hero firstText={"tecnología"} secondText={"renovada"} />
                <main className="w-full flex justify-center items-center p-[20px]">
                    <div className="w-[1080px] flex flex-wrap justify-between" id="products">
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
            </>
    )
}

export default Home