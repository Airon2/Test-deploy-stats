import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

let Footer = ()=>{
    return(
        <div className={styles.Footer}>
            <div className={styles.Footer_wrapper}>
                <div className={styles.footer_icon}>
                    <FaFacebook size={30}/>
                    <FaTwitter size={30}/>
                    <FaYoutube size={30}/>
                </div>

                <div className={styles.footer_div}>
                    <div className={styles.footer_div_text}>
                        <p><font color="343a40"><b>Ресурсы</b></font></p>
                        <p>Поддержка авторов</p>
                        <p>Публикации в Game Static</p>
                        <p>Сетевые службы</p>
                    </div>
                    <div className={styles.footer_div_text}>
                        <p>Политика в отношении фан-контента</p>
                        <p>Исследование пользовательского опыта</p>
                        <p>Сограшение с конечным пользователем</p>

                    </div>
                </div>

                <div className={styles.footer_div}>
                    <div className={styles.footer_div_text}>
                        <p><font color="343a40"><b>От Game Static</b></font></p>
                        <p>Battle Breakers</p>
                        <p>Fortnite</p>
                        <p>lnfiniti Blade</p>
                    </div>
                    <div className={styles.footer_div_text}>
                        <p>Shadow Conplex</p>
                    </div>
                </div>
                <hr/>
                <p>Информация о разрешении на игры </p>
            </div>
        </div>
    )
}

export default Footer;