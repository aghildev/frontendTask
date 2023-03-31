import React from 'react';
import styles from "./styles/BannerContent.module.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import socialBackground from "../assets/socialbackground.png";
import bannerCup from "../assets/bannerCup.png";
import cuttingBoard from "../assets/cuttingBoard.png";
import panEgg from "../assets/bannerLstImg.png";
import whiteDot1 from "../assets/bannerwhitedot1.png";
import whiteDot2 from "../assets/bannerwhitedot2.png";

const BannerContent = () => {
    return (
        <div className={styles.bannerContentContainer}>
            <div className={styles.bannerContentLeft}>
                <h1>De tu fonda favorita</h1>
                <h2>La comida que
                    ya conoces <br />
                    al mejor precio</h2>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Busca tu platillo favorito" className={styles.inputBox} />
                    <button type="button" className={styles.buttonInput}>Buscar</button>
                </div>
                <div className={styles.socialIcons}>
                    <div className={styles.facebookWrapper}>
                        <img src={facebook} alt="facebook" className={styles.facebookIcon} />
                        <img src={socialBackground} alt="background" />
                    </div>
                    <div className={styles.twitterWrapper}>
                        <img src={twitter} alt="twitter" className={styles.twitterIcon} />
                        <img src={socialBackground} alt="background" />
                    </div>
                    <div className={styles.instaWrapper}>
                        <img src={instagram} alt="instagram" className={styles.instagramIcon} />
                        <img src={socialBackground} alt="background" />
                    </div>
                </div>
            </div>
            <div className={styles.bannerContentRight} >
                <img src={bannerCup} alt="coffeecup" className={styles.bannerCup} />
                <img src={cuttingBoard} alt="cutting board" className={styles.cuttingBoard} />
                <img src={panEgg} alt="egg omlete pan" className={styles.panEgg} />
                <img src={whiteDot1} alt="starboard" className={styles.whiteDot1} />
                <img src={whiteDot2} alt="starboard" className={styles.whiteDot2} />
            </div>
        </div>
    )
}

export default BannerContent;