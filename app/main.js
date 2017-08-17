import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/cards.jsx';
import getData from './scripts/fetch.js';
console.log(
    
    getData('./sourceData/data.json')
   
);
ReactDOM.render((
    <App />
),document.getElementById('content'));