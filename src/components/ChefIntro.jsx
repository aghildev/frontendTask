import React from 'react'
import chefWomen from "../assets/chefWomen.png"
import coffee from "../assets/coffee.png"
import oval from "../assets/chefoval.png"
import styles from "./styles/ChefIntro.module.css"

const ChefIntro = () => {
    return (
        <>
            <div className={styles.chefIntroMainContainer}>
                <div className={styles.chefIntoContainer}>
                    <img src={chefWomen} alt="chef" className={styles.chefImg} style={{ marginTop: "112px" }} />
                    <img src={coffee} alt="coffee" className={styles.coffeeImg} />
                </div>
                <div className={styles.chefIntroRightCont}>
                    <div style={{ marginRight: "10px" }}>
                        <h2 className={styles.chefIntroSmHead}>fondas</h2>
                        <h1 className={styles.chefIntroMainHead}>Sube tu fonda <br />
                            a fonditas duplica <br />
                            tus ingresos </h1>
                        <p className={styles.chefIntroPara}>Inscríbete a nuestra plataforma y comienza a generar en estos momentos de crísis</p>
                        <button className={styles.chefIntroBtn}>Subir mi fonda</button>
                    </div>
                    <div>
                        <img src={oval} alt="ovalShape" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChefIntro;