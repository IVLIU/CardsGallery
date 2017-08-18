import React from 'react';
import ReactDOM from 'react-dom';
import 'react-addons';
import App from './components/cards.jsx';
import getData from './scripts/fetch.js';
let gen=getData('./sourceData/data.json');
// let arrPromise=gen.next().value;
// console.info('firstNext',arrPromise);
// let newArr=gen.next(arrPromise);
// console.log('secondNext',newArr);
ReactDOM.render((
    <App />
),document.getElementById('content'));
