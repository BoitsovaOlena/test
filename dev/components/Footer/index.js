import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from './style.scss';

import Icon from '../Icon';


const Footer= () => (
    <footer>
        <ul className={styles.footer_nav}>
                <li>
                    <NavLink
                    activeStyle={{
                        color: '#0191D3'
                    }}
                    to="/we"
                    exact
                    >
                        Кто мы
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeStyle={{
                        color: '#0191D3'
                    }}
                    to="/investors"
                    >
                        Инвесторам
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeStyle={{
                        color: '#0191D3'
                    }}
                    to="/confidentiality"
                    >
                        Политика конфиденциальности
                    </NavLink>
                </li>
            </ul>
            <div className={styles.social_networks}>
                <a target="_blank" href="https://www.instagram.com/?hl=uk">
                    <Icon name="ig" />
                </a>
                <a target="_blank" href="https://uk-ua.facebook.com/">
                    <Icon name="fb" />
                </a>
                <a target="_blank" href="https://www.youtube.com/">
                    <Icon name="youtube" />
                </a>
                <a target="_blank" href="https://web.telegram.org/">
                    <Icon name="telegram" />
                </a>
            </div>
        </footer>
    )
 


export default Footer;