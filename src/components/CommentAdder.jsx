import { useState } from "react"
import { postComment } from "../api"

const CommentAdder = ({setComments, article_id}) => {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, newComment)
        .then((newCommentFromApi) => {
            console.log(newCommentFromApi)
            setNewComment("")
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
        })
    }

    return (
        <form className="comment-adder" onSubmit={handleSubmit}>
            <label htmlFor="newComment"> Add a comment </label>
            <textarea id="newComment" multiline="true" value={newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
            <button>
                Add
            </button>
        </form>
    )
}
export default CommentAdder;