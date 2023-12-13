import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Collapsible from "./Collapsible"
import CommentList from "./CommentList"
import { incrVoteCount, decrVoteCount, getArticleComments, getArticleById } from "../api"


const SingleArticle = () => {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    const {article_id} = useParams()
   

    useEffect(() => {
        getArticleById(article_id)
        .then((data) => {
            setArticle(data.article)
            setVotes(data.article.votes)
        })
    }, [])
    
    useEffect(() => {
        getArticleComments(article_id)
        .then((data) => {
            setComments(data.comments)
        })
    }, [])

    const upVote = (article_id) => {
        setVotes((prevVotes) => prevVotes + 1)
        incrVoteCount(article_id)
        .catch((err) => {
            setVotes((prevVotes) => prevVotes - 1)
            console.log("Request failed")
        })
    }
    const downVote = (article_id) => {
        setVotes((prevVotes) => prevVotes - 1)
        decrVoteCount(article_id)
        .catch((err) => {
            setVotes((prevVotes) => prevVotes + 1)
            console.log("Request failed")
        })
    }

    const date = new Date(article.created_at).toString()
    const dateStr = date.replace(/\sGMT.*/, "")
    
    return (
        <div className="single-article-container">
            <Link className="navigation-link "to="/articles"> Back to all articles </Link>
            <h2 className="single-article-text"> {article.title} </h2>
            <p className="single-article-text"> {article.body} </p>
            <img className="single-article-img" src={article.article_img_url} />
            <p className="single-article-text"> Written by {article.author} </p>
            <p> Created at {dateStr} </p>
            <p> {votes} Votes </p>
            <button className="like-vote-button" onClick={() => upVote(article.article_id)}> Like </button>
            <button className="dislike-vote-button" onClick={() => downVote(article.article_id)}> Dislike </button>
            <p> {article.comment_count} Comments </p>
            <Collapsible descriptor="Comments" comments={comments}>
                <CommentList article={article} setComments={setComments} comments={comments}/>
            </Collapsible>
        </div>
    )
}
export default SingleArticle