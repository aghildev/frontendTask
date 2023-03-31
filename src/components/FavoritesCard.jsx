import React from 'react';
import styles from "./styles/FavoritesCard.module.css";
import ratingBackground from "../assets/ratingbackground.png";
import star from "../assets/star.png";

const FavoritesCard = ({ itemImg, restoName, travelDist, rating, category }) => {
    return (
        <div className={styles.favoritesCardContainer}>
            <div className={styles.favoritesIndividualCardContainer}>
                <img src={itemImg} alt="itemImage" className={styles.favItemImg} />
                <div className={styles.ratingContainer}>
                    <img src={ratingBackground} alt="ratingBackground" className={styles.ratingBackground} />
                    <div className={styles.starContainer}>
                        <img src={star} alt="star" />
                        <p>{rating}</p>
                    </div>
                </div>
                <h1 className={styles.restaurantName}>{restoName}</h1>
                <div className={styles.favSmallContainer}>
                    <p className={styles.travelDistance}>{travelDist}</p>
                    <p className={styles.favoritesCategory}>{category}</p>
                </div>
            </div>
        </div>
    )
}
export default FavoritesCard;