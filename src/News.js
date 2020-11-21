import NewsItem from './NewsItem';
import React from 'react';
import { useState, useEffect } from 'react';

function News({articles, search, selectedSource}) {
    var [displayed, setDisplayed]=useState(5);
    var found=false;
        return (
            <main>
                {articles.map((element, index) => {
                    if (index<displayed){
                        if ((selectedSource==null)||(element.source.name==selectedSource)){
                            if ((search==null)||(element.title.indexOf(search)>=0)||(element.description.indexOf(search)>=0)){
                                found=true;
                                return <NewsItem article={element}/> 
                            } 
                        }
                    }  
                })}
                {!found&&(<section id='not-found'><p >По вашему запросу ничего не найдено</p></section>)}
                <a href="/" id='more-button' onClick={(e)=>{
                    e.preventDefault();
                    setDisplayed(displayed+5);
                }}>Загрузить больше новостей</a>
            </main>
        )            

    
}

export default News;