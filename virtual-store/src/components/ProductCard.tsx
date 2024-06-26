import { Link } from "react-router-dom"

import Product from "../interfaces/ProductCard.ts"
function ProductCard(prop: Product) {
    const { id, title, color, price, image } = prop
    return (
        <>
            <Link className="bg-[#f0f0f0] text-[#383838] rounded-[15px] w-[250px] m-[15px] no-underline object-contain " to={"/details/"+id}>
                            <img
                                className="w-full h-[250px] object-cover object-center rounded-t-[15px]"
                                src={image}
                                alt={id}
                            />
                            <div className="p-[20px] box-border">
                                <span className="text-[20px] font-bold leading-6 break-words block">{title}</span>
                                <span className="text-[12px] font-normal text-[#383838] mb-[5px]">{color}</span>
                                <div className="flex my-[5px] justify-between items-center">
                                    <span className="text-[20px] font-bold">{price}</span>
                                    <span className="text-[12px] font-bold text-[#428f13]">50% Off</span>
                                </div>
                                <div className="text-[10px] font-light">
                                    Incluye impuesto País y percepción AFIP
                                </div>
                            </div>
                        </Link>
        </>
    )
}

export default ProductCard