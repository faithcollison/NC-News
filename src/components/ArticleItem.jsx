export const ArticleItem = ({ article }) => {
  const date = new Date(article.created_at).toString();
  const dateStr = date.replace(/\d+:\d+:\d+\sGMT.*/, "");
  return (
    <div className="article-item-container">
      <div className="article-content">
        <p className="article-author"> {article.author} </p>
        <p className="article-author"> {dateStr} </p>
        <h3 className="article-text"> {article.title} </h3>
      </div>
      <div>
        <img className="article-img-url" src={article.article_img_url} />
      </div>
      <p className="votes-count"> {article.votes} votes </p>
    </div>
  );
};

