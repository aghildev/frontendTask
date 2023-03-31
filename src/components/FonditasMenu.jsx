import React from 'react';
import styles from "./styles/FonditasMenu.module.css";
import cake from "../assets/caketeria.png";
import pizza from "../assets/pizzeria.png";
import continental from "../assets/desayunos.png";
import salad from "../assets/ensaladish.png";
import otro from "../assets/otros.png";
import pasta from "../assets/pastish.png"
import FonditasMenuCard from './FonditasMenuCard';

const FonditasMenu = () => {
    const fonditasMenuObj = [
        {
            id: 1,
            fonditasImg: cake,
            rating: 9.8,
            engHead: "Hot cakes",
            spanishHead: "Hot caketerías",
            speciality: "Incluye dos toppics",
            timing: "20-30 min",
            price: "Desde $70"
        }, {
            id: 2,
            fonditasImg: pizza,
            rating: 9.8,
            engHead: "Pizza",
            spanishHead: "Pizzería",
            speciality: "Chingo de pzzas",
            timing: "~45 min",
            price: "Desde $70"

        }, {
            id: 3,
            fonditasImg: continental,
            rating: 9.8,
            engHead: "Continental",
            spanishHead: "Desayunos",
            speciality: "Incluye huevo y tostadas",
            timing: "15-20 min",
            price: "Desde $50"


        }, {
            id: 4,
            fonditasImg: salad,
            rating: 9.8,
            engHead: "Sushi",
            spanishHead: "Ensaladish",
            speciality: "Muchas frutas",
            timing: "30-40 min",
            price: "Desde $70"

        }, {
            id: 5,
            fonditasImg: otro,
            rating: 9.8,
            engHead: "Hot cakes",
            spanishHead: "Otros desayunos",
            speciality: "Incluye dos jugos y tocinito",
            timing: "~20 min",
            price: "Desde $50"

        }, {
            id: 6,
            fonditasImg: pasta,
            rating: 9.8,
            engHead: "Pizza",
            spanishHead: "Pastish",
            speciality: "Una súper duper pasta",
            timing: "10-20 min",
            price: "Desde $50"

        }
    ]
    return (
        <div className ={styles.fontidasMainContainer}>
            <h2 className={styles.fonditasMenuHead}>Fonditas</h2>
            <h1 className={styles.fonditasMenuMainHead}>Los mejores menús</h1>
            <div className={styles.fontidasSmContainer}>
                <p className={styles.fontidasText}>Aquí están los mejores menús de la semana, y decide que vas a pedir </p>
                <p className={styles.fontidasshortText}>Ver todos</p>
            </div>
            <div style={{display: "flex",gap:"30px",flexWrap:"wrap"}}>
                {
                    fonditasMenuObj.map((fav) => {
                        const { id, fonditasImg, rating, engHead, spanishHead, speciality, timing, price } = fav
                        return (
                            <FonditasMenuCard key={id} fonditasImg={fonditasImg} rating={rating} engHead={engHead} spanishHead={spanishHead} speciality={speciality} timing={timing} price={price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FonditasMenu