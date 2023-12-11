import { useEffect, useState } from "react"
import { getArticleComments } from "../api"
import { useParams } from "react-router-dom"
import CommentItem from "./CommentItem"

const CommentList = () => {

    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    
    useEffect(() => {
    getArticleComments(article_id)
    .then((data) => {
        setComments(data.comments)
    })
    }, [comments])

    return (
        <div className="comment-container">
            <ul className="comment-list">
                {comments.map((comment) => {
                    return (
                        <li className="comment-item" key={comment.comment_id}><CommentItem key={comment.comment_id} comment={comment}/> </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default CommentList