

function CartResume() {
    return (
        <><div className="w-80  flex-col bg-[#291c1c] rounded-lg p-7 m-2.5 h-56 flex justify-between items-center break-words">
            <div className="flex-grow flex flex-col justify-between">
                <h2 className="flex justify-between">
                    <span>Resumen</span>
                    <span>del</span>
                    <span>pedido</span>
                </h2>
                <div className="flex justify-between items-center">
                    <h3>Total</h3>
                    <strong>$800000</strong>
                </div>
                <small className="pb-2.5">Incluye impuesto PAIS y percepción AFIP.</small>
            </div>
            <button
                className="w-full bg-red-600 text-white font-bold py-2.5 rounded-lg hover:bg-red-500"
                id="buy"
                type="button"
            >
                COMPRAR
            </button>
        </div>
        </>
    )
}

export default CartResume