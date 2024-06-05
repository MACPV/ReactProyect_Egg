import { useState } from "react";
import products from "../assets/products.js";
import styles from "./ProductCheckout.module.css";



function ProductCheckout(id) {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    type Product = {
        id: string;
        title: string;
        price: number;
    }
    let productInStorage: Product []= [];
    !localStorage.getItem("cart") ? localStorage.setItem("cart", JSON.stringify([])) : productInStorage = JSON.parse(localStorage.getItem("cart") || "[]");
        
    const manageCart = () => {
        const one = productInStorage.find((each) => each.id === id.id);
        if(!one) {
            productInStorage.push({id: product.id, title: product.title, price: product.price});
            setButton(true);
        } else {
            productInStorage = productInStorage.filter((each) => each.id !== id.id);
            setButton(false);
        }
        localStorage.setItem("cart", JSON.stringify(productInStorage));
    }
    

    const productId = id.id
    const product = products.find((product) => product.id === productId);
    return (
        <>
            <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>S/.{(product.price * quantity).toLocaleString()}</h2>
                    <p className={styles["checkout-description"]}>
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                        50711 haciendo la solicitud en AFIP.
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img src="../public/truck.png" alt="Truck" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                Agrega el producto al carrito para conocer los costos de envío
                            </span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img src="../public/plane.png" alt="Plane" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
                            </span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input id="input-quantity" type="number" min="1" defaultValue={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
                            <button type="button" className={button ? styles["remove-btn"] : styles["cart-btn"]} onClick={manageCart}>
                                {button ? "Remove from cart" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCheckout