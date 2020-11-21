import './App.css';
import News from './News'
import { useState, useEffect } from 'react';
import loadNews from './NewsLoader.js';

function App() {
  const [news, setNews] = useState(null);
  const [sources, setSources] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(()=>{
    async function getNews(){
      let loaded=await loadNews();
      setNews(loaded);
      var newSources=[];
      newSources.push('Все источники');
      loaded.articles.forEach((article)=>{
        if (newSources.indexOf(article.source.name)<0){
            newSources.push(article.source.name);
        }
      });
      setSources(newSources);
    }
    getNews();    
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1>Последние новости</h1>
          <span id="search-span">
              <span>
                  <label htmlFor="filter">Источник</label>

                  <select name="filter" id='filter' onChange={(e)=>{
                     if(e.target.value==='Все источники')  {setSelectedSource(null)} else{
                      setSelectedSource(e.target.value)
                     }                     
                    }
                  }>
                  {sources!==null ? (sources.map(source=>(<option value={source}>{source}</option>))) : <option value="Null"></option>}
                  </select>
              </span>
              <input type="text" name="search" id="search" placeholder="Поиск по новостям" onKeyUp={(e)=>{
                  if (e.keyCode === 13) {
                    e.preventDefault();
                    document.getElementById("search-btn").click();
                  }
                }}/>
              <button id="search-btn" onClick={()=>{setSearch(document.getElementById('search').value)}}>Искать</button>
          </span>
        </header>
        {news!==null ? <News search={search} selectedSource={selectedSource} articles={news.articles}/> : "Loading"}
        
      </div>
    );

}

export default App;
