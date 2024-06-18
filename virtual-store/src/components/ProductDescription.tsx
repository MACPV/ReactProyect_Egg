import products from "../assets/products.js";

function ProductDescription(id) {
    const productId = id.id
    const product = products.find((product) => product.id === productId);
    return (
        <>
            <div className="w-[340px] flex flex-col bg-[#ebebeb] rounded-[5px]  p-[10px] m-[10px]">
                <h1 className="text-black text-[29px] font-bold break-words mt-0">{product.title}</h1>
                <form className="mt-[30px]">
                    <fieldset className="border-0 p-0 flex flex-col">
                        <label className="text-black text-xs font-bold" htmlFor="color">Color</label>
                        <select
                            className="w-full h-[40px] bg-black rounded-[10px] border border-solid border-gray-100 box-border p-[10px] my-2.5"
                            typeof="text"
                            aria-placeholder="Selecciona un color"
                            id="color"
                        >
                            {product.colors.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                    </fieldset>
                </form>
                <div className="mt-[30px] text-gray-500 leading-5">
                    <span className="text-black text-xs font-bold">Descripción</span>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDescription