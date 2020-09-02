import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';



import All from '../All';
import Main from '../Main';
import styles from './style.scss';


const Projects = () => (
    <>
        <ul className={styles.menu}>
            <li>
                <NavLink
                activeStyle={{
                    color: '#FFFFFF',
                    background: '#0191D3'
                }}
                to="/projects"
                exact
                >
                    Все
                </NavLink>
            </li>
            <li>
                <NavLink
                activeStyle={{
                    color: '#FFFFFF',
                    background: '#0191D3'
                }}
                to="/projects/music"
                >
                    Музыка
                </NavLink>
            </li>
            <li>
                <NavLink
                activeStyle={{
                    color: '#FFFFFF',
                    background: '#0191D3'
                }}
                to="/projects/songs"
                >
                    Песни
                </NavLink>
            </li>
            <li>
                <NavLink
                activeStyle={{
                    color: '#FFFFFF',
                    background: '#0191D3'
                }}
                to="/projects/video"
                >
                    Видео
                </NavLink>
            </li>
            <li>
                <NavLink
                activeStyle={{
                    color: '#FFFFFF',
                    background: '#0191D3'
                }}
                to="/projects/texts"
                >
                    Тексты
                </NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/projects:num" component={All} />   
            <Route path="/projects/music" component={All} />
            <Route path="/projects/songs" component={All} />
            <Route path="/projects/video" component={All} />
            <Route path="/projects/texts" component={All} />
            <Route path="/projects" exact component={Main} />
            <Route path="*" render={() => <div>This page does not exist</div>} />
        </Switch>
    </>
)
 


export default Projects;