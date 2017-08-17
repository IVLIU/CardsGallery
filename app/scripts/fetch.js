// console.info('fetch start');
// const getData=(url)=>{
//     let arr=[];
//     let header=new Headers();
//     header.append('Accept','application/json');
//     header.append('Content-Type','application/json');
//     let req=new Request(url,{headers:header});
//         return fetch(req)
//         .then(response=>{
//             return response.json();
//         })
//         .then(data=>data.filter(item=>{
//             if(item.isActive){
//                 //arr.push(Object.assign({},item));
//                 return item;
//             }
            
//         }))
//         .catch(err=>console.error(err));

// }
// console.info('fetch end');
// export default getData;


const getData=()=>{
    return function* (){
        yield 0;
        return 0;
    }
}

export default getData;