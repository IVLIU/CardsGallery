import React from 'react';
import styles from './play.css';
export default class Play extends React.Component{
    componentDidMount(){
        fetch('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=1329512',{
            mode:'cors',
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
    }
    render(){
        return (
            <div className={styles['play-container']}>play</div>
        );
    }
}