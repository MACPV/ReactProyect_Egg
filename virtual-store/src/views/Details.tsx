import { useParams } from "react-router-dom";
import products from "../assets/products.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard.js";
import ProductCheckout from "../components/ProductCheckout.js";
import ProductDescription from "../components/ProductDescription.js";
import ProductImages from "../components/ProductImages.js";
import NotFound from "./NotFound.js";
function Details() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const productsOnSale = products.filter((product) => product.onsale === true);
  
  if (!product) {
    return <NotFound />
  } else {
    return (
      <>
        <Header />
        <main>
          <div className="w-full flex flex-wrap ">
            <div id="details" className="w-full flex flex-wrap justify-center">
              <ProductImages id={product.id} />
              
                <ProductDescription
                  id={product.id}
                />
              
                <ProductCheckout id={product.id}
                />
              
            </div>
            <div className="w-full flex flex-wrap  justify-center ">
              <h2 className="block text-center text-xl justify-center text-white items-center lg:text-4xl">Ofertas de la semana</h2>

              <div className="w-full flex flex-wrap justify-center" id="products">

                {productsOnSale?.map((product, index) => (


                  <ProductCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    image={product.images[0]}
                    color={product.colors[0]}
                    price={product.price}
                  />
                ))}
              </div>


            </div>
          </div>
        </main>
        <Footer />
      </>
    );

  }


}

export default Details;
