import React from 'react'
import styles from "./styles/Navbar.module.css"
import cartImg from "../assets/cart.png"
import cartBackground from "../assets/cartbackground.png"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <a href="#">Fonditas</a>
            </div>
            <ul className={styles.navbarNavitems}>
                <li className={styles.navItem}><a href="#">Nosotros</a></li>
                <li className={styles.navItem}><a href="#">Fonditas</a></li>
                <li className={styles.navItem}><a href="#">Mapa</a></li>
                <li className={styles.navItem}><a href="#">Inscribírse</a></li>
            </ul>
            <div className={styles.navbarRight}>
                <button className={styles.navbarBtn}>Inicia sesión</button>
                <div className={styles.cartWrapper}>
                    <img className={styles.cartImage} src={cartImg} alt="cartImage" />
                    <img className={styles.cartBackground} src={cartBackground} alt="cartbackground" />
                </div>
            </div>
        </nav>
    )
}
export default Navbar;