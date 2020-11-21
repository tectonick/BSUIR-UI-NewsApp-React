import React from "react";

function NewsItem({article}) {
  return (
    <section class="news-item">
        <img src={article.imgUrl} alt="" />
        <h2>{article.title}</h2>
        <em>{article.source}</em>
        <p>{article.description}</p>
        <a href={article.url}>Подробнее в источнике</a>
    </section>
  );
}

export default NewsItem;
