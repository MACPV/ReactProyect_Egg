
import products from "../assets/products.js";
function ProductImages(id) {
    const productId = id.id
    const product = products.find((product) => product.id === productId);
    return (
        <>
            <section className="flex w-[340px] p-[10px] m-[10px]">
                <div className="w-[44px] m-[3px]">
                    {product.images.map((each, index) => (
                        <img
                            key={index}
                            className="w-[45px] h-[45px] object-cover rounded-[2px] cursor-pointer" 
                            src={each}
                            alt={`Product image ${index + 1}`}
                        />
                    ))}
                </div>
                <img
                    className="w-[280px] h-[280px] object-cover rounded-[10px] cursor-pointer"
                    id="big-img"
                    src={product.images[0]}
                    alt={product.title}
                />
            </section>
        </>
    )

}

export default ProductImages