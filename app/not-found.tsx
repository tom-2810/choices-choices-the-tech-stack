import Link from "next/link";
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.error}>
            <h3><span>Oeps!</span> Er is iets mis gegaan.</h3>

            <p>
                De pagina die je zoekt, is helaas niet gevonden. Misschien heb je een verkeerde afslag genomen
                of is er iets misgegaan tijdens het navigeren van onze tool. Probeer het opnieuw om op de juiste
                pagina te belanden.
            </p>
            <Link href="/">Terug naar home</Link>
        </div>
    )
}