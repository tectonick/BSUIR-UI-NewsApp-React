import React from "react";

function NewsItem({article}) {
  return (
    <section className="news-item">
        <img src={article.urlToImage} alt="" />
        <h2>{article.title}</h2>
        <em>{article.source.name}</em>
        <p>{article.description}</p>
        <a href={article.url}>Подробнее в источнике</a>
    </section>
  );
}

export default NewsItem;
