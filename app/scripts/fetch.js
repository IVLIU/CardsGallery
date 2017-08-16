console.info('fetch start');
const getData=(url)=>{
    let header=new Headers();
    header.append('Accept','application/json');
    header.append('Content-Type','application/json');
    let req=new Request(url,{headers:header});
    return fetch(req)
    .then(response=>response.json())
    .then(data=>data.filter(item=>item.isActive))
    .catch(err=>console.error(err));
}
console.info('fetch end');
export default getData;