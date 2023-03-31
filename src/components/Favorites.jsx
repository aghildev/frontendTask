import React from 'react';
import styles from './styles/Favorites.module.css';
import donaLaura from "../assets/dona laura.png";
import rosaCafe from "../assets/rosa cafe.png";
import leCotti from "../assets/le cotti.png";
import querreque from "../assets/querreque.png";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
    const favoritesData = [
        {
            id: 1,
            itemImg: donaLaura,
            restoName: "Doña Laura",
            travelDist: "20-30 min",
            rating: "9.8",
            category: "Fonditas"
        }, {

            id: 2,
            itemImg: rosaCafe,
            restoName: "Rosa Cafe",
            travelDist: "~45 min",
            rating: "8.5",
            category: "Lonchería"
        }, {
            id: 3,
            itemImg: leCotti,
            restoName: "Le cottidiene",
            travelDist: "15-20 min",
            rating: "7.3",
            category: "Sushi"
        }, {
            id: 4,
            itemImg: querreque,
            restoName: "Querreque",
            travelDist: "~50 min",
            rating: "8.0",
            category: "Veggies"
        }
    ]
    return (
        <>
            <div className={styles.favoritesHeadContainer}>
                <h2 className={styles.favoritesHead}>Fonditas</h2>
                <h1 className={styles.favoritesFavHead}>Fondas cercanas</h1>
                <p className={styles.favoritesPara}>‘Estás son las fondas que se encuentran cerca!</p>
            </div>
            <div className={styles.favoritesTemplateContainer}>
                {
                    favoritesData.map((fav) => {
                        const { id, itemImg, restoName, travelDist, rating, category } = fav
                        return (
                            <FavoritesCard key={id} itemImg={itemImg} restoName={restoName} travelDist={travelDist} rating={rating} category={category} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Favorites;