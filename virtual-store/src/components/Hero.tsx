


function Hero({firstText , secondText}) {

    return (
        <>
            <section className="bg-local w-full h-[200px] bg-center bg-cover" style={{backgroundImage: "url('../public/hero_bg.png')"}}>
                <article className="w-full h-full flex justify-center items-star flex-col text-white">
                    <span className="text-xl">{firstText}</span>
                    <span className="text-3xl">{secondText}</span>
                </article>
            </section></>
    )
}

export default Hero