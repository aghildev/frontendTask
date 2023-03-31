import React from 'react'
import styles from "./styles/FooterAdv.module.css";
import iphone from "../assets/iphone.png"
import dotClustur1 from "../assets/dotClustur1.png"
import dotClustur2 from "../assets/dotClustur2.png"

const FooterAdv = () => {
    return (
        <div className={styles.footerAdvMainContainer}>
            <div className={styles.footerAdvLeftCont}>
                <h2>Es tiempo de
                    ayudarnos,
                    Te unes?</h2>
            </div>
            <div className={styles.footerAdvRightCont}>
                <img src={iphone} alt="" className={styles.iPhone} />
                <img src={dotClustur1} alt="" className={styles.clustur1} />
                <img src={dotClustur2} alt="" className={styles.clustur2} />
            </div>
        </div>
    )
}

export default FooterAdv;