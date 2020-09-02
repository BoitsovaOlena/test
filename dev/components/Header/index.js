import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import search from './Union.png';
import notifications from './notifications.png';
import icon from './avatar.png';
import styles from './style.scss';


const Header = () => {
    const [isShowForm, changeIsShow] = useState(true);
    const update = () => {
        if(window.innerWidth<840){
            changeIsShow(false)
        }else{
            changeIsShow(true)
        }
    }
    const getNav = () => {
        let nav = document.querySelector('nav')
        nav.className = `${styles[`on`]}`

    }
    const takeNav = () => {
        let nav = document.querySelector('nav')
        console.log(nav)
        nav.className = `${styles[`hidden`]}`

    }
    useEffect(() => {
        window.addEventListener('resize', update);
    })
    useEffect(() => {
        update()
    },[])
    return (
        <header>
            <NavLink to="/" exact className={styles.logo_wrap} ><img className={styles.logo} src={logo} alt="logo" /></NavLink>
            {isShowForm ? (
                <nav>
                    <ul className={styles.nav}>
                        <li>
                            <NavLink
                            activeStyle={{
                                color: '#0191D3'
                            }}
                            to="/"
                            exact
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            activeStyle={{
                                color: '#0191D3'
                            }}
                            to="/studio"
                            >
                                Студии
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            activeStyle={{
                                color: '#0191D3'
                            }}
                            to="/translation"
                            >
                                Трансляции
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            activeStyle={{
                                color: '#0191D3'
                            }}
                            to="/projects"
                            >
                                Проекты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                ) : (
                        <>
                        <div className={styles.nav_burg} onClick={() => getNav()}></div>
                        <nav className={styles.hidden}>
                            <ul className={styles.nav}>
                                <li>
                                    <NavLink
                                    activeStyle={{
                                        color: '#0191D3'
                                    }}
                                    to="/"
                                    exact
                                    >
                                        Главная
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    activeStyle={{
                                        color: '#0191D3'
                                    }}
                                    to="/studio"
                                    >
                                        Студии
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    activeStyle={{
                                        color: '#0191D3'
                                    }}
                                    to="/translation"
                                    >
                                        Трансляции
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    activeStyle={{
                                        color: '#0191D3'
                                    }}
                                    to="/projects"
                                    >
                                        Проекты
                                    </NavLink>
                                </li>
                            </ul>
                            <div className={styles.nav_close} onClick={() => takeNav()}>Close</div>
                        </nav>
                        </>
                )
            }
            
            <div className={styles.inner}>
                <img className={styles.search} src={search} alt="search" />
                <img className={styles.notifications} src={notifications} alt="notifications" />
                <NavLink to="/profile" exact><img className={styles.icon} src={icon} alt="icon" /></NavLink>

            </div>
        </header>
        )
}


export default Header;