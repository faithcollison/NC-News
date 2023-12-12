import { useState } from "react"
import { postComment } from "../api"

const CommentAdder = ({setComments, article_id}) => {
    const [newComment, setNewComment] = useState("")
    const [success, setSuccess] = useState(undefined)
    const [fail, setFail] = useState(undefined)
    const [isDisabled, setIsDisabled] = useState(false)

    

    const handleSubmit = (event) => {
    if(newComment.length > 0){
        event.preventDefault();
        setFail(false)
        setSuccess(true)
        setIsDisabled(true)
        setTimeout(() => {
            setSuccess(false);
            setIsDisabled(false);
            }, 1000);
        postComment(article_id, newComment)
        .then((newCommentFromApi) => {
            setIsDisabled(false)
            setNewComment("")
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
        })
        .catch((err) => {
            setSuccess(false)
        })
    }
    else {
        event.preventDefault();
        setFail(true)
    }
    }

    return (
        <div className="comment-adder">
        <form  onSubmit={handleSubmit}>
            <label htmlFor="newComment"> Add a comment </label>
            <textarea className="comment-text-box" id="newComment" multiline="true" value={newComment} onChange={(event) => setNewComment(event.target.value)}> </textarea>
            <button className="comment-adder-button" disabled={isDisabled}>
                Add
            </button>
            { success ? "✅" : ""}
            { fail ? "Please enter a comment" : ""}
        </form>
        </div>
    )
}

export default CommentAdder;