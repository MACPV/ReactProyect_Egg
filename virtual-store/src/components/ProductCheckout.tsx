import { useState } from "react";
import products from "../assets/products.js";
import styles from "./ProductCheckout.module.css";


function ProductCheckout(id) {
    
    const productId = id.id
    const product = products.find((product) => product.id === productId);
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const isInCart = cart.find((productCart) => productCart.id === product.id);
    const defaultButton = isInCart ? true : false;
    const defaultQuantity = isInCart ? isInCart.quantity : 1;
    const [quantity, setQuantity] = useState(defaultQuantity);
    const [button, setButton] = useState(defaultButton);



    const manageCart = () => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }

        const cartProduct = { ...product, quantity };

        let newCart = [...cart];
        const isInCart = cart.find((productCart) => productCart.id === product.id);

        if (!isInCart) {
            newCart.push(cartProduct);
            setButton(true);
        } else {
            newCart = cart.filter((each) => each.id !== product.id);
            setButton(false);
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    function subTotal(e) {
        setQuantity(Number(e.target.value));
    }

    return (
        <>
            <div className="flex flex-col w-[340px] p-[10px] m-[10px]">
                <div className="bg-[#ebebeb] rounded-[5px] p-[33px] text-[#428f13]">
                    <span className="text-red-600">Total:</span>
                    <h2 id="price" className="text-[28px] font-bold mt-[10px]">S/.{(product.price * quantity).toLocaleString()}</h2>
                    <p className="leading-5 break-words">
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                        50711 haciendo la solicitud en AFIP.
                    </p>
                    <ul className="p-0 list-none mb-[30px]">
                        <li className="flex my-4">
                            <span className="mr-[15px]">
                                <img src="../public/truck.png" alt="Truck" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                Agrega el producto al carrito para conocer los costos de envío
                            </span>
                        </li>
                        <li className="flex my-4">
                            <span className="mr-[15px]">
                                <img src="../public/plane.png" alt="Plane" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
                            </span>
                        </li>
                    </ul>
                    <div className="gap-y-5">
                        <div className="flex mb-[10px]">
                            <input className="h-[40px] rounded-[10px] border-none w-[62px] mr-[10px] box-border px-5 pr-2.5 text-white" id="input-quantity" type="number" min="1" defaultValue={quantity} onChange={(e) => subTotal(e)} />
                            <button
                                type="button"
                                className={`${button ? 'w-full bg-black text-white font-bold py-2.5 rounded-lg hover:bg-gray-700' : 'w-full bg-red-600 text-white font-bold py-2.5 rounded-lg hover:bg-red-500'}`}
                                onClick={manageCart}
                            >
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