import styles from './Main.module.css'
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from 'react-slick';
import SampleMainGames from './SampleMainGames';
{/*import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/}

let Main = ()=>{
  {/*
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };*/}
  
    return(
        <div className={styles.Main}>
            <div className={styles.Main_wrapper}>
              <div className={styles.Main_icon}>
                <div className={styles.Main_icon_text_div}>
                  <h1 className={styles.Main_icon_title}>GAME STATS</h1>
                  <p  className={styles.Main_icon_text}>Добро пожаловать на наш сайт, посвящённый игровым статистикам!<br/> Здесь вы найдете всю необходимую информацию о различных аспектах игрового мира: от динамичных онлайн-сражений до стратегических анализов и последних новостей индустрии. </p>
                </div>
                <button className={styles.Main_icon_btn}><b>ЗАРЕГИСТРИРУЙТЕСЬ, ЧТО БЫ УЗНАТЬ СВОЮ СТАТИСТУ</b></button>
              </div>
              <div className={styles.favorites}>
                <div className={styles.favorites_txt}>
                  <p>Избранные</p>
                  <MdKeyboardArrowRight size={20}/>
                </div>
                <div className={styles.favorites_slider}>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                </div>
              </div>
              <div className={styles.Main_info}>
                <div className={styles.Main_info_div}>
                  <img src='./images/Main_info_icon1.png'/>
                  <h2>БУДЬТЕ В ПЕРВЫХ МЕСТАХ</h2>
                  <p>Соответствуете <font color="339BFF">требованиям к участью</font></p>
                </div>
                <div className={styles.Main_info_div}>
                  <img src='./images/Main_info_icon2.png'/>
                  <h2>ПУБЛИКУЙТЕ И ДЕЛИТЕСЬ </h2>
                  <p>Приняв условия, поделитесь совей статистикой с друзьями и получайте <font color="339BFF">бонусы</font></p>
                </div>
                <div className={styles.Main_info_div}>
                  <img src='./images/Main_info_icon3.png'/>
                  <h2>ПОЛУЧАЙТЕ ПРИЗЫ </h2>
                  <p>Вы можете получить <font color="339BFF">игровые вещи</font> за первые места в списках лидеров </p>
                </div>
              </div>
              <div className={styles.Main_popular_games}>
                <div className={styles.favorites_txt}>
                  <p>Наиболее популярные</p>
                  <MdKeyboardArrowRight size={20}/>
                </div>
                <div className={styles.favorites_slider}>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                  <SampleMainGames/>
                </div>
              </div>
              <div className={styles.Main_games}>
                <img src='./images/Main_games_icon1.png'/>
                <img src='./images/Main_games_icon2.png'/> 
              </div>
             
            </div>
        </div>
    )
}

export default Main;