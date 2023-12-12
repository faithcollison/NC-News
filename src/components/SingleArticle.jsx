import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../api"
import { Link } from "react-router-dom"
import Collapsible from "./Collapsible"
import CommentList from "./CommentList"

const SingleArticle = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    
    useEffect(() => {
        getArticleById(article_id)
        .then((data) => {
            setArticle(data.article)
        })
    }, [])
    return (
        <div className="single-article-container">
            <Link className="navigation-link "to="/articles"> Back to all articles </Link>
            <h2 className="single-article-text"> {article.title} </h2>
            <p className="single-article-text"> Written by: {article.author} </p>
            <p className="single-article-text"> {article.body} </p>
            <img className="single-article-img" src={article.article_img_url} />
            <p> Votes: {article.votes} </p>
            <p> Comments: {article.comment_count} </p>
            {/* <Link to={`/articles/${article.article_id}/comments`}> Click for comments
            </Link> */}
            <Collapsible descriptor="Comments">
                <CommentList />
            </Collapsible>
        </div>
    )
}
export default SingleArticle