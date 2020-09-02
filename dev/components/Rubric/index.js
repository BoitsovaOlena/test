import React from 'react';

import { Link } from 'react-router-dom';

import styles from './style.scss';

const Rubric= ({title="Title", idList=[]}) => {

    return (

        <>
            <div className={styles.rubric_title}>
                <h3>{title}</h3>
                <Link to='/' >Смотреть все</Link>
            </div>
            <ul className={styles.rubric_list}>
                {
                    idList.map((item, index) => (
                        <li className={styles.article} key={index}>
                            <div className={styles[item.img]}></div>
                            <Link to='/'>
                                <h4>{item.name}</h4>
                                <p>{item.company}</p>
                            </Link>
                        </li>
                    ))          

                }
            </ul>
        </>
    )
}

export default Rubric;