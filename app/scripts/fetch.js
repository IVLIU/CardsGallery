import "babel-polyfill";
console.info('fetch start');
const getData=(url)=>{
    //let arr=[];
    let header=new Headers();
    header.append('Accept','application/json');
    header.append('Content-Type','application/json');
    let req=new Request(url,{headers:header});
    return function*(){
        yield fetch(req)
        .then(response=>{
            return response.json();
        })
        .then(data=>data.filter(item=>{
            if(item.isActive){
                let arr=[];
                return arr.push(Object.assign({},item));
                //return arr.push(item);
                //return new Promise((resolve,reject)=>{
                //    resolve(arr.push(item));
                //})
                //.catch(err=>reject(err));
            }
            
        }))
        .catch(err=>console.error(err));
        //yield arr;
    }
}
console.info('fetch end');
export default getData;