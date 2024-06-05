import styles from "./ProductImages.module.css";

import products from "../assets/products.js";
function ProductImages(id) {
    const productId = id.id
    const product = products.find((product) => product.id === productId);
    return (
        <>
            <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                    {product.images.map((each, index) => (
                        <img
                            key={index}
                            className={styles["mini-img"]}
                            src={each}
                            alt={`Product image ${index + 1}`}
                        />
                    ))}
                </div>
                <img
                    className={styles["big-img"]}
                    id="big-img"
                    src={product.images[0]}
                    alt={product.title}
                />
            </section>
        </>
    )

}

export default ProductImages