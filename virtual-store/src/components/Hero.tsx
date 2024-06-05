import styles from "./Hero.module.css"


function Hero({firstText, secondText}) {

    return (
        <>
            <section className={styles["hero-section"]}>
                <article className={styles["hero-title"]}>
                    <span className={styles["hero-span"]}>{firstText}</span>
                    <span className={styles["hero-span"]}>{secondText}</span>
                </article>
            </section></>
    )
}

export default Hero