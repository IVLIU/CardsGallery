import React from 'react';
import Hammer from 'react-hammerjs';
import styles from '../styles/card.css';
import getData from '../scripts/fetch.js';
class Cards extends React.Component{
    static defaultProps={
        url:'',
        title:''
    }
    constructor(props){
        super(props);
        this.state={
            style:{
                display:'none',
            }
        }
        this.handlePress=this.handlePress.bind(this);
        this.handleTap=this.handleTap.bind(this);
        this.deleteCard=this.deleteCard.bind(this);
    }
    deleteCard(ev){
        ev.stopPropagation();
    }
    handlePress(){
        this.setState({
            style:{
                display:'inline-block',
            }
        });
    }
    handleTap(){
        this.setState({
            style:{
                display:'none',
            }
        });
    }
    render(){
        const {url,title}=this.props;
        const {style}=this.state;
        return (
            <Hammer onPress={this.handlePress}>
                <div className={styles.card} onClick={this.handleTap}>
                    <div className={styles.card_style}>
                        <img className={styles.img} src={url} /><br />
                        <h2 className={styles.title}>{title}</h2><br />
                        <img style={style} onClick={this.deleteCard} className={styles.icon_close} src={require('../images/close.png')} />
                    </div>
                </div>
            </Hammer>
        )
    }
}

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style:{
                width:'300%',
                position: 'absolute',
                left: '0%',
                top: '0%',
            }
        }
    }
    handleSwipeLeft(ev){
        const {style}=this.state;
        let _num=Number(style.left.slice(0,style.left.length-1));
        if(ev.direction === 2 && _num>-200){
            this.setState({
                style:Object.assign({},this.state.style,{left:(_num+=-100)+'%'})
            });
        }
        if(ev.direction === 4 && _num<0){
            this.setState({
                style:Object.assign({},this.state.style,{left:(_num-=-100)+'%'})
            });
        }
    }
    render(){
        return (
            <Hammer onSwipe={ev=>this.handleSwipeLeft(ev)}>
                <div style={this.state.style} className={styles.container} ref={ref=>this.container=ref}>
                    {
                        React.Children.map(this.props.children,child=>{
                            return child;
                        })
                    }
                    <img className={styles.icon_add} src={require('../images/add.png')} />
                </div>
            </Hammer>
        );
    }
}

class App extends React.Component{
     render(){
        return (
            <Container>
                {
                    // console.log(
                    //     'back: ',
                    //     [getData('./sourceData/data.json')].map(promise=>{    
                    //         return promise.then(arr=>{
                    //             //console.log(arr);
                    //             arr.map(item=>{
                    //                 return item;
                    //             })
                    //         })
                    //     })
                    // )
                }
            </Container>
        )
     }
}


export default App;