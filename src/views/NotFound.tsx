import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import styles from "./NotFound.module.css"
function NotFound() {
    return (

        <>
        <body>
            <Header />
            <Hero firstText="tecnología" secondText="renovada" />
            <section className={styles["error-section"]}>
                <div className={styles["content-container"]}>
                    <h1 className={styles["title"]}>
                        Página no encontrada
                    </h1>
                    <p className={styles["message"]}>
                        Lo sentimos, la página que has solicitado no está disponible. Por favor, vuelve a la página principal.
                    </p>
                    <div className={styles["button-container"]}>
                        <Link to="/" className={styles["link-button"]}>
                            Ir a la página principal
                        </Link>
                    </div>
                </div>
            </section>
            <footer>
                    <Footer />
                </footer>
            </body>
        </>
    )
}
export default NotFound