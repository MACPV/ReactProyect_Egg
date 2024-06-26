import { useRef } from "react";
import ProductProp from "../interfaces/ProductProp";

function CartCard(props: ProductProp) {
    const units = useRef<HTMLInputElement>(null);
    const { product } = props;
    if (!product) {
        return <div>Producto no disponible</div>
    }
    const manageUnits = () => {
        // Obtener el carrito del localStorage y verificar que no sea null
        const cartString = localStorage.getItem("cart");
        if (!cartString) {
            console.error("No cart found in localStorage");
            return;
        }

        // Parsear el carrito
        const productsOnCart = JSON.parse(cartString);

        // Encontrar el producto en el carrito
        const one = productsOnCart.find((each) => each.id === product.id);
        if (!one) {
            console.error("Product not found in cart");
            return;
        }


        // Actualizar la cantidad del producto
        one.units = Number(units?.current?.value);

        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem("cart", JSON.stringify(productsOnCart));
    };


    return (
        <article className="w-[380px] bg-[#291c1c] rounded-lg p-7 m-2.5 h-56 flex justify-between items-center break-words md:w-[500px] lg:w-[680px]">
            <img className="w-24 h-24 rounded-lg" src={product.images[0]} alt={product.title} />
            <div className="flex flex-col justify-between gap-1 w-80 h-24 ml-4">
                <strong className="font-bold">{product.title}</strong>
                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {product.colors[0]}
                </span>
                <input
                    className="w-16 h-10 rounded-lg border border-gray-300 px-2"
                    type="number"
                    name="quantity"
                    defaultValue={product.quantity}
                    ref={units}
                    onChange={manageUnits}
                    min="1"
                    id={product.id.toString()}
                />
            </div>
            <strong className="text-right ml-auto">S/. {product.price}</strong>
        </article>
    );
}

export default CartCard
