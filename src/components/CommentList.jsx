import { useEffect, useState } from "react"
import { getArticleComments } from "../api"
import { useParams } from "react-router-dom"

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
        <div>
            <ul>
                {comments.map((comment) => {
                    return (
                        <CommentItem key={comment.comment_id} comment={comment}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default CommentList