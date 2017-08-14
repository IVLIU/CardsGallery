import React from 'react';

class Cards extends React.Component{
    render(){
        <div>
            <img src={require('../images/Hedgehog.png')} />
        </div>
    }
}

const App=()=>(
    <div>
        <Cards />
    </div>
)

export default App;