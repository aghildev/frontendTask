import React from 'react';
import styles from './styles/FooterMain.module.css'
import partition from "../assets/partition.png"
import telegramIcon from "../assets/telegram-plane.png"

const FooterMain = () => {
    return (
        <div className={styles.footerMainContainer}>
            <div className={styles.footerFirstFlex}>
                <h2 className={styles.footerMainHead}>Te apasiona ayudar
                    a tu comunidad?</h2>
                <p className={styles.footerMenu}>Menu</p>
                <p className={styles.footerSubscribe}>Suscríbete</p>
            </div>
            <div className={styles.footerSecondFlex}>
                <h2 className={styles.footerMainBigHead}>Fonditas</h2>
                <p className={styles.footerMainFirstText}>Nosotros Fonditas</p>
                <p className={styles.footerMainSecondText}>Mapa Subir</p>
                <div className={styles.footerInputContainer}>
                    <input type="text" className={styles.footerMainInput} />
                    <img src={telegramIcon} alt="telegramIcon" placeholder="Tu e-mail" className={styles.telgramIcon} />
                </div>
            </div>
            <img src={partition} alt="divider" />
            <div className={styles.footerLast}>
                <p className={styles.footerTerms}>Términos y condiciones</p>
                <p className={styles.footerPrivacy}>Privacidad</p>
                <p className={styles.footerCopyright}>© 2020 Fonditas</p>
            </div>
        </div>
    )
}
export default FooterMain