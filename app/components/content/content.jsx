import React from 'react';
import {Route} from 'react-router-dom';
import styles from './content.css';
import Home from '../home/home.jsx';
import List from '../list/list.jsx';
import Person from '../person/person.jsx';

export default class Content extends React.Component{
    render(){
        return (
            <div className={styles['component-container']}>
                <Route exact path='/' component={Home}></Route>
                <Route path='/List' component={List}></Route>
                <Route path='/Person' component={Person}></Route>
            </div>
        );
    }
}