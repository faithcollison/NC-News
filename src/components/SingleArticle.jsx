import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../api"
import { Link } from "react-router-dom"
import Collapsible from "./Collapsible"
import CommentList from "./CommentList"
import { getArticleComments } from "../api"

const SingleArticle = () => {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    
    useEffect(() => {
        getArticleById(article_id)
        .then((data) => {
            setArticle(data.article)
        })
    }, [])
    
    useEffect(() => {
        getArticleComments(article_id)
        .then((data) => {
            setComments(data.comments)
        })
    }, [])
    
    return (
        <div className="single-article-container">
            <Link className="navigation-link "to="/articles"> Back to all articles </Link>
            <h2 className="single-article-text"> {article.title} </h2>
            <p className="single-article-text"> Written by: {article.author} </p>
            <p className="single-article-text"> {article.body} </p>
            <img className="single-article-img" src={article.article_img_url} />
            <p> {article.votes} Votes </p>
            <p> {article.comment_count} Comments </p>
            <Collapsible descriptor="Comments" comments={comments}>
                <CommentList comments={comments}/>
            </Collapsible>
        </div>
    )
}
export default SingleArticle