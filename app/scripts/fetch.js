import "babel-polyfill";
import immutable from 'immutable';
console.log(immutable);
console.info('fetch start');
const getData=(url)=>{
    let newArr=[];
    let header=new Headers();
    header.append('Accept','application/json');
    header.append('Content-Type','application/json');
    let req=new Request(url,{headers:header});
    //return function*(){
        return fetch(req)
        .then(response=>{
            return response.json();
        })
        .then(data=>data.filter(item=>{
            if(item.isActive){
                return item;
            }
        }))
        .then(arr=>{
            newArr=arr.slice();
        })
        .catch(err=>console.error(err));
        return newArr;
    //}
}

// const getData=function*(url){
//     let newArr=[];
//     let header=new Headers();
//     header.append('Accept','application/json');
//     header.append('Content-Type','application/json');
//     let req=new Request(url,{headers:header});
//     yield fetch(req)
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>data.filter(item=>{
//         if(item.isActive){
//             return item;
//         }
//     }))
//     .then(arr=>{
//         //console.log(arr);
//         newArr=arr.slice();
//         return newArr;
//     })
//     .catch(err=>console.error(err));
//     yield newArr;
// }

// const getData=function*(url){
//     let header=new Headers();
//     header.append('Accept','application/json');
//     header.append('Content-Type','application/json');
//     let req=new Request(url,{headers:header});

//     try{
//         let response=yield fetch(req);
//         //console.log(response);
//         let resJson=yield response.json();
//         console.log(resJson);
//     }
//     catch(err){
//         console.error(`Oops, error: ${err}`)
//     }
// }
console.info('fetch end');
export default getData;