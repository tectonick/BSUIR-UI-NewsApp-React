import React from 'react';
import NewsItem from './NewsItem';


function News({articles}) {
    return (
        <main>
            {articles.forEach(element => {
                <NewsItem article={element}/>  
            })}
        </main>
    )
        
    
}

export default News;