import React from 'react';
import ReactDOM from 'react-dom';
import 'react-addons';
import App from './components/cards.jsx';
import getData from './scripts/fetch.js';
let gen=getData('./sourceData/data.json')();
// let arr=gen.next();
// console.log(arr.value);
// //console.log(gen.next(arr));
// //console.log(Object.assign({},gen.next(arr)));
// ReactDOM.render((
//     <App />
// ),document.getElementById('content'));

var List = React.createClass({
    render: function() {  
        var isChildrenArray = (this.props.children instanceof Array).toString();
        
        var childrenCopy = React.Children.map(this.props.children, function (child) {
            return React.addons.cloneWithProps(child)
        });
        
        var isCopyArray = (childrenCopy instanceof Array).toString();
        
        return(
            <div>
                Are my children an array? {isChildrenArray} <br/>
                Are my copied children an array? {isCopyArray}
                <ul>{this.props.children}</ul>
            </div>
        );
    }
});

var ListItem = React.createClass({
    render: function() {
        return(
            <li>{this.props.children}</li>
        );
    }
});
 
ReactDOM.render(
  <List>
      <ListItem>aardvark</ListItem>
      <ListItem>badger</ListItem>
      <ListItem>copabara</ListItem>
  </List>,document.getElementById('content'));