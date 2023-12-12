import { useState } from "react"
import { postComment } from "../api"

const CommentAdder = ({setComments, article_id}) => {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, newComment)
        .then((newCommentFromApi) => {
            setNewComment("")
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
        })
    }

    return (
        <div className="comment-adder">
        <form  onSubmit={handleSubmit}>
            <label htmlFor="newComment"> Add a comment </label>
            <textarea className="comment-text-box" id="newComment" multiline="true" value={newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
            <button className="comment-adder-button">
                Add
            </button>
        </form>
        </div>
    )
}
export default CommentAdder;