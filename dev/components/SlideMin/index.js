import React from 'react';
import { Link} from 'react-router-dom';
import styles from './style.scss';


const SlideMin= ({picture, header,company}) => {
    return (
        <div className={styles.slide_min}>
                <Link to="/" className={`${styles[`slide_${picture}`]}`}></Link> 
                <div>
                    <h2>{header}</h2>
                    <p>{company}</p>
                </div>                
        </div>
    )
}
 


export default SlideMin;