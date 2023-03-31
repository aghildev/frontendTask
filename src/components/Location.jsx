import React from 'react';
import leftRectangle from "../assets/Rectangle.png";
import oval from "../assets/Oval.png";
import man from "../assets/Man.png";
import map from "../assets/Map.png";
import gpsIcon from "../assets/gpsIcon.png";
import styles from "./styles/Location.module.css";

const Location = () => {
    return (
        <div className={styles.locationMainContainer}>
            <div className={styles.styleImgContainer}>
                <img src={leftRectangle} alt="reactangle" className={styles.leftRect} />
                <img src={oval} alt="oval" className={styles.oval} />
            </div>
            <div className={styles.locationContainer}  >
                <div>
                    <img src={man} alt="man" className={styles.man} />
                    <img src={map} alt="map" className={styles.map} />
                </div>
                <div className={styles.mapData}>
                    <p className={styles.mapbtn}>Mapa</p>
                    <h2>Encuentra en <br />
                        el mapa las mejores
                        fondas</h2>
                    <p className={styles.mapText}>Encuentra las fondas cercanas por sí quieres hacer pick up <br />directo en las tiendas. </p>
                    <div className={styles.mapLastFlex}>
                        <div className={styles.mapInputContainer}>
                            <input type="text" className={styles.mapInput} placeholder="Tu código postal" />
                            <img src={gpsIcon} alt="gpsIcon" className={styles.gpsIcon} />
                        </div>
                        <div>
                            <button className={styles.mapbtnOrange}>Buscar en mapa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;