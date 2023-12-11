const ArticleItem = ({article}) => {
    return (
        <div className="article-item-container">
            <div className="article-content">
                <p className="article-author"> {article.author} </p>
                <h3 className="article-text"> {article.title} </h3>
                <img className="article-img-url" src={article.article_img_url} />
            </div>
        </div>
        )

}
export default ArticleItem