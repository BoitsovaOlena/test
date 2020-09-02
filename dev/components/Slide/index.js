import React from 'react';
import { Link} from 'react-router-dom';
import styles from './style.scss';


const Slide= ({picture, header,company, description, place, time, price}) => {
    console.log(picture)
    return (
        <div className={`${styles[`slide_${picture}`]}`}>
            <div className={styles.main}>
                <h2>{header}</h2>
                <div className={styles.wrapp}>
                    <p>{company}</p>
                    <p>{description}</p>
                    <a target="_blank" href="https://www.google.com.ua/maps/place/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B4%D0%B0%D1%80+140000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@52.3164928,76.8247193,11z/data=!3m1!4b1!4m5!3m4!1s0x42f9cad6074f811d:0x480e9e038c41819b!8m2!3d52.2873032!4d76.9674023?hl=uk">{place}</a>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.details_main}>Дата и время</p>
                <p className={styles.details_inf}>{time}</p>
                <p className={styles.details_main}>Цена участия</p>
                <p className={styles.details_inf}>{price}</p>
                <Link to="/">Подробнее</Link>
            </div>
        </div>
    )
}
 


export default Slide;