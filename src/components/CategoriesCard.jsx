import React from 'react';
import styles from "./styles/CategoriesCard.module.css";
import itemBackground from "../assets/favBackground.png";
import notificationBackground from "../assets/notificationBackground.png"

const CategoriesCard = ({ menuItemImg, name, price, notification }) => {
    return (
        <div className={styles.categoriesCardContainer}>
            <div className={(name !== "Sushi") ? styles.individualCardContainer : styles.individualCardContainerOrange}>
                <div className={styles.menuWrapper}>
                    <img src={itemBackground} alt="background" />
                    <img src={menuItemImg} alt="menuItem" className={styles.foodItem} />
                </div>
                <div className={styles.notificationWrapper}>
                    <img src={notificationBackground} alt="notificationbackground" />
                    <p className={styles.notificationCount}>{notification}</p>
                </div>
                <div className={styles.ItemAndPrice}>
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    )
}
export default CategoriesCard;