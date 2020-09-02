import React, { useState, useEffect } from 'react';
import { useSelector} from "react-redux";

import Slider from '../Slider';
import SliderMin from '../SliderMin';
import Rubric from '../Rubric';
import styles from './style.scss';

const Main = () => {
    const list = useSelector(store => store.tasks);
    const [isShowForm, changeIsShow] = useState(true);
    const update = () => {
        if(window.innerWidth<840){
            changeIsShow(false)
        }else{changeIsShow(true)}
    }
    useEffect(() => {
        window.addEventListener('resize', update);
    })
    useEffect(() => {
        update()
    },[])

    return(
        <div className={styles.projects_all}>
                        {
                isShowForm ? (
                    <Slider/>
                ) : (
                    <SliderMin/>
                )
            }

            <Rubric title='Новые проекты' idList={list} />
            <Rubric title='Проекты недели' idList={list}/>
            <Rubric title='Топ 20' idList={list} />
        </div>
    )
}
 


export default Main;