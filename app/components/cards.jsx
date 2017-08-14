import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/card.css';
class Cards extends React.Component{
    static defaultProps={
        url:'',
        title:''
    }
    render(){
        const {url,title}=this.props;
        return (
            <div className={styles.card}>
                <div className={styles.card_style}>
                    <img className={styles.img} src={url} /><br />
                    <h2 className={styles.title}>{title}</h2>
                </div>
            </div>
        )
    }
}

const App=()=>(
    <div className={styles.container}>
        <Cards url={require('../images/buck.png')} title='BUCK' />
        <Cards url={require('../images/Hedgehog.png')} title='HEDGEHOG' />
        <Cards url={require('../images/Hippo.png')} title='HIPPO' />
    </div>
)

export default App;