import React from 'react';
import {Link,Route} from 'react-router-dom';
import Play from '../play/play.jsx';
export default class Button extends React.Component{
    render(){
        return (
            <div>
                <Link to='/Play'>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                        <path d="M626.976 553.408l-160 117.76a32 32 0 0 1-44.736-6.784 31.36 31.36 0 0 1-3.968-29.12A32.128 32.128 0 0 1 416 624v-192c0-2.688 0.928-5.12 1.568-7.68a31.424 31.424 0 0 1 4.16-26.624 32 32 0 0 1 44.576-7.936l160 111.616a32.096 32.096 0 0 1 0.64 52.032M512 128C300.288 128 128 300.288 128 511.968c0 211.744 172.288 384 384 384 211.744 0 384-172.224 384-384 0-211.68-172.256-383.936-384-383.936" fill="#1296db"></path>
                    </svg>
                </Link>
                <Route path='/Play' component={Play}></Route>
            </div>
        );
    }
}