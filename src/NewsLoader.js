


export default async function loadNews(){
    const API_KEY='1b492488a06f476880d9b54d4e64fbbb';
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=ru&' +
    'apiKey='+API_KEY;
    return await fetch(url, {mode:'cors'}).then((response)=>response.json());
}