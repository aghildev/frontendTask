import React from 'react'
import styles from "./styles/FonditasMenuCard.module.css"
import ratingBackground from "../assets/ratingbackground.png"
import star from "../assets/star.png"

const FonditasMenuCard = ({ fonditasImg, rating, engHead, spanishHead, speciality, timing, price }) => {
    console.log(fonditasImg, rating)
    return (
        <div className={styles.fontidasCardMainContainer}>
            <div className={styles.fontidasImgContainer}>
                <img src={fonditasImg} alt="fondiImg" className ={styles.fondiImg}/>
                <div className={styles.ratingContainerFontidas}>
                    <img src={ratingBackground} alt="ratingBackground" className={styles.ratingBackgroundFontidas} />
                    <div className={styles.starContainerFonditas}>
                        <img src={star} alt="star" />
                        <p className ={styles.starContainerFonditasRating}>{rating}</p>
                    </div>
                </div>
            </div>
            <div className={styles.fontidasCardDetailsContainer}>
                <p className={styles.fontidasEnglishName}>{engHead}</p>
                <h2 className={styles.fontidasSpanishName}>{spanishHead}</h2>
                <p className={styles.fontidasSpeciality}>{speciality}</p>
                <div className={styles.fontidasLstCont}>
                    <p className={styles.fontidasTiming}>{timing}</p>
                    <p className={styles.fontidasPrice}>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default FonditasMenuCard