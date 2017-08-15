
    console.info('fetch start');
    let getSource=()=>{
        let url='../sourceData/data.json';
        let header=new Headers();
        header.append('Accept', 'application/json');
        let req=new Request(url,{headers:header});
        fetch(req);
    }
    export default getSource();
