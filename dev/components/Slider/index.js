import React, {useState} from 'react';
import { useSelector} from "react-redux";
import styles from './style.scss';
import Slide from '../Slide';

const Slider= () => {
    const list = useSelector(store => store.slider);
    const [index, changeIndex] = useState(0);

    const slideChange = (e) => {
        if(e.target.dataset.direction==='next'&&index<3){
            changeIndex(index + 1)

        }
        if(e.target.dataset.direction==='prev'&&index>0){
            changeIndex(index - 1)
        } 

    }
    return(
        <div className={styles.slider}>
            <button className={styles.prev} data-direction='prev' onClick={slideChange}></button>
            <Slide 
                picture={list[index].picture}
                header= {list[index].header}
                company= {list[index].company}
                description={list[index].description}
                place={list[index].place}
                time={list[index].time} 
                price={list[index].price}
            />
            <button className={styles.next} data-direction='next' onClick={slideChange}></button>
        </div >
    )
}
        

 


export default Slider;