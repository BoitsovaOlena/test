import React, {useState} from 'react';
import { useSelector} from "react-redux";
import styles from './style.scss';

import SlideMin from '../SlideMin';

const SliderMin= () => {
    const list = useSelector(store => store.slider);
    const [index, changeIndex] = useState(0);

    const slideChange = (e) => {
        if(e.target.dataset.direction==='0'){
            changeIndex(0)

        }
        if(e.target.dataset.direction==='1'){
            changeIndex(1)

        }
        if(e.target.dataset.direction==='2'){
            changeIndex(2)

        }
        if(e.target.dataset.direction==='3'){
            changeIndex(3)

        }

    }
    return(
        <div className={styles.slider_min}>
            <SlideMin 
                picture={list[index].picture}
                header= {list[index].header}
                company= {list[index].company}
            />
            <div className={styles.btns}>
                <button  data-direction='0' onClick={slideChange}></button>
                <button  data-direction='1' onClick={slideChange}></button>
                <button  data-direction='2' onClick={slideChange}></button>
                <button  data-direction='3' onClick={slideChange}></button>
            </div>

        </div >
    )
}
        

 


export default SliderMin;