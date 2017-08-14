import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/card.css';
class Cards extends React.Component{
    render(){
        return (
            <div>
                <img src={require('../images/Hedgehog.png')} />
            </div>
        )
    }
}

const App=()=>(
    <div className={styles.container}>
        <Cards />
    </div>
)

export default App;