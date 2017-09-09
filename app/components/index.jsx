import React from 'react';
import Nav from './nav/nav.jsx';
import Content from './content/content.jsx';
import styles from '../styles/index.css';
import {Link,Route} from 'react-router-dom';
import '../styles/normalize.css';
import Button from './button/button.jsx';
export default class App extends React.Component{
    render(){
        return (
            <div className={styles['app-container']}>
                <div className={styles['app-nav']}>
                    <Nav />
                </div>
                <div className={styles['app-content']}>
                    <Content />
                </div>
                <div className={styles['app-button']}>
                    <Button />
                </div>
            </div>
        );
    }
}