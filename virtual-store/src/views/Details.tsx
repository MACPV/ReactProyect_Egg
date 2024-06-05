import { useParams } from "react-router-dom";
import products from "../assets/products.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard.js";
import ProductCheckout from "../components/ProductCheckout.js";
import ProductDescription from "../components/ProductDescription.js";
import ProductImages from "../components/ProductImages.js";
import styles from "./Details.module.css";
function Details() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const productsOnSale = products.filter((product) => product.onsale === true);


  return (
    <>
      <Header />
      <main>
        <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <ProductImages id={product.id}/>
            <ProductDescription id={product.id}/>
            <ProductCheckout id={product.id}/>
          </div>
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>

            <div className={styles["product-container"]} id="products">

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

export default Details;
