import React from 'react';
import ReactDOM from 'react-dom';
import 'react-addons';
import App from './components/cards.jsx';
import getData from './scripts/fetch.js';
let gen=getData('./sourceData/data.json')();
let fetchBack=gen.next();
let list=gen.next();
console.log(fetchBack);
console.log(list);
ReactDOM.render((
    <App />
),document.getElementById('content'));
