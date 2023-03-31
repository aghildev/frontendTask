import React from 'react';
import BannerContent from './BannerContent';
import Navbar from './Navbar';
import styles from './styles/Banner.module.css';
import bannerbackground from "../assets/bannerBackground.png";

const Banner = () => {
  return (
    <div className = {styles.banner} style = {{backgroundImage: `url(${bannerbackground})`}}>
        <Navbar/>
        <BannerContent/>
    </div>
  )
}

export default Banner;