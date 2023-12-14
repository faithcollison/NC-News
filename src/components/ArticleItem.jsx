const ArticleItem = ({article}) => {
    const date = new Date(article.created_at).toString()
    const dateStr = date.replace(/\sGMT.*/, "")
    return (
        <div className="article-item-container">
            <div className="article-content">
                <p className="article-author"> {article.author} </p>
                <h3 className="article-text"> {article.title} </h3>
                <img className="article-img-url" src={article.article_img_url} />
                <p> {dateStr} </p>
            </div>
        </div>
        )

}
export default ArticleItem